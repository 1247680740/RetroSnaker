var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var SocketManager = (function () {
    function SocketManager() {
        this.soud = RES.getRes("end_wav");
    }
    SocketManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new SocketManager;
        }
        return this.instance;
    };
    SocketManager.prototype.init = function () {
        this.socket = new egret.WebSocket;
        this.socket.type = egret.WebSocket.TYPE_STRING;
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
    };
    SocketManager.prototype.start = function (url, port) {
        this.socket.connect(url, port);
        wy.LoadingData.open(false);
        this.state = "";
        this.inRank = false;
    };
    SocketManager.prototype.end = function () {
        this.socket.close();
    };
    SocketManager.prototype.onReceiveMessage = function (e) {
        var msg = this.socket.readUTF();
        var data;
        data = JSON.parse(msg);
        if (data.type == "" + StaticVar.type && data.die == "1") {
            if (this.soud) {
                this.soud.play(0, 1);
            }
        }
        else if (data.gameover == "1") {
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i][0] == "" + StaticVar.type) {
                    wy.changeScene(OnePeople, "", [i + 1, data.data[i]]);
                    this.socket.close();
                    break;
                }
            }
        }
        // console.log(data.x==undefined);
        // this.state = msg['gameover'];
        // if (this.state == "") {
        //     this.state = msg['msgContent'];
        //     FreshNotifyManager.getInstance().notify(FreshNotifyEnum.CONNECTPOS, msg['msgContent']);
        //     console.log("=================空=========")
        //     return;
        // }
        // console.log("msg=" + msg + " state=" + this.state);
        // switch (this.state) {
        //     case FreshNotifyEnum.GAME_START: {
        //         wy.notify(FreshNotifyEnum.GAME_START);
        //     } break;
        //     case FreshNotifyEnum.COLEDOWN: {//倒计时
        //         wy.notify(FreshNotifyEnum.COLEDOWN, msg['msgContent']);
        //     } break;
        //     case FreshNotifyEnum.GAME_OVER: {
        //         wy.notify(FreshNotifyEnum.GAME_OVER, msg['msgContent']);
        //     } break;
        //     case FreshNotifyEnum.RESULT: {
        //         console.log("成绩" + msg['data']);
        //         wy.notify(FreshNotifyEnum.RESULT, msg['data']);
        //     } break;
        // }
        //        if(data.msgContent == "success"){
        //            WndManager.switchWnd(GameBaoming,WIN_OPERATOR.WIN_CLOSE_DELETE);
        //            WndManager.switchWnd(GameMain,WIN_OPERATOR.WIN_OPEN_SHOW,WIN_EFFECT.EFFECT_WIN_OPEN_ALPHA);
        //        }else{
        //            WebSocketTool.webSocket.close();
        //            WndManager.switchWnd(GameBaoming,WIN_OPERATOR.WIN_CLOSE_DELETE);
        //            WndManager.switchWnd(GameUnableBM,WIN_OPERATOR.WIN_OPEN_SHOW,WIN_EFFECT.EFFECT_WIN_OPEN_ALPHA);
        //        }
    };
    SocketManager.prototype.send = function (obj) {
        //        console.log("send:"+obj);
        this.socket.writeUTF(JSON.stringify(obj));
    };
    SocketManager.prototype.onSocketOpen = function (e) {
        wy.LoadingData.close();
        egret.log("websocket connected!链接成功");
    };
    SocketManager.prototype.onSocketClose = function (e) {
        egret.log("websocket disconnected!");
        wy.notify("duankai");
        //        if(this.state <= 1) {
        //            SceneManager.changeScene(NoParkingPage,EFFECT_PARAM.SMALL2BIG);
        //        }
    };
    SocketManager.prototype.onSocketError = function (e) {
        //  wy.LoadingData.close();
        wy.Dialog.show("参数错误", this);
    };
    return SocketManager;
}());
__reflect(SocketManager.prototype, "SocketManager");
//# sourceMappingURL=SocketManager.js.map
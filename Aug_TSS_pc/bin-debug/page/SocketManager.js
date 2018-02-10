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
        this.dataErrorCount = 2;
        this.isMessageError = false;
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
        // this.dataErrorCount++
        var msg = this.socket.readUTF();
        this.data = JSON.parse(msg);
        // console.log(typeof msg );
        //  console.log("typeof msg" );
        //  console.log(msg);
        //   console.log(this.data);
        // if (typeof this.data == "number") {
        //     this.dataErrorCount++;
        //      console.log( this.dataErrorCount);
        // }else{
        //      this.dataErrorCount=0;
        // }
        // if (typeof (this.data) == "number" && this.dataErrorCount>=100) {
        //     this.socket.close();
        //     this.start("112.74.97.169", 9502);
        //     this.dataErrorCount = 0;
        // }
        if (this.p1x) {
            if (this.data.new && this.p1x) {
                var bo = true;
                for (var i = 0; i < this.p1x.shes.length; i++) {
                    if (this.p1x.shes[i]._id == Number(this.data.new)) {
                        bo = false;
                    }
                }
                if (bo) {
                    this.p1x.createshe(Number(this.data.new), this.data.nickname, this.data.openid, this.data.headimgurl);
                    if (this.p1x.shes.length == 8) {
                        this.p1x.daojishi = 5;
                    }
                }
            }
            else if (this.data.shan == "1") {
                if (this.p1x.shes[this.p1x.jianzhi["" + this.data.type]].openid == this.data.openid) {
                    this.p1x.shes[this.p1x.jianzhi["" + this.data.type]].shan();
                }
            }
            else if (this.data.x) {
                if (this.p1x && this.p1x.shes[this.p1x.jianzhi["" + this.data.type]]) {
                    if (this.p1x.shes[this.p1x.jianzhi["" + this.data.type]].openid == this.data.openid && (this.p1x.shes[this.p1x.jianzhi["" + this.data.type]].isbudong == false)) {
                        this.p1x.cundatax[this.p1x.jianzhi["" + this.data.type]] = Number(this.data.x);
                        this.p1x.cundatay[this.p1x.jianzhi["" + this.data.type]] = Number(this.data.y);
                        if (this.data.z == "1") {
                            this.p1x.cundataz[this.p1x.jianzhi["" + this.data.type]] = true;
                        }
                        else {
                            this.p1x.cundataz[this.p1x.jianzhi["" + this.data.type]] = false;
                        }
                    }
                }
            }
        }
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
        //    console.log("send:"+obj);
        this.socket.writeUTF(JSON.stringify(obj));
    };
    SocketManager.prototype.onSocketOpen = function (e) {
        wy.LoadingData.close();
        //   Main.times = egret.setInterval(() => {
        //     if (this.dataErrorCount==0) {
        //         this.start("112.74.97.169", 9502);
        //     }else{
        //         this.dataErrorCount=0;
        //     }
        // }, this, 1000)
        egret.log("websocket connected!链接成功");
        //断开重连
        // SocketManager.getInstance().send({"x":18})
    };
    SocketManager.prototype.onSocketClose = function (e) {
        console.log("websocket disconnected!");
        ;
        // wy.notify("duankai");
        //        if(this.state <= 1) {
        //            SceneManager.changeScene(NoParkingPage,EFFECT_PARAM.SMALL2BIG);
        //        }
    };
    SocketManager.prototype.onSocketError = function (e) {
        //  wy.LoadingData.close();
        wy.Dialog.show("参数错误");
    };
    return SocketManager;
}());
__reflect(SocketManager.prototype, "SocketManager");
//# sourceMappingURL=SocketManager.js.map
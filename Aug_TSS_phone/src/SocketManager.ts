/**
 *
 * @author 
 *
 */
class SocketManager {
    public constructor() {
    }

    private static instance: SocketManager;
    public static getInstance(): SocketManager {
        if (!this.instance) {
            this.instance = new SocketManager;
        }
        return this.instance;
    }

    public socket: egret.WebSocket;

    public init() {
        this.socket = new egret.WebSocket;
        this.socket.type = egret.WebSocket.TYPE_STRING;
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);

    }

    public start(url?: string, port?: number) {
        this.socket.connect(url, port);
        wy.LoadingData.open(false)
        this.state = "";
        this.inRank = false;
    }

    public end() {
        this.socket.close();
    }

    private state: string;
    private soud:egret.Sound=RES.getRes("end_wav");
    private inRank: boolean;
    private onReceiveMessage(e: egret.ProgressEvent) {
        var msg = this.socket.readUTF();
        var data;
        data = JSON.parse(msg);
        if(data.type==""+StaticVar.type&&data.die=="1"){
             if(this.soud){
            this.soud.play(0,1);
        }
        }else 
        if(data.gameover=="1"){
        
            
            for(let i=0;i<data.data.length;i++){
                if(data.data[i][0]==""+StaticVar.type){
             
                    
                    wy.changeScene(OnePeople,"",[i+1,data.data[i]])
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
    }

    public send(obj) {
        //        console.log("send:"+obj);
        this.socket.writeUTF(JSON.stringify(obj));
    }

    private onSocketOpen(e: egret.Event) {
        wy.LoadingData.close();
        egret.log("websocket connected!链接成功");
       
    }

    private onSocketClose(e: egret.Event) {
        egret.log("websocket disconnected!");
        wy.notify("duankai");
        //        if(this.state <= 1) {
        //            SceneManager.changeScene(NoParkingPage,EFFECT_PARAM.SMALL2BIG);
        //        }
    }

    private onSocketError(e: egret.Event) {
    //  wy.LoadingData.close();
       wy.Dialog.show("参数错误",this)
    }

}

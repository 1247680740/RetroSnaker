/**
 *
 *@author
 *
 */
class pg2 extends pg2UI {
	constructor() {
		super();
	}

	protected createChildren():void {
		super.createChildren();
	}

	public show(data?):void {
		super.show(data);
	
	var s=wj.Mytools.createshap(0,0,1036,640,0);
	this.addChildAt(s,0);
	s.touchEnabled=true;
	s.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
		if(SocketManager.getInstance().socket.connected){
			wy.changeScene(kongzhi,wy.PopType.ALPHAIN);
			 SocketManager.getInstance().send({"new":StaticVar.type,"nickname":wy.Data.nickname,"openid":wy.Data.openid,"headimgurl":wy.Data.headimgurl});
		}
		
	},this)

		wy.Tween.do(this);
	}

	public hide():void {
		super.hide();

	}

	private onTouchTap(e:egret.TouchEvent):void {
		switch(e.currentTarget) {
			default:
				break;
		}
	}
}
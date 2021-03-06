/**
 *
 *@author
 *
 */
class kongzhi extends kongzhiUI {
	/**触摸板类*/
	private x_jn: number;
	private y_jn: number;
	private a_num: number = -1;
	private isjiasu = 0;
	public carousel:egret.TextField;
	public slideText:egret.TextField;
	public quickeText:egret.TextField;
	constructor() {
		super();
	}
	protected createChildren(): void {
		super.createChildren();
	}

	public static cunshe:egret.Bitmap;
	private chong: egret.Bitmap;
	public show(data?): void {
		this.kzbg.alpha = 0;
		super.show(data);
		var bg = wy.Tools.createBitmapByName("p1_bg_jpg");
		this.addChildAt(bg, 0);
		wj.Donghua.yingru(this.title, 0, 300);
		wy.Tools.center(this.kzbg);
		wy.Tools.center(this.kzby);
		wy.Tools.center(this.btn);
		var chong = wy.Tools.createBitmapByName("chongzi" + StaticVar.type + "_png");
		kongzhi.cunshe=chong;
		this.chong = chong;
		this.addChild(chong);
		chong.touchEnabled = true;
		chong.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
		wy.Tools.center(chong);
		wj.Donghua.doudong(chong);
		chong.x = 1036 / 2;
		chong.y = 320;


		this.slideText=new egret.TextField();
		this.slideText.text ="滑动控制角色"; 
		this.slideText.x = this.kzbg.x-60;
		this.slideText.y = this.height/2-80;
		this.slideText.width = 200;
		this.slideText.height = 40;
		this.slideText.size = 20;
		this.slideText.textColor=0x000000;
		this.slideText.fontFamily = "微软雅黑";
		this.slideText.bold=true;
		this.slideText.alpha=0.3;
		this.addChild(this.slideText);

		this.quickeText=new egret.TextField();
		this.quickeText.text ="按下持续加速"; 
		this.quickeText.x = this.btn.x-50;
		this.quickeText.y = this.height/2;
		this.quickeText.width = 200;
		this.quickeText.height = 40;
		this.quickeText.size =20;
		this.quickeText.textColor=0x000000;
		this.quickeText.fontFamily = "微软雅黑";
		this.quickeText.bold=true;
		this.quickeText.alpha=0.3;
		this.addChild(this.quickeText)

		this.carousel= new egret.TextField();
		this.carousel.text ="你的手机已经变成游戏手柄了，看着大屏参与游戏吧!";   //"戏游行进蛇小的上幕屏大作操钮按幕屏机手过通请"  
		// this.carousel.x = -550;
		this.carousel.width = 550;
		this.carousel.height = 40;
		this.carousel.x = this.width/2-this.carousel.width/2;
		this.carousel.y = this.height-25;
		this.carousel.size = 22;
		this.carousel.textColor=0x000000; //0xFF6F6F;
		this.carousel.fontFamily = "微软雅黑";
		this.carousel.bold=true;
		this.carousel.alpha=0.3;
		// this.carousel.strokeColor=0x48BCFA;
		// this.carousel.stroke=1;
		this.carousel.textAlign = "center";
		this.addChild(this.carousel)
		// egret.Tween.get(this.carousel,{loop:true}).to({x:-550},20000,egret.Ease.sineInOut);
		
		this.kzbg.width = this.kzbg.height = 150

		// wy.Tools.center(this.l1);
		// var sh: egret.Shape = new egret.Shape();
		// sh.graphics.beginFill(0xff0000, 1);
		// sh.graphics.drawCircle(this.l1.x,this.l1.y, 100);
		// sh.graphics.endFill();
		this.btn.name = ""
		var sh = this.btn
		// sh.name="btn";
		sh.touchEnabled = true;
		sh.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => {
			this.isjiasu = 1
		}, this);
		sh.addEventListener(egret.TouchEvent.TOUCH_END, () => {
			this.isjiasu = 0
		}, this);
		this.conturol();

	}
	private click() {
		this.chong.touchEnabled = false;
		egret.setTimeout(() => {
			this.chong.touchEnabled = true;
		}, this, 10000)
			if (SocketManager.getInstance().socket.connected) {
				SocketManager.getInstance().send({ "type": StaticVar.type,"openid": wy.Data.openid,"shan":1 })
			} else {
				SocketManager.getInstance().start("39.106.5.94", 9555); //112.74.97.169
			}
	}
	public hide(): void {
		super.hide();
		this.chong.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
	}

	private onTouchTap(e: egret.TouchEvent): void {
		switch (e.currentTarget) {
			default:
				break;
		}
	}
	private contorl_bg: egret.Shape;
	private contorl_bg1: egret.Shape;
	private contorl: egret.Bitmap;
	private conturol(): void {
		//21,286左上角
		var contorl_bg: egret.Shape = new egret.Shape();
		contorl_bg.graphics.beginFill(0x000000, 0.5);
		contorl_bg.graphics.drawCircle(this.kzbg.x, this.kzbg.y, 150);
		console.log(this.kzbg.x);
		console.log(this.kzbg.y);


		contorl_bg.graphics.endFill();
		contorl_bg.alpha = 0.5;
		this.addChild(contorl_bg);
		contorl_bg.touchEnabled = true;
		this.contorl_bg = contorl_bg;
		this.contorl_bg1 = wj.Mytools.createshap(0, 0, 518, 640, 0, 0)
		this.contorl_bg1.touchEnabled = true;
		this.addChildAt(this.contorl_bg1, this.getChildIndex(this.contorl_bg))
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.endTouch, this);
		//66,325,r=15
		this.contorl = this.kzby
		// this.contorl.anchorOffsetX = 10;
		// this.contorl.anchorOffsetY = 10;
		this.contorl.x = this.kzbg.x;
		this.contorl.y = this.kzbg.y;
		this.contorl.alpha = 0.5;
		this.addChild(this.contorl);
	}
	private onTouch(e: egret.TouchEvent): void {
		//this.head.x = e.localX;
		//this.head.y = e.localY;
		if (e.target == this.contorl_bg) {
			//console.log(e.localX);
			//if(e.localX )

			//console.log(e.localX);
			//console.log(e.localY);
			//if(e.localX >=61 && e.localX <=105 && e.localY>=308 && e.localY<=345)
			//{
			//    }else{
			//console.log(e.localX);
			//console.log(e.localY);
			// this.addEventListener(egret.Event.ENTER_FRAME,this.move,this);//移动动作
			// }
			if (SocketManager.getInstance().socket.connected) {
				SocketManager.getInstance().send({ "x": e.stageX, "y": e.stageY, "z": this.isjiasu, "type": StaticVar.type, "openid": wy.Data.openid })
			} else {
				SocketManager.getInstance().start("39.106.5.94", 9555);    //112.74.97.169
			}
			this.contorl.x = e.localX;
			this.contorl.y = e.localY;
			this.x_jn = e.localX;
			this.y_jn = e.localY;
		} else if (e.target == this.contorl_bg1) {
			if (SocketManager.getInstance().socket.connected) {
				SocketManager.getInstance().send({ "x": e.stageX, "y": e.stageY, "z": this.isjiasu, "type": StaticVar.type, "openid": wy.Data.openid })
			} else {
				SocketManager.getInstance().start("39.106.5.94", 9555);  //112.74.97.169
			}
		}
	}
	private endTouch(e: egret.TouchEvent): void {

		this.contorl.x = this.kzbg.x;
			this.contorl.y = this.kzbg.y;
		if (e.target == this.contorl_bg) {
		}
	}
}
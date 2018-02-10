/**
 *
 *
 *
 *自动生成类
 *
 *请不要直接在此编码  重新生成会覆盖此类的
 *
 *如非必要请勿改动
 *
 *
 */
class kongzhiUI extends wy.BaseSprite {
	constructor() {
		super();
		this.width = 1036;
		this.height = 640;
		this.createChildren();
	}

	public l1:egret.TextField;
	public carousel:egret.TextField;
	public kzbg:egret.Bitmap;
	public kzby:egret.Bitmap;
	public btn:egret.Bitmap;
	public title:egret.Bitmap;
	protected createChildren():void {
		this.l1 = new egret.TextField();
		this.l1.text = "加  速";
		this.l1.x = 835;
		this.l1.y = 405;
		this.l1.width = 85;
		this.l1.height = 40;
		this.l1.size = 30;
		this.l1.textColor = 0x00ff00;
		this.l1.fontFamily = "微软雅黑";
		this.l1.textAlign = "center";
		this.addChild(this.l1);

		this.kzbg = new egret.Bitmap(RES.getRes("yuan2_png"));
		this.kzbg.x = 80;
		this.kzbg.y = 327;
		this.addChild(this.kzbg);

		this.kzby = new egret.Bitmap(RES.getRes("yuan1_png"));
		this.kzby.x = 132;
		this.kzby.y = 381;
		this.addChild(this.kzby);

		this.btn = new egret.Bitmap(RES.getRes("btn_png"));
		this.btn.x = 784;
		this.btn.y = 343.5;
		this.btn.name = "btn";
		this.addChild(this.btn);

		this.title = new egret.Bitmap(RES.getRes("p1_title_png"));
		this.title.x = 196;
		this.title.y = 32;
		this.addChild(this.title);

		//动画
	}
}
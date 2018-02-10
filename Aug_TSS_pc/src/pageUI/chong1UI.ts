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
class chong1UI extends wy.BaseSprite {
	constructor() {
		super();
		this.width = 640;
		this.height = 1070;
		this.createChildren();
	}


	protected createChildren():void {
		var img0:egret.Bitmap = new egret.Bitmap(RES.getRes("chong1_3_png"));
		img0.x = 205;
		img0.y = 514;
		this.addChild(img0);

		var img1:egret.Bitmap = new egret.Bitmap(RES.getRes("chong1_2_png"));
		img1.x = 205;
		img1.y =665;
		this.addChild(img1);

		var img2:egret.Bitmap = new egret.Bitmap(RES.getRes("chong1_1_png"));
		img2.x = 182;
		img2.y = 250;
		this.addChild(img2);



		//动画
	}
}
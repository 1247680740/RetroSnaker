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
class chong7UI extends wy.BaseSprite {
	constructor() {
		super();
		this.width = 640;
		this.height = 1070;
		this.createChildren();
	}


	protected createChildren():void {
		var img0:egret.Bitmap = new egret.Bitmap(RES.getRes("chong7_2_png"));
		img0.x = 235;
		img0.y = 423;
		this.addChild(img0);

		var img1:egret.Bitmap = new egret.Bitmap(RES.getRes("chong7_3_png"));
		img1.x = 235;
		img1.y = 540;
		this.addChild(img1);

		var img2:egret.Bitmap = new egret.Bitmap(RES.getRes("chong7_1_png"));
		img2.x = 185;
		img2.y = 243;
		this.addChild(img2);



		//动画
	}
}
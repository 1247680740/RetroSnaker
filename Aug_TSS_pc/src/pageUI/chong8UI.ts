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
class chong8UI extends wy.BaseSprite {
	constructor() {
		super();
		this.width = 640;
		this.height = 1070;
		this.createChildren();
	}


	protected createChildren():void {
		var img0:egret.Bitmap = new egret.Bitmap(RES.getRes("chong8_4_png"));
		img0.x = 380;
		img0.y = 695;
		this.addChild(img0);

		var img1:egret.Bitmap = new egret.Bitmap(RES.getRes("chong8_2_png"));
		img1.x = 230;
		img1.y = 595;
		this.addChild(img1);

		var img2:egret.Bitmap = new egret.Bitmap(RES.getRes("chong8_3_png"));
		img2.x = 230;
		img2.y = 688;
		this.addChild(img2);

		var img3:egret.Bitmap = new egret.Bitmap(RES.getRes("chong8_1_png"));
		img3.x = 183;
		img3.y = 239;
		this.addChild(img3);



		//动画
	}
}
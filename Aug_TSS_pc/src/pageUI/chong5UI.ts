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
class chong5UI extends wy.BaseSprite {
	constructor() {
		super();
		this.width = 640;
		this.height = 1070;
		this.createChildren();
	}


	protected createChildren():void {
		var img0:egret.Bitmap = new egret.Bitmap(RES.getRes("chong5_3_png"));
		img0.x = 246;
		img0.y = 609;
		this.addChild(img0);

		var img1:egret.Bitmap = new egret.Bitmap(RES.getRes("chong5_2_png"));
		img1.x = 257;
		img1.y = 502;
		this.addChild(img1);

		var img2:egret.Bitmap = new egret.Bitmap(RES.getRes("chong5_1_png"));
		img2.x = 130;
		img2.y = 165;
		this.addChild(img2);



		//动画
	}
}
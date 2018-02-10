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
class chong4UI extends wy.BaseSprite {
	constructor() {
		super();
		this.width = 640;
		this.height = 1070;
		this.createChildren();
	}


	protected createChildren():void {
		var img0:egret.Bitmap = new egret.Bitmap(RES.getRes("chong4_2_png"));
		img0.x = 245;
		img0.y = 528;
		this.addChild(img0);

		var img1:egret.Bitmap = new egret.Bitmap(RES.getRes("chong4_1_png"));
		img1.x = 197;
		img1.y = 328;
		this.addChild(img1);

		var img2:egret.Bitmap = new egret.Bitmap(RES.getRes("chong4_3_png"));
		img2.x = 245;
		img2.y = 650;
		this.addChild(img2);



		//动画
	}
}
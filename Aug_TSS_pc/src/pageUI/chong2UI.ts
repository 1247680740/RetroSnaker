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
class chong2UI extends wy.BaseSprite {
	constructor() {
		super();
		this.width = 640;
		this.height = 1070;
		this.createChildren();
	}


	protected createChildren():void {
		var img0:egret.Bitmap = new egret.Bitmap(RES.getRes("chong2_2_png"));
		img0.x = 200;
		img0.y = 488;
		this.addChild(img0);

		var img1:egret.Bitmap = new egret.Bitmap(RES.getRes("chong2_3_png"));
		img1.x = 200;
		img1.y = 598;
		this.addChild(img1);

		var img2:egret.Bitmap = new egret.Bitmap(RES.getRes("chong2_1_png"));
		img2.x = 179;
		img2.y = 232;
		this.addChild(img2);



		//动画
	}
}
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
class pg2UI extends wy.BaseSprite {
	public carousel:egret.TextField;
	constructor() {
		super();
		this.width = 1036;
		this.height = 640;
		this.createChildren();
	}


	protected createChildren():void {
		var txt0:egret.TextField = new egret.TextField();
		txt0.text = "点击屏幕开始游戏";
		txt0.x = 363;
		txt0.y = 291;
		txt0.width = 300;
		txt0.height = 40;
		txt0.size = 30;
		txt0.textAlign = "center";
		txt0.textColor = 0x00ff00;
		this.addChild(txt0);

		//动画
	}
}
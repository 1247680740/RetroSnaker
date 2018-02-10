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
class OnePeopleUI extends wy.BaseSprite {
	constructor() {
		super();
		this.width = 1036;
		this.height = 640;
		this.createChildren();
	}

	public bg:egret.Bitmap;
	public l1:egret.TextField;
	public l2:egret.TextField;
	public l3:egret.TextField;
	public l4:egret.TextField;
	public guang2:egret.Bitmap;
	public shan2:egret.Bitmap;
	public xin2:egret.Bitmap;
	public xin3:egret.Bitmap;
	public xin1:egret.Bitmap;
	public chongzi:egret.Bitmap;
	public guang1:egret.Bitmap;
	public shan1:egret.Bitmap;
	public lv:egret.TextField;
	public tip:egret.TextField;

	protected createChildren():void {
		this.bg = new egret.Bitmap(RES.getRes("bg_jpg"));
		this.bg.x = 0;
		this.bg.y = 0;
		this.addChild(this.bg);

		this.l1 = new egret.TextField();
		this.l1.text = "label";
		this.l1.textAlign = "left";
		this.l1.size = 15;
		this.l1.textColor = 0xffffff;
		this.l1.x = 577;
		this.l1.y = 294;
		this.l1.width = 200;
		this.l1.height = 17;
		this.addChild(this.l1);

		this.l2 = new egret.TextField();
		this.l2.text = "label";
		this.l2.textAlign = "left";
		this.l2.size = 15;
		this.l2.textColor = 0xffffff;
		this.l2.x = 576;
		this.l2.y = 339;
		this.l2.width = 200;
		this.l2.height = 18;
		this.addChild(this.l2);

		this.l3 = new egret.TextField();
		this.l3.text = "label";
		this.l3.textAlign = "left";
		this.l3.size = 15;
		this.l3.textColor = 0xffffff;
		this.l3.x = 576;
		this.l3.y = 386;
		this.l3.width = 200;
		this.l3.height = 18;
		this.addChild(this.l3);

		this.l4 = new egret.TextField();
		this.l4.text = "label";
		this.l4.textAlign = "left";
		this.l4.size = 15;
		this.l4.textColor = 0xffffff;
		this.l4.x = 576;
		this.l4.y = 433;
		this.l4.width = 200;
		this.l4.height = 17;
		this.l4.fontFamily = "";
		this.addChild(this.l4);

		this.tip = new egret.TextField();
		this.tip.text = "前三名玩家请持手机去活动方领奖";
		this.tip.textAlign = "center";
		this.tip.size = 25;
		this.tip.width = 380;
		this.tip.height = 25;
		this.tip.textColor = 0xffffff;
		this.tip.x = this.width/2-this.tip.width/2;
		this.tip.y = this.height-28;
		this.tip.fontFamily = "微软雅黑";
		this.tip.bold=true;
		this.tip.alpha=0.3;
		this.addChild(this.tip);

		this.guang2 = new egret.Bitmap(RES.getRes("guang2_png"));
		this.guang2.x = 273;
		this.guang2.y = 286;
		this.addChild(this.guang2);

		var img6:egret.Bitmap = new egret.Bitmap(RES.getRes("wutai_png"));
		img6.x = 272;
		img6.y = 401;
		this.addChild(img6);

		this.shan2 = new egret.Bitmap(RES.getRes("shan2_png"));
		this.shan2.x = 271;
		this.shan2.y = 401;
		this.addChild(this.shan2);

		this.xin2 = new egret.Bitmap(RES.getRes("xin1_png"));
		this.xin2.x = 341;
		this.xin2.y = 428;
		this.addChild(this.xin2);

		this.xin3 = new egret.Bitmap(RES.getRes("xin1_png"));
		this.xin3.x = 400;
		this.xin3.y = 426;
		this.addChild(this.xin3);

		this.xin1 = new egret.Bitmap(RES.getRes("xin1_png"));
		this.xin1.x = 285;
		this.xin1.y = 426;
		this.addChild(this.xin1);

		this.chongzi = new egret.Bitmap(RES.getRes("chongzi_png"));
		this.chongzi.x = 351;
		this.chongzi.y = 228;
		this.addChild(this.chongzi);

		this.guang1 = new egret.Bitmap(RES.getRes("guang1_png"));
		this.guang1.x = 263;
		this.guang1.y = 225;
		this.addChild(this.guang1);

		this.shan1 = new egret.Bitmap(RES.getRes("shan1_png"));
		this.shan1.x = 59;
		this.shan1.y = 34;
		this.addChild(this.shan1);

		this.lv = new egret.TextField();
		this.lv.text = "label";
		this.lv.x = 398;
		this.lv.y = 150;
		this.lv.width = 200;
		this.lv.height = 30;
		this.lv.textColor = 0xffffff;
		this.lv.size = 25;
		this.lv.textAlign = "center";
		this.addChild(this.lv);



		//动画
	}
}
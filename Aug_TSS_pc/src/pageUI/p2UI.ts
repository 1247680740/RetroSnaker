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
class p2UI extends wy.BaseSprite {
	constructor() {
		super();
		this.width = 1920;
		this.height = 1080;
		this.createChildren();
	}

	public bg:egret.Bitmap;
	public jin:egret.Bitmap;
	public g1:egret.Bitmap;
	public g2:egret.Bitmap;
	public g3:egret.Bitmap;
	public yin:egret.Bitmap;
	public tong:egret.Bitmap;
	public xian:egret.Bitmap;
	public kk:egret.Bitmap;
	public toux:egret.Bitmap;
	public btn1:egret.Bitmap;
	public btn2:egret.Bitmap;
	public btn3:egret.Bitmap;
	public shugan:egret.Bitmap;
	public zan:egret.Bitmap;
	public pren:egret.Bitmap;
	public l2:egret.TextField;
	public l1:egret.TextField;
	public l3:egret.TextField;
	public l4:egret.TextField;
	public nv:egret.Bitmap;
	public nan:egret.Bitmap;
	public title:egret.Bitmap;
	public diandian:egret.Bitmap;
	public caidai:egret.Bitmap;

	protected createChildren():void {
		this.bg = new egret.Bitmap(RES.getRes("p2_bg_png"));
		this.bg.x = 0;
		this.bg.y = 0;
		this.addChild(this.bg);

		this.jin = new egret.Bitmap(RES.getRes("p2_jin_png"));
		this.jin.x = 327;
		this.jin.y = 267;
		this.addChild(this.jin);

		this.g1 = new egret.Bitmap(RES.getRes("p2_1_png"));
		this.g1.x = 387;
		this.g1.y = 255;
		this.addChild(this.g1);

		this.g2 = new egret.Bitmap(RES.getRes("p2_2_png"));
		this.g2.x = 380;
		this.g2.y = 348;
		this.addChild(this.g2);

		this.g3 = new egret.Bitmap(RES.getRes("p2_3_png"));
		this.g3.x = 382;
		this.g3.y = 441;
		this.addChild(this.g3);

		this.yin = new egret.Bitmap(RES.getRes("p2_yin_png"));
		this.yin.x = 327;
		this.yin.y = 365;
		this.addChild(this.yin);

		this.tong = new egret.Bitmap(RES.getRes("p2_tong_png"));
		this.tong.x = 324;
		this.tong.y = 454;
		this.addChild(this.tong);

		this.xian = new egret.Bitmap(RES.getRes("p2_xian_png"));
		this.xian.x = 275;
		this.xian.y = 246;
		this.addChild(this.xian);

		this.kk = new egret.Bitmap(RES.getRes("p2_k3_png"));
		this.kk.x = 0;
		this.kk.y = 187;
		this.addChild(this.kk);

		this.toux = new egret.Bitmap(RES.getRes("p2_touxiang_png"));
		this.toux.x = 406;
		this.toux.y = 263;
		this.addChild(this.toux);

		this.btn1 = new egret.Bitmap(RES.getRes("p2_btn1_png"));
		this.btn1.x = 487;
		this.btn1.y = 964;
		this.btn1.name = "btn";
		this.addChild(this.btn1);

		this.btn2 = new egret.Bitmap(RES.getRes("p2_btn2_png"));
		this.btn2.x = 829;
		this.btn2.y = 964;
		this.btn2.name = "btn";
		this.addChild(this.btn2);

		this.btn3 = new egret.Bitmap(RES.getRes("p2_btn3_png"));
		this.btn3.x = 1173;
		this.btn3.y = 964;
		this.btn3.name = "btn";
		this.addChild(this.btn3);

		this.shugan = new egret.Bitmap(RES.getRes("p2_tiao_png"));
		this.shugan.x = 824;
		this.shugan.y = 286;
		this.addChild(this.shugan);

		this.zan = new egret.Bitmap(RES.getRes("p2_zao_png"));
		this.zan.x = 1540;
		this.zan.y = 288;
		this.addChild(this.zan);

		this.pren = new egret.Bitmap(RES.getRes("p2_preb_png"));
		this.pren.x = 1615;
		this.pren.y = 284;
		this.addChild(this.pren);

		this.l2 = new egret.TextField();
		this.l2.text = "label";
		this.l2.textAlign = "left";
		this.l2.size = 20;
		this.l2.textColor = 0;
		this.l2.x = 923;
		this.l2.y = 295;
		this.l2.width = 110;
		this.l2.height = 27;
		this.addChild(this.l2);

		this.l1 = new egret.TextField();
		this.l1.text = "label";
		this.l1.textAlign = "left";
		this.l1.size = 20;
		this.l1.textColor = 0;
		this.l1.x = 553;
		this.l1.y = 294;
		this.l1.width = 216;
		this.l1.height = 30;
		this.addChild(this.l1);

		this.l3 = new egret.TextField();
		this.l3.text = "label";
		this.l3.textAlign = "left";
		this.l3.size = 20;
		this.l3.textColor = 0;
		this.l3.x = 1203;
		this.l3.y = 297;
		this.l3.width = 18;
		this.l3.height = 24;
		this.addChild(this.l3);

		this.l4 = new egret.TextField();
		this.l4.text = "label";
		this.l4.textAlign = "left";
		this.l4.size = 20;
		this.l4.textColor = 0;
		this.l4.x = 1407;
		this.l4.y = 297;
		this.l4.width = 18;
		this.l4.height = 24;
		this.addChild(this.l4);

		this.nv = new egret.Bitmap(RES.getRes("p2_nv_png"));
		this.nv.x = 494;
		this.nv.y = 284;
		this.addChild(this.nv);

		this.nan = new egret.Bitmap(RES.getRes("p2_nan_png"));
		this.nan.x = 494;
		this.nan.y = 552;
		this.addChild(this.nan);

		this.title = new egret.Bitmap(RES.getRes("p2_title_png"));
		this.title.x = 697;
		this.title.y = 37;
		this.addChild(this.title);

		this.diandian = new egret.Bitmap(RES.getRes("p2_diandian_png"));
		this.diandian.x = 680;
		this.diandian.y = 21;
		this.addChild(this.diandian);

		this.caidai = new egret.Bitmap(RES.getRes("p2_caidai_png"));
		this.caidai.x = 305;
		this.caidai.y = 67;
		this.addChild(this.caidai);



		//动画
	}
}
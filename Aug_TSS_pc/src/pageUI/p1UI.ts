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
class p1UI extends wy.BaseSprite {
	constructor() {
		super();
		this.width = 1920;
		this.height = 1080;
		this.createChildren();
	}

	public bg:egret.Bitmap;
	public dan3:egret.Bitmap;
	public dan5:egret.Bitmap;
	public dan2:egret.Bitmap;
	public dan4:egret.Bitmap;
	public dan1:egret.Bitmap;
	public dan8:egret.Bitmap;
	public dan6:egret.Bitmap;
	public dan7:egret.Bitmap;
	public l4:egret.TextField;
	public l5:egret.TextField;
	public l6:egret.TextField;
	public l1:egret.TextField;
	public l2:egret.TextField;
	public l3:egret.TextField;
	public l7:egret.TextField;
	public l8:egret.TextField;
	public l9:egret.TextField;
	public l10:egret.TextField;
	public l11:egret.TextField;
	public timetext:egret.TextField;
	public title:egret.Bitmap;
	public award:egret.Bitmap;
	public btn:egret.Bitmap;
	public timedao:egret.TextField;
	public btnset:egret.TextField;
	public la3:egret.TextField;
	public la4:egret.TextField;
	public la2:egret.TextField;
	public la1:egret.TextField;
	public headi:egret.TextField;
	public la5:egret.TextField;
	public ewm:egret.Bitmap;
	public ewmx:egret.Bitmap;

	protected createChildren():void {
		this.bg = new egret.Bitmap(RES.getRes("p1_bg_jpg"));
		this.bg.x = 0;
		this.bg.y = 0;
		this.addChild(this.bg);

		this.dan3 = new egret.Bitmap(RES.getRes("p1_cao81_png"));
		this.dan3.x = 102;
		this.dan3.y = 764;
		this.addChild(this.dan3);

		this.dan5 = new egret.Bitmap(RES.getRes("p1_cao71_png"));
		this.dan5.x = 1340;
		this.dan5.y = 505;
		this.addChild(this.dan5);

		this.dan2 = new egret.Bitmap(RES.getRes("p1_cao61_png"));
		this.dan2.x = 1349;
		this.dan2.y = 265;
		this.addChild(this.dan2);

		this.dan4 = new egret.Bitmap(RES.getRes("p1_cao51_png"));
		this.dan4.x = 109;
		this.dan4.y = 290;
		this.addChild(this.dan4);

		this.dan1 = new egret.Bitmap(RES.getRes("p1_cao41_png"));
		this.dan1.x = 1349;
		this.dan1.y = 777;
		this.addChild(this.dan1);

		this.dan8 = new egret.Bitmap(RES.getRes("p1_cao31_png"));
		this.dan8.x = 111;
		this.dan8.y = 536;
		this.addChild(this.dan8);

		this.dan6 = new egret.Bitmap(RES.getRes("p1_cao21_png"));
		this.dan6.x = 1347;
		this.dan6.y = 74;
		this.addChild(this.dan6);

		this.dan7 = new egret.Bitmap(RES.getRes("p1_cao11_png"));
		this.dan7.x = 121;
		this.dan7.y = 54;
		this.addChild(this.dan7);

		var img9:egret.Bitmap = new egret.Bitmap(RES.getRes("phb_png"));
		img9.x = 1702;
		img9.y = 3;
		this.addChild(img9);

		this.l4 = new egret.TextField();
		this.l4.text = "";
		this.l4.textAlign = "left";
		this.l4.size = 20;
		this.l4.textColor = 0;
		this.l4.x = 1721;
		this.l4.y = 397;
		this.l4.width = 180;
		this.l4.height = 22;
		this.addChild(this.l4);

		this.l5 = new egret.TextField();
		this.l5.text = "";
		this.l5.textAlign = "left";
		this.l5.size = 20;
		this.l5.textColor = 0;
		this.l5.x = 1721;
		this.l5.y = 425;
		this.l5.width = 180;
		this.l5.height = 22;
		this.addChild(this.l5);

		this.l6 = new egret.TextField();
		this.l6.text = "";
		this.l6.textAlign = "left";
		this.l6.size = 20;
		this.l6.textColor = 0;
		this.l6.x = 1721;
		this.l6.y = 455;
		this.l6.width = 180;
		this.l6.height = 22;
		this.addChild(this.l6);

		this.l1 = new egret.TextField();
		this.l1.text = "";
		this.l1.textAlign = "left";
		this.l1.size = 22;
		this.l1.textColor = 0;
		this.l1.x = 1762;
		this.l1.y = 187;
		this.l1.width = 197;
		this.l1.height = 30;
		this.addChild(this.l1);

		this.l2 = new egret.TextField();
		this.l2.text = "";
		this.l2.textAlign = "left";
		this.l2.size = 22;
		this.l2.textColor = 0;
		this.l2.x = 1762;
		this.l2.y = 250;
		this.l2.width = 197;
		this.l2.height = 30;
		this.addChild(this.l2);

		this.l3 = new egret.TextField();
		this.l3.text = "";
		this.l3.textAlign = "left";
		this.l3.size = 22;
		this.l3.textColor = 0;
		this.l3.x = 1762;
		this.l3.y = 309;
		this.l3.width = 197;
		this.l3.height = 30;
		this.addChild(this.l3);

		this.l7 = new egret.TextField();
		this.l7.text = "";
		this.l7.textAlign = "left";
		this.l7.size = 20;
		this.l7.textColor = 0;
		this.l7.x = 1721;
		this.l7.y = 485;
		this.l7.width = 180;
		this.l7.height = 22;
		this.addChild(this.l7);

		this.l8 = new egret.TextField();
		this.l8.text = "";
		this.l8.textAlign = "left";
		this.l8.size = 20;
		this.l8.textColor = 0;
		this.l8.x = 1721;
		this.l8.y = 515;
		this.l8.width = 180;
		this.l8.height = 22;
		this.addChild(this.l8);

		this.l9 = new egret.TextField();
		this.l9.text = "";
		this.l9.x = 1721;
		this.l9.y = 545;
		this.l9.width = 180;
		this.l9.height = 22;
		this.l9.textColor = 0;
		this.l9.size = 20;
		this.l9.textAlign = "left";
		this.addChild(this.l9);

		this.l10 = new egret.TextField();
		this.l10.text = "";
		this.l10.x = 1721;
		this.l10.y = 575;
		this.l10.width = 180;
		this.l10.height = 22;
		this.l10.textColor = 0;
		this.l10.size = 20;
		this.l10.textAlign = "left";
		this.addChild(this.l10);

		this.l11 = new egret.TextField();
		this.l11.text = "";
		this.l11.x = 1721;
		this.l11.y = 605;
		this.l11.width = 180;
		this.l11.height = 22;
		this.l11.textColor = 0;
		this.l11.size = 20;
		this.l11.textAlign = "left";
		this.addChild(this.l11);

		this.timetext = new egret.TextField();
		this.timetext.text = "03:00";
		this.timetext.x = 0;
		this.timetext.y = 0;
		this.timetext.width = 1920;
		this.timetext.height = 45;
		this.timetext.textAlign = "center";
		this.timetext.fontFamily = "宋体";
		this.timetext.size = 38;
		this.timetext.textColor = 0xfe4452;
		this.addChild(this.timetext);

		this.title = new egret.Bitmap(RES.getRes("p1_title_png"));
		this.title.x = 362;
		this.title.y = 70; //203;
		this.addChild(this.title);

		this.award = new egret.Bitmap(RES.getRes("award_png"));
		this.award.width=800;
		this.award.height=370;
		this.award.x = 570;
		this.award.y = 400;
		this.addChild(this.award);

		this.btn = new egret.Bitmap(RES.getRes("p1_btn_png"));
		this.btn.x = 639;
		this.btn.y = 830;//667;
		this.btn.name = "btn";
		this.addChild(this.btn);

		this.timedao = new egret.TextField();
		this.timedao.text = "00:45";
		this.timedao.x = -43;
		this.timedao.y = 89;
		this.timedao.width = 1920;
		this.timedao.height = 90;
		this.timedao.fontFamily = "宋体";
		this.timedao.textColor = 0xff00ff;
		this.timedao.size = 80;
		this.timedao.textAlign = "center";
		this.addChild(this.timedao);

		this.btnset = new egret.TextField();
		this.btnset.text = "";
		this.btnset.x = 1745;
		this.btnset.y = 11;
		this.btnset.width = 120;
		this.btnset.height = 120;
		this.addChild(this.btnset);

		this.la3 = new egret.TextField();
		this.la3.text = "哈哈哈哈";
		this.la3.x = 1758.5;
		this.la3.y = 829;
		this.la3.width = 100;
		this.la3.height = 30;
		this.la3.textAlign = "center";
		this.la3.textColor = 0;
		this.la3.size = 20;
		this.addChild(this.la3);

		this.la4 = new egret.TextField();
		this.la4.text = "击杀数量：";
		this.la4.x = 1717.5;
		this.la4.y = 877;
		this.la4.width = 100;
		this.la4.height = 30;
		this.la4.fontFamily = "0";
		this.la4.size = 18;
		this.addChild(this.la4);

		this.la2 = new egret.TextField();
		this.la2.text = "击杀最多";
		this.la2.x = 1779.5;
		this.la2.y = 708;
		this.la2.width = 100;
		this.la2.height = 30;
		this.la2.textColor = 0xffffff;
		this.la2.size = 20;
		this.addChild(this.la2);

		this.la1 = new egret.TextField();
		this.la1.text = "今日";
		this.la1.x = 1722;
		this.la1.y = 708;
		this.la1.width = 50;
		this.la1.height = 30;
		this.la1.size = 25;
		this.la1.textColor = 0xffffff;
		this.addChild(this.la1);

		this.headi = new egret.TextField();
		this.headi.text = "";
		this.headi.x = 1775;
		this.headi.y = 760;
		this.headi.width = 60;
		this.headi.height = 60;
		this.addChild(this.headi);

		this.la5 = new egret.TextField();
		this.la5.text = "20s";
		this.la5.x = 1802.5;
		this.la5.y = 877;
		this.la5.width = 100;
		this.la5.height = 30;
		this.la5.size = 20;
		this.la5.textColor = 0xf59724;
		this.addChild(this.la5);

		this.ewm = new egret.Bitmap(RES.getRes("p2_ewmzhong_png"));
		this.ewm.x = 463;
		this.ewm.y = 148;
		this.addChild(this.ewm);

		this.ewmx = new egret.Bitmap(RES.getRes("eww_png"));
		this.ewmx.x = 569;
		this.ewmx.y = 143;
		this.addChild(this.ewmx);



		//动画
	}
}
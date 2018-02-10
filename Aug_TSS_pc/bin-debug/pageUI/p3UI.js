var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var p3UI = (function (_super) {
    __extends(p3UI, _super);
    function p3UI() {
        var _this = _super.call(this) || this;
        _this.width = 1920;
        _this.height = 1080;
        _this.createChildren();
        return _this;
    }
    p3UI.prototype.createChildren = function () {
        this.bg = new egret.Bitmap(RES.getRes("p3_bg_jpg"));
        this.bg.x = 0;
        this.bg.y = 0;
        this.addChild(this.bg);
        this.btn1 = new egret.Bitmap(RES.getRes("p3_btn1_png"));
        this.btn1.x = 487;
        this.btn1.y = 886;
        this.btn1.name = "btn";
        this.addChild(this.btn1);
        this.btn2 = new egret.Bitmap(RES.getRes("p3_btn2_png"));
        this.btn2.x = 1173;
        this.btn2.y = 886;
        this.btn2.name = "btn";
        this.addChild(this.btn2);
        this.caidai = new egret.Bitmap(RES.getRes("p3_caidai_png"));
        this.caidai.x = 305;
        this.caidai.y = 127;
        this.addChild(this.caidai);
        this.title = new egret.Bitmap(RES.getRes("p3_title_png"));
        this.title.x = 697;
        this.title.y = 97;
        this.addChild(this.title);
        this.diandian = new egret.Bitmap(RES.getRes("p3_diandian_png"));
        this.diandian.x = 680;
        this.diandian.y = 81;
        this.addChild(this.diandian);
        this.wuta11 = new egret.Bitmap(RES.getRes("p3_wutai11_png"));
        this.wuta11.x = 772;
        this.wuta11.y = 601;
        this.addChild(this.wuta11);
        this.guang11 = new egret.Bitmap(RES.getRes("p3_guang11_png"));
        this.guang11.x = 754;
        this.guang11.y = 431;
        this.addChild(this.guang11);
        this.chong11 = new egret.Bitmap(RES.getRes("p3_chong11_png"));
        this.chong11.x = 923;
        this.chong11.y = 418;
        this.addChild(this.chong11);
        this.wuta21 = new egret.Bitmap(RES.getRes("p3_wutai21_png"));
        this.wuta21.x = 525;
        this.wuta21.y = 669;
        this.addChild(this.wuta21);
        this.guang21 = new egret.Bitmap(RES.getRes("p3_guang21_png"));
        this.guang21.x = 534;
        this.guang21.y = 521;
        this.addChild(this.guang21);
        this.chong21 = new egret.Bitmap(RES.getRes("p3_chong21_png"));
        this.chong21.x = 629;
        this.chong21.y = 466;
        this.addChild(this.chong21);
        this.wuta31 = new egret.Bitmap(RES.getRes("p3_wutai31_png"));
        this.wuta31.x = 1122;
        this.wuta31.y = 688;
        this.addChild(this.wuta31);
        this.guang31 = new egret.Bitmap(RES.getRes("p3_guang31_png"));
        this.guang31.x = 1144;
        this.guang31.y = 568;
        this.addChild(this.guang31);
        this.chong31 = new egret.Bitmap(RES.getRes("p3_chong31_png"));
        this.chong31.x = 1203;
        this.chong31.y = 507;
        this.addChild(this.chong31);
        this.headbg1 = new egret.Bitmap(RES.getRes("p3_headbg1_png"));
        this.headbg1.x = 798;
        this.headbg1.y = 255;
        this.addChild(this.headbg1);
        this.head1 = new egret.Bitmap(RES.getRes("p3_head1_png"));
        this.head1.x = 817;
        this.head1.y = 278;
        this.addChild(this.head1);
        this.headbg2 = new egret.Bitmap(RES.getRes("p3_headbg2_png"));
        this.headbg2.x = 468;
        this.headbg2.y = 317;
        this.addChild(this.headbg2);
        this.l1 = new egret.TextField();
        this.l1.text = "";
        this.l1.textAlign = "left";
        this.l1.size = 25;
        this.l1.textColor = 0xffffff;
        this.l1.x = 912;
        this.l1.y = 286;
        this.l1.width = 170;
        this.l1.height = 30;
        this.addChild(this.l1);
        this.l2 = new egret.TextField();
        this.l2.text = "";
        this.l2.textAlign = "left";
        this.l2.size = 25;
        this.l2.textColor = 0xffffff;
        this.l2.x = 580;
        this.l2.y = 352;
        this.l2.width = 170;
        this.l2.height = 30;
        this.addChild(this.l2);
        this.head2 = new egret.Bitmap(RES.getRes("p3_head2_png"));
        this.head2.x = 486;
        this.head2.y = 344;
        this.addChild(this.head2);
        this.l11 = new egret.TextField();
        this.l11.text = "";
        this.l11.textAlign = "left";
        this.l11.size = 20;
        this.l11.textColor = 0xfaaf21;
        this.l11.x = 1012;
        this.l11.y = 316;
        this.l11.width = 64;
        this.l11.height = 32;
        this.addChild(this.l11);
        this.l22 = new egret.TextField();
        this.l22.text = "";
        this.l22.textAlign = "left";
        this.l22.size = 20;
        this.l22.textColor = 0xfaaf21;
        this.l22.x = 686;
        this.l22.y = 382;
        this.l22.width = 58;
        this.l22.height = 32;
        this.addChild(this.l22);
        this.headbg3 = new egret.Bitmap(RES.getRes("p3_headbg3_png"));
        this.headbg3.x = 1115;
        this.headbg3.y = 324;
        this.addChild(this.headbg3);
        this.l3 = new egret.TextField();
        this.l3.text = "";
        this.l3.textAlign = "left";
        this.l3.size = 25;
        this.l3.textColor = 0xffffff;
        this.l3.x = 1227;
        this.l3.y = 355;
        this.l3.width = 170;
        this.l3.height = 30;
        this.addChild(this.l3);
        this.l33 = new egret.TextField();
        this.l33.text = "";
        this.l33.textAlign = "left";
        this.l33.size = 20;
        this.l33.textColor = 0xfaaf21;
        this.l33.x = 1326;
        this.l33.y = 386;
        this.l33.width = 64;
        this.l33.height = 32;
        this.addChild(this.l33);
        this.head3 = new egret.Bitmap(RES.getRes("p3_head3_png"));
        this.head3.x = 1133;
        this.head3.y = 345;
        this.addChild(this.head3);
        //动画
    };
    return p3UI;
}(wy.BaseSprite));
__reflect(p3UI.prototype, "p3UI");
//# sourceMappingURL=p3UI.js.map
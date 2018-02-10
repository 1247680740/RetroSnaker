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
var kongzhiUI = (function (_super) {
    __extends(kongzhiUI, _super);
    function kongzhiUI() {
        var _this = _super.call(this) || this;
        _this.width = 1036;
        _this.height = 640;
        _this.createChildren();
        return _this;
    }
    kongzhiUI.prototype.createChildren = function () {
        this.l1 = new egret.TextField();
        this.l1.text = "加  速";
        this.l1.x = 835;
        this.l1.y = 405;
        this.l1.width = 85;
        this.l1.height = 40;
        this.l1.size = 30;
        this.l1.textColor = 0x00ff00;
        this.l1.fontFamily = "微软雅黑";
        this.l1.textAlign = "center";
        this.addChild(this.l1);
        this.kzbg = new egret.Bitmap(RES.getRes("yuan2_png"));
        this.kzbg.x = 80;
        this.kzbg.y = 327;
        this.addChild(this.kzbg);
        this.kzby = new egret.Bitmap(RES.getRes("yuan1_png"));
        this.kzby.x = 132;
        this.kzby.y = 381;
        this.addChild(this.kzby);
        this.btn = new egret.Bitmap(RES.getRes("btn_png"));
        this.btn.x = 784;
        this.btn.y = 343.5;
        this.btn.name = "btn";
        this.addChild(this.btn);
        this.title = new egret.Bitmap(RES.getRes("p1_title_png"));
        this.title.x = 196;
        this.title.y = 32;
        this.addChild(this.title);
        //动画
    };
    return kongzhiUI;
}(wy.BaseSprite));
__reflect(kongzhiUI.prototype, "kongzhiUI");
//# sourceMappingURL=kongzhiUI.js.map
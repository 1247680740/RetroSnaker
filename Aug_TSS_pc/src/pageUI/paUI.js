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
var paUI = /** @class */ (function (_super) {
    __extends(paUI, _super);
    function paUI() {
        var _this = _super.call(this) || this;
        _this.width = 1920;
        _this.height = 1080;
        _this.createChildren();
        return _this;
    }
    paUI.prototype.createChildren = function () {
        this.bg = new egret.Bitmap(RES.getRes("pa_bg_png"));
        this.bg.x = 0;
        this.bg.y = 0;
        this.addChild(this.bg);
        this.l1 = new egret.TextField();
        this.l1.text = "label";
        this.l1.textAlign = "left";
        this.l1.size = 40;
        this.l1.textColor = 0;
        this.l1.x = 922;
        this.l1.y = 333;
        this.l1.width = 263;
        this.l1.height = 59;
        this.addChild(this.l1);
        this.l2 = new egret.TextField();
        this.l2.text = "label";
        this.l2.textAlign = "left";
        this.l2.size = 40;
        this.l2.textColor = 0;
        this.l2.x = 922;
        this.l2.y = 436;
        this.l2.width = 263;
        this.l2.height = 59;
        this.addChild(this.l2);
        this.btn1 = new egret.Bitmap(RES.getRes("pa_btn1_png"));
        this.btn1.x = 674;
        this.btn1.y = 591;
        this.btn1.name = "btn";
        this.addChild(this.btn1);
        this.btn2 = new egret.Bitmap(RES.getRes("pa_btn2_png"));
        this.btn2.x = 1006;
        this.btn2.y = 591;
        this.btn2.name = "btn";
        this.addChild(this.btn2);
        //动画
    };
    return paUI;
}(wy.BaseSprite));

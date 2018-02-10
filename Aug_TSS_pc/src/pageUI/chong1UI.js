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
var chong1UI = /** @class */ (function (_super) {
    __extends(chong1UI, _super);
    function chong1UI() {
        var _this = _super.call(this) || this;
        _this.width = 640;
        _this.height = 1070;
        _this.createChildren();
        return _this;
    }
    chong1UI.prototype.createChildren = function () {
        var img0 = new egret.Bitmap(RES.getRes("chong1_3_png"));
        img0.x = 205;
        img0.y = 514;
        this.addChild(img0);
        var img1 = new egret.Bitmap(RES.getRes("chong1_2_png"));
        img1.x = 205;
        img1.y = 665;
        this.addChild(img1);
        var img2 = new egret.Bitmap(RES.getRes("chong1_1_png"));
        img2.x = 182;
        img2.y = 250;
        this.addChild(img2);
        //动画
    };
    return chong1UI;
}(wy.BaseSprite));

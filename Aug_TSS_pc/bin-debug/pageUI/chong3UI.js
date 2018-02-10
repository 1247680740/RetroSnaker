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
var chong3UI = (function (_super) {
    __extends(chong3UI, _super);
    function chong3UI() {
        var _this = _super.call(this) || this;
        _this.width = 640;
        _this.height = 1070;
        _this.createChildren();
        return _this;
    }
    chong3UI.prototype.createChildren = function () {
        var img0 = new egret.Bitmap(RES.getRes("chong3_2_png"));
        img0.x = 257;
        img0.y = 400;
        this.addChild(img0);
        var img1 = new egret.Bitmap(RES.getRes("chong3_1_png"));
        img1.x = 239;
        img1.y = 298;
        this.addChild(img1);
        var img2 = new egret.Bitmap(RES.getRes("chong3_3_png"));
        img2.x = 257;
        img2.y = 493;
        this.addChild(img2);
        //动画
    };
    return chong3UI;
}(wy.BaseSprite));
__reflect(chong3UI.prototype, "chong3UI");
//# sourceMappingURL=chong3UI.js.map
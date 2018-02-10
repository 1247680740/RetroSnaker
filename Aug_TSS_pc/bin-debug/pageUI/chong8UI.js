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
var chong8UI = (function (_super) {
    __extends(chong8UI, _super);
    function chong8UI() {
        var _this = _super.call(this) || this;
        _this.width = 640;
        _this.height = 1070;
        _this.createChildren();
        return _this;
    }
    chong8UI.prototype.createChildren = function () {
        var img0 = new egret.Bitmap(RES.getRes("chong8_4_png"));
        img0.x = 380;
        img0.y = 695;
        this.addChild(img0);
        var img1 = new egret.Bitmap(RES.getRes("chong8_2_png"));
        img1.x = 230;
        img1.y = 595;
        this.addChild(img1);
        var img2 = new egret.Bitmap(RES.getRes("chong8_3_png"));
        img2.x = 230;
        img2.y = 688;
        this.addChild(img2);
        var img3 = new egret.Bitmap(RES.getRes("chong8_1_png"));
        img3.x = 183;
        img3.y = 239;
        this.addChild(img3);
        //动画
    };
    return chong8UI;
}(wy.BaseSprite));
__reflect(chong8UI.prototype, "chong8UI");
//# sourceMappingURL=chong8UI.js.map
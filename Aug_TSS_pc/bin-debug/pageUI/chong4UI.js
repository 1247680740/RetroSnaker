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
var chong4UI = (function (_super) {
    __extends(chong4UI, _super);
    function chong4UI() {
        var _this = _super.call(this) || this;
        _this.width = 640;
        _this.height = 1070;
        _this.createChildren();
        return _this;
    }
    chong4UI.prototype.createChildren = function () {
        var img0 = new egret.Bitmap(RES.getRes("chong4_2_png"));
        img0.x = 245;
        img0.y = 528;
        this.addChild(img0);
        var img1 = new egret.Bitmap(RES.getRes("chong4_1_png"));
        img1.x = 197;
        img1.y = 328;
        this.addChild(img1);
        var img2 = new egret.Bitmap(RES.getRes("chong4_3_png"));
        img2.x = 245;
        img2.y = 650;
        this.addChild(img2);
        //动画
    };
    return chong4UI;
}(wy.BaseSprite));
__reflect(chong4UI.prototype, "chong4UI");
//# sourceMappingURL=chong4UI.js.map
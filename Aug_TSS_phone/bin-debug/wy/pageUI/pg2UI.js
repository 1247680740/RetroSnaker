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
var pg2UI = (function (_super) {
    __extends(pg2UI, _super);
    function pg2UI() {
        var _this = _super.call(this) || this;
        _this.width = 1036;
        _this.height = 640;
        _this.createChildren();
        return _this;
    }
    pg2UI.prototype.createChildren = function () {
        var txt0 = new egret.TextField();
        txt0.text = "点击屏幕开始游戏";
        txt0.x = 363;
        txt0.y = 291;
        txt0.width = 300;
        txt0.height = 40;
        txt0.size = 30;
        txt0.textAlign = "center";
        txt0.textColor = 0x00ff00;
        this.addChild(txt0);
        //动画
    };
    return pg2UI;
}(wy.BaseSprite));
__reflect(pg2UI.prototype, "pg2UI");
//# sourceMappingURL=pg2UI.js.map
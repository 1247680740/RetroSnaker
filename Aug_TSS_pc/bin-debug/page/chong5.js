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
 *@author
 *
 */
var chong5 = (function (_super) {
    __extends(chong5, _super);
    function chong5() {
        return _super.call(this) || this;
    }
    chong5.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    chong5.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        wy.Tween.do(this);
    };
    chong5.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    chong5.prototype.onTouchTap = function (e) {
        switch (e.currentTarget) {
            default:
                break;
        }
    };
    return chong5;
}(chong5UI));
__reflect(chong5.prototype, "chong5");
//# sourceMappingURL=chong5.js.map
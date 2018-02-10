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
var chong4 = (function (_super) {
    __extends(chong4, _super);
    function chong4() {
        return _super.call(this) || this;
    }
    chong4.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    chong4.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        wy.Tween.do(this);
    };
    chong4.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    chong4.prototype.onTouchTap = function (e) {
        switch (e.currentTarget) {
            default:
                break;
        }
    };
    return chong4;
}(chong4UI));
__reflect(chong4.prototype, "chong4");
//# sourceMappingURL=chong4.js.map
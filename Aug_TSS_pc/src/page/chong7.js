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
var chong7 = /** @class */ (function (_super) {
    __extends(chong7, _super);
    function chong7() {
        return _super.call(this) || this;
    }
    chong7.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    chong7.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        wy.Tween.do(this);
    };
    chong7.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    chong7.prototype.onTouchTap = function (e) {
        switch (e.currentTarget) {
            default:
                break;
        }
    };
    return chong7;
}(chong7UI));

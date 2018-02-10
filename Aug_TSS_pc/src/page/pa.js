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
var pa = /** @class */ (function (_super) {
    __extends(pa, _super);
    function pa() {
        return _super.call(this) || this;
    }
    pa.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    pa.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        this.l1.type = egret.TextFieldType.INPUT;
        this.l2.type = egret.TextFieldType.INPUT;
        this.l1.verticalAlign = "middle";
        this.l2.verticalAlign = "middle";
        this.l1.restrict = "0-9";
        this.l2.restrict = "0-9";
        this.l1.text = "45";
        this.l2.text = "180";
        this.bg.touchEnabled = true;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.l1.touchEnabled = true;
        this.l1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.l2.touchEnabled = true;
        this.l2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn1.touchEnabled = true;
        this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn2.touchEnabled = true;
        this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        wy.Tween.do(this);
    };
    pa.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.bg.touchEnabled = false;
        this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.l1.touchEnabled = false;
        this.l1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.l2.touchEnabled = false;
        this.l2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn1.touchEnabled = false;
        this.btn1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn2.touchEnabled = false;
        this.btn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    pa.prototype.onTouchTap = function (e) {
        switch (e.currentTarget) {
            case this.bg:
                break;
            case this.l1:
                break;
            case this.l2:
                break;
            case this.btn1:
                wj.Mytools.savedata("TSS_Timedown", this.l1.text);
                wj.Mytools.savedata("TSS_GameTime", this.l2.text);
                wy.hideView();
                break;
            case this.btn2:
                wy.hideView();
                break;
            default:
                break;
        }
    };
    return pa;
}(paUI));

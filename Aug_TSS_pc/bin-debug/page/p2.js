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
var p2 = (function (_super) {
    __extends(p2, _super);
    function p2() {
        return _super.call(this) || this;
    }
    p2.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    p2.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        this.bg.touchEnabled = true;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.jin.touchEnabled = true;
        this.jin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.g1.touchEnabled = true;
        this.g1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.g2.touchEnabled = true;
        this.g2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.g3.touchEnabled = true;
        this.g3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.yin.touchEnabled = true;
        this.yin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.tong.touchEnabled = true;
        this.tong.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.xian.touchEnabled = true;
        this.xian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.kk.touchEnabled = true;
        this.kk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.toux.touchEnabled = true;
        this.toux.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn1.touchEnabled = true;
        this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn2.touchEnabled = true;
        this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn3.touchEnabled = true;
        this.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.shugan.touchEnabled = true;
        this.shugan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.zan.touchEnabled = true;
        this.zan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.pren.touchEnabled = true;
        this.pren.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.l2.touchEnabled = true;
        this.l2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.l1.touchEnabled = true;
        this.l1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.l3.touchEnabled = true;
        this.l3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.l4.touchEnabled = true;
        this.l4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.nv.touchEnabled = true;
        this.nv.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.nan.touchEnabled = true;
        this.nan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.title.touchEnabled = true;
        this.title.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.diandian.touchEnabled = true;
        this.diandian.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.caidai.touchEnabled = true;
        this.caidai.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        wy.Tween.do(this);
    };
    p2.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.bg.touchEnabled = false;
        this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.jin.touchEnabled = false;
        this.jin.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.g1.touchEnabled = false;
        this.g1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.g2.touchEnabled = false;
        this.g2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.g3.touchEnabled = false;
        this.g3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.yin.touchEnabled = false;
        this.yin.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.tong.touchEnabled = false;
        this.tong.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.xian.touchEnabled = false;
        this.xian.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.kk.touchEnabled = false;
        this.kk.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.toux.touchEnabled = false;
        this.toux.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn1.touchEnabled = false;
        this.btn1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn2.touchEnabled = false;
        this.btn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn3.touchEnabled = false;
        this.btn3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.shugan.touchEnabled = false;
        this.shugan.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.zan.touchEnabled = false;
        this.zan.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.pren.touchEnabled = false;
        this.pren.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.l2.touchEnabled = false;
        this.l2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.l1.touchEnabled = false;
        this.l1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.l3.touchEnabled = false;
        this.l3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.l4.touchEnabled = false;
        this.l4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.nv.touchEnabled = false;
        this.nv.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.nan.touchEnabled = false;
        this.nan.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.title.touchEnabled = false;
        this.title.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.diandian.touchEnabled = false;
        this.diandian.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.caidai.touchEnabled = false;
        this.caidai.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    p2.prototype.onTouchTap = function (e) {
        switch (e.currentTarget) {
            case this.bg:
                break;
            case this.jin:
                break;
            case this.g1:
                break;
            case this.g2:
                break;
            case this.g3:
                break;
            case this.yin:
                break;
            case this.tong:
                break;
            case this.xian:
                break;
            case this.kk:
                break;
            case this.toux:
                break;
            case this.btn1:
                break;
            case this.btn2:
                break;
            case this.btn3:
                break;
            case this.shugan:
                break;
            case this.zan:
                break;
            case this.pren:
                break;
            case this.l2:
                break;
            case this.l1:
                break;
            case this.l3:
                break;
            case this.l4:
                break;
            case this.nv:
                break;
            case this.nan:
                break;
            case this.title:
                break;
            case this.diandian:
                break;
            case this.caidai:
                break;
            default:
                break;
        }
    };
    return p2;
}(p2UI));
__reflect(p2.prototype, "p2");
//# sourceMappingURL=p2.js.map
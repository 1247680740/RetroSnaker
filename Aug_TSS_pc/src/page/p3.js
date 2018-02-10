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
var p3 = /** @class */ (function (_super) {
    __extends(p3, _super);
    function p3() {
        return _super.call(this) || this;
    }
    p3.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    p3.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        var shes = data;
        wj.Mytools.zhongxia(this.chong11);
        wj.Mytools.zhongxia(this.chong21);
        wj.Mytools.zhongxia(this.chong31);
        var tim = new Date().getTime();
        this.l1.bold;
        for (var i = 0; i < shes.length; i++) {
            Net.send(this, function () { }, shes[i].maxjifen + "", shes[i].kill + "", shes[i].live + "", shes[i].maxtime + "", tim + "", shes[i].openid, shes[i].playername, shes[i].headimgurl);
            if (i <= 2) {
                this["l" + (i + 1) + ""].text = "" + shes[i].playername;
                this["l" + (i + 1) + "" + (i + 1)].text = "" + shes[i].maxjifen;
                this["l" + (i + 1) + "" + (i + 1)].y += 10;
                this["head" + (i + 1)].alpha = 0;
                shes[i].headimg.x = this["head" + (i + 1)].x + this["head" + (i + 1)].width / 2;
                shes[i].headimg.y = this["head" + (i + 1)].y + this["head" + (i + 1)].height / 2;
                shes[i].headimg.scaleX = shes[i].headimg.scaleY = shes[i].headimg.scaleY * (this["head" + (i + 1)].width / 2 / 20);
                this.addChild(shes[i].headimg);
                var ds = new egret.Bitmap(RES.getRes("chongzi" + shes[i]._id + "_png"));
                wj.Mytools.zhongxia(ds);
                ds.x = this["chong" + (i + 1) + "1"].x;
                ds.y = this["chong" + (i + 1) + "1"].y;
                this["chong" + (i + 1) + "1"].alpha = 0;
                this.addChild(ds);
            }
        }
        this.inint();
        this.donghua();
        this.btn1.touchEnabled = true;
        this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn2.touchEnabled = true;
        this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    p3.prototype.inint = function () {
    };
    p3.prototype.donghua = function () {
        var _this = this;
        wy.Tools.center(this.caidai);
        this.num1 = egret.setInterval(function () {
            _this.caidai.scaleX = (-1) * _this.caidai.scaleX;
        }, this, 500);
        wj.Donghua.shansuo(this.diandian, 0, 300);
        wj.Donghua.shansuo2(this.guang11, 0, 500);
        wj.Donghua.shansuo2(this.guang21, 100, 500);
        wj.Donghua.shansuo2(this.guang31, 200, 500);
    };
    p3.prototype.getstr = function (num) {
        var str = ((num / 60) >> 0) + "分" + (num % 60) + "秒";
        return str;
    };
    p3.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.btn1.touchEnabled = false;
        this.btn1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn2.touchEnabled = false;
        this.btn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    p3.prototype.onTouchTap = function (e) {
        switch (e.currentTarget) {
            case this.btn1:
                wy.changeScene(p1);
                break;
            case this.btn2:
                wy.changeScene(p1, "", 1);
                break;
            default:
                break;
        }
    };
    return p3;
}(p3UI));

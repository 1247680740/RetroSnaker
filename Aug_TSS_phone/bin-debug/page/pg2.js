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
var pg2 = (function (_super) {
    __extends(pg2, _super);
    function pg2() {
        return _super.call(this) || this;
    }
    pg2.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    pg2.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        var s = wj.Mytools.createshap(0, 0, 1036, 640, 0);
        this.addChildAt(s, 0);
        s.touchEnabled = true;
        s.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (SocketManager.getInstance().socket.connected) {
                wy.changeScene(kongzhi, wy.PopType.ALPHAIN);
                SocketManager.getInstance().send({ "new": StaticVar.type, "nickname": wy.Data.nickname, "openid": wy.Data.openid, "headimgurl": wy.Data.headimgurl });
            }
        }, this);
        wy.Tween.do(this);
    };
    pg2.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    pg2.prototype.onTouchTap = function (e) {
        switch (e.currentTarget) {
            default:
                break;
        }
    };
    return pg2;
}(pg2UI));
__reflect(pg2.prototype, "pg2");
//# sourceMappingURL=pg2.js.map
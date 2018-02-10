var wy;
(function (wy) {
    var Tween = /** @class */ (function () {
        function Tween() {
        }
        Tween.init = function () {
            this.switchPagePopType = '';
        };
        Tween.do = function (obj) {
            var i;
            var len;
            var name;
            var child;
            var dis = 10;
            var preTouchEnabled;
            for (i = 0, len = obj.numChildren; i < len; ++i) {
                child = obj.getChildAt(i);
                name = child.name;
                if (name != 'notween') {
                    console.log('switch ' + this.switchPagePopType);
                    preTouchEnabled = child.touchEnabled;
                    child.touchEnabled = false;
                    switch (this.switchPagePopType) {
                        case wy.PopType.LEFTIN:
                            child.x -= dis; //0.5  500  + dis  - dis   + dis   - dis 
                            egret.Tween.get(child).wait((Math.random() * 0.5 + 0.5) * wy.PageSwitch.durationIn).to({ x: child.x }, wy.PageSwitch.durationIn + 500, egret.Ease.backOut).call(function (child, preTouchEnabled) {
                                child.touchEnabled = preTouchEnabled;
                            }, this, [child, preTouchEnabled]);
                            break;
                        case wy.PopType.RIGHTIN:
                            child.x += dis;
                            egret.Tween.get(child).wait((Math.random() * 0.5 + 0.5) * wy.PageSwitch.durationIn).to({ x: child.x }, wy.PageSwitch.durationIn + 500, egret.Ease.backOut).call(function (child, preTouchEnabled) {
                                child.touchEnabled = preTouchEnabled;
                            }, this, [child, preTouchEnabled]);
                            break;
                        case wy.PopType.TOPIN:
                            child.y -= dis;
                            egret.Tween.get(child).wait((Math.random() * 0.5 + 0.5) * wy.PageSwitch.durationIn).to({ y: child.y }, wy.PageSwitch.durationIn + 500, egret.Ease.backOut).call(function (child, preTouchEnabled) {
                                child.touchEnabled = preTouchEnabled;
                            }, this, [child, preTouchEnabled]);
                            break;
                        case wy.PopType.BOTTOMIN:
                            child.y += dis;
                            egret.Tween.get(child).wait((Math.random() * 0.5 + 0.5) * wy.PageSwitch.durationIn).to({ y: child.y }, wy.PageSwitch.durationIn + 500, egret.Ease.backOut).call(function (child, preTouchEnabled) {
                                child.touchEnabled = preTouchEnabled;
                            }, this, [child, preTouchEnabled]);
                            break;
                        default:
                            child.touchEnabled = preTouchEnabled;
                            break;
                    }
                }
            }
        };
        return Tween;
    }());
    wy.Tween = Tween;
})(wy || (wy = {}));

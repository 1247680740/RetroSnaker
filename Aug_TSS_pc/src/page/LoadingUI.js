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
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        var load = document.getElementById('loading');
        if (load.parentNode) {
            load.parentNode.removeChild(load);
        }
        document.body.style.background = '#fff';
        return _this;
    }
    LoadingUI.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.shape = wy.Tools.createMovieClip('loading');
        this.addChild(this.shape);
        this.shape.play(-1);
        this.shape.scaleX =
            this.shape.scaleY =
                0.7;
        this.shape.x = 257;
        this.shape.y = 300;
        this.lineDown = new egret.Shape();
        this.lineDown.graphics.lineStyle(0.5, 0xffffff, 0.5);
        this.lineDown.graphics.moveTo(0, 0);
        this.lineDown.graphics.lineTo(120, 0);
        this.lineDown.graphics.endFill();
        this.addChild(this.lineDown);
        this.lineUp = new egret.Shape();
        this.addChild(this.lineUp);
        this.lineDown.x = this.width / 2 - this.lineDown.width / 2;
        this.lineDown.y = 830;
        this.lineUp.x = this.lineDown.x;
        this.lineUp.y = this.lineDown.y;
        this.textField.text = '';
    };
    LoadingUI.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    LoadingUI.prototype.setProgress = function (cur, total) {
        var perc = Math.round(cur * 100 / total);
        // this.textField.text = '' + perc + '%';
        this.lineUp.graphics.clear();
        this.lineUp.graphics.lineStyle(2, 0x000000, 1);
        this.lineUp.graphics.moveTo(0, 0);
        this.lineUp.graphics.lineTo(this.lineDown.width * perc / 100, 0);
    };
    return LoadingUI;
}(LoadingUIUI));

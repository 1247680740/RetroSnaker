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
var wy;
(function (wy) {
    /**
     * 根据系统时间的计时器
     * @author sc
     * 2017/4/19
     * @example
     * <pre>
     *   使用方法
     *   var gameTimer:wy.GameTimer=new wy.GameTimer(repeatCount,delay);
     *    repeatCount :  当局总时间（默认为0，则不控制时间终点）
     *	  delay ： 多少毫秒更新一次（默认为1000毫秒即1秒）
     *
     *	gameTimer.addEventListener(egret.TimerEvent.TIMER, this.updateTime, this);
     *	this.updateTime():为回调方法，即更新时间的方法
     *
     * 设置了总时间的时候调用
     * dateTimer.addEventListeners(egret.TimerEvent.TIMER_COMPLETE, this.onTimerComplete, this);
     * this.onTimerComplete(),但时间等于总时间时调用
     *
     * gameTimer.start();开始计时
     *
     * gameTimer.reset();重置时间
     *
     * gameTimer.stop();停止计时
     * </pre>
     */
    var GameTimer = /** @class */ (function (_super) {
        __extends(GameTimer, _super);
        function GameTimer(repeatCount, delay) {
            if (repeatCount === void 0) { repeatCount = 0; }
            if (delay === void 0) { delay = 1000; }
            var _this = _super.call(this) || this;
            _this.delay = delay;
            _this.repeatCount = repeatCount;
            _this.currentCount = 0;
            return _this;
        }
        /**
         *开始计时
         *
         *@version 0.0.2
         *@platform egret 3.0.3
         */
        GameTimer.prototype.start = function () {
            this.previous = egret.getTimer();
            this.accTime = 0;
            egret.startTick(this.update, this);
        };
        /**
         *重置时间
         *
         *@version 0.0.2
         *@platform egret 3.0.3
         */
        GameTimer.prototype.reset = function () {
            this.previous = egret.getTimer();
            this.accTime = 0;
            this.currentCount = 0;
        };
        /**
         *停止计时
         *
         *@version 0.0.2
         *@platform egret 3.0.3
         */
        GameTimer.prototype.stop = function () {
            egret.stopTick(this.update, this);
        };
        /**
         *更新时间
         *
         *@version 0.0.2
         *@platform egret 3.0.3
         */
        GameTimer.prototype.update = function () {
            this.curTime = egret.getTimer();
            this.passTime = this.curTime - this.previous;
            this.previous = this.curTime;
            this.accTime += this.passTime;
            while (this.accTime >= this.delay) {
                this.accTime -= this.delay;
                this.currentCount++;
                //判断是是否设置总时间，为设置总时间>0
                if (this.repeatCount > 0 && (this.currentCount == this.repeatCount)) {
                    //当到达了设置的总时间时，抛出时间完成事件 并停止计时
                    this.dispatchEvent(new egret.TimerEvent(egret.TimerEvent.TIMER_COMPLETE));
                    this.stop();
                }
                //每一次更新时间都抛出事件，使用时监听时间变化
                this.dispatchEvent(new egret.TimerEvent(egret.TimerEvent.TIMER));
            }
            return false;
        };
        return GameTimer;
    }(egret.EventDispatcher));
    wy.GameTimer = GameTimer;
})(wy || (wy = {}));

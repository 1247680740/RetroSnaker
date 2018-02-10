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
     * LoadingData 后台交互数据获取等待Loading
     *
     *@example 使用方法如下
     *<pre>
     *        样式
     *        wy.LoadingData.STYLE:number  (1 - 5 )  默认为3
     *        wy.LoadingData.BG_ALPHA:number (0 - 1) 默认为0
     *        显示
     *        wy.LoadingData.open();
     *
     *        关闭
     *        wy.LoadingData.close();
     *</pre>
     *
     *@version 0.0.2
     *@platform egret 3.0.3
     */
    var LoadingData = /** @class */ (function (_super) {
        __extends(LoadingData, _super);
        function LoadingData() {
            return _super.call(this) || this;
        }
        LoadingData.prototype.createOk = function (isVertical) {
            this.bg = new egret.Shape();
            this.bg.graphics.beginFill(0x000000, wy.LoadingData.BG_ALPHA);
            if (isVertical) {
                if (wy.LoadingData.STYLE < 3) {
                    var x = (640 - 300) >> 1;
                    var y = (1036 - 200) >> 1;
                }
                else {
                    var x = (640 - 100) >> 1;
                    var y = (1036 - 100) >> 1;
                }
                this.bg.graphics.drawRect(0, 0, 640, 1036);
            }
            else {
                if (wy.LoadingData.STYLE < 3) {
                    var x = (1036 - 200) >> 1;
                    var y = (640 - 300) >> 1;
                }
                else {
                    var x = (1036 - 100) >> 1;
                    var y = (640 - 100) >> 1;
                }
                this.bg.graphics.drawRect(0, 0, 1036, 640);
            }
            this.bg.graphics.endFill();
            this.addChild(this.bg);
            this.bg.touchEnabled = true;
            if (wy.LoadingData.STYLE < 3) {
                this.dialog = new egret.Sprite();
                this.dialog.graphics.beginFill(0x1E1E1E, 0);
                this.dialog.graphics.drawRoundRect(0, 0, 300, 200, 25);
                this.dialog.graphics.endFill();
                this.addChild(this.dialog);
                // var x = (640 - 300) >> 1;
                // var y = (1036 - 200) >> 1;
                this.dialog.x = x;
                this.dialog.y = y;
                this.shape_sprite = new egret.Sprite();
                this.shape_sprite.graphics.beginFill(0xff0000, 0);
                this.shape_sprite.graphics.drawRect(0, 0, 140, 140);
                this.shape_sprite.graphics.endFill();
                this.dialog.addChild(this.shape_sprite);
                this.shape_sprite.anchorOffsetX = this.shape_sprite.width >> 1;
                this.shape_sprite.anchorOffsetY = this.shape_sprite.height >> 1;
                this.shape_sprite.x = 83 + this.shape_sprite.anchorOffsetX;
                this.shape_sprite.y = 35 + this.shape_sprite.anchorOffsetY;
            }
            else {
                this.dialog = new egret.Sprite();
                this.dialog.graphics.beginFill(0x1E1E1E, 1);
                this.dialog.graphics.drawRoundRect(0, 0, 100, 100, 25);
                this.dialog.graphics.endFill();
                this.addChild(this.dialog);
                // var x = (640 - 300) >> 1;
                // var y = (1036 - 200) >> 1;
                this.dialog.x = x;
                this.dialog.y = y;
                this.shape_sprite = new egret.Sprite();
                this.shape_sprite.graphics.beginFill(0xff0000, 0);
                this.shape_sprite.graphics.drawRect(0, 0, 70, 70);
                this.shape_sprite.graphics.endFill();
                this.dialog.addChild(this.shape_sprite);
                this.shape_sprite.anchorOffsetX = this.shape_sprite.width >> 1;
                this.shape_sprite.anchorOffsetY = this.shape_sprite.height >> 1;
                this.shape_sprite.x = 15 + this.shape_sprite.anchorOffsetX;
                this.shape_sprite.y = 15 + this.shape_sprite.anchorOffsetY;
            }
            switch (wy.LoadingData.STYLE) {
                case 1:
                    this.style1();
                    break;
                case 2:
                    this.style2();
                    break;
                case 3:
                    this.style3();
                    break;
                case 4:
                    this.style4();
                    break;
                case 5:
                    this.style5();
                    break;
                default:
                    break;
            }
        };
        /**
        *@private
        *
        *@version 0.0.2
        *@platform egret 3.0.3
        */
        LoadingData.prototype.style1 = function () {
            var temp = 70;
            var loading1;
            loading1 = new egret.Shape();
            loading1.graphics.lineStyle(3, 0xffffff, 1);
            loading1.graphics.drawCircle(temp, temp, temp);
            loading1.graphics.endFill();
            this.shape_sprite.addChild(loading1);
            var loading2;
            loading2 = new egret.Shape();
            loading2.graphics.beginFill(0xffffff);
            loading2.graphics.drawCircle(28, 15, 7);
            loading2.graphics.endFill();
            this.shape_sprite.addChild(loading2);
            egret.Tween.get(this.shape_sprite, { loop: true }).to({ rotation: 360 }, 2000, egret.Ease.cubicOut);
        };
        /**
        *@private
        *
        *@version 0.0.2
        *@platform egret 3.0.3
        */
        LoadingData.prototype.style2 = function () {
            var loading1;
            var loading2;
            var loading3;
            var loading4;
            loading1 = new egret.Shape();
            loading1.graphics.beginFill(0xffffff);
            loading1.graphics.drawCircle(120, 72, 10);
            loading1.graphics.endFill();
            this.shape_sprite.addChild(loading1);
            loading2 = new egret.Shape();
            loading2.graphics.beginFill(0xffffff, 0.8);
            loading2.graphics.drawCircle(99, 18, 8);
            loading2.graphics.endFill();
            this.shape_sprite.addChild(loading2);
            loading3 = new egret.Shape();
            loading3.graphics.beginFill(0xffffff, 0.6);
            loading3.graphics.drawCircle(35.5, 18.5, 6);
            loading3.graphics.endFill();
            this.shape_sprite.addChild(loading3);
            loading4 = new egret.Shape();
            loading4.graphics.beginFill(0xffffff, 0.4);
            loading4.graphics.drawCircle(10, 71, 4);
            loading4.graphics.endFill();
            this.shape_sprite.addChild(loading4);
            egret.Tween.get(this.shape_sprite, { loop: true }).to({ rotation: 360 }, 1000);
        };
        /**
        *@private
        *
        *@version 0.0.2
        *@platform egret 3.0.3
        */
        LoadingData.prototype.style3 = function () {
            var loading1;
            var loading2;
            var loading3;
            var loading4;
            loading1 = new egret.Shape();
            loading1.graphics.beginFill(0xffffff);
            loading1.graphics.drawCircle(35, 60, 10);
            loading1.graphics.endFill();
            this.shape_sprite.addChild(loading1);
            loading2 = new egret.Shape();
            loading2.graphics.beginFill(0xffffff);
            loading2.graphics.drawCircle(10, 35, 10);
            loading2.graphics.endFill();
            this.shape_sprite.addChild(loading2);
            loading3 = new egret.Shape();
            loading3.graphics.beginFill(0xffffff);
            loading3.graphics.drawCircle(35, 10, 10);
            loading3.graphics.endFill();
            this.shape_sprite.addChild(loading3);
            loading4 = new egret.Shape();
            loading4.graphics.beginFill(0xffffff);
            loading4.graphics.drawCircle(60, 35, 10);
            loading4.graphics.endFill();
            this.shape_sprite.addChild(loading4);
            egret.Tween.get(this.shape_sprite, { loop: true }).to({ scaleX: 0.5, scaleY: 0.5 }, 800).to({ scaleX: 1, scaleY: 1 }, 800);
            egret.Tween.get(this.shape_sprite, { loop: true }).to({ rotation: 360 }, 1600);
        };
        /**
        *@private
        *
        *@version 0.0.2
        *@platform egret 3.0.3
        */
        LoadingData.prototype.style4 = function () {
            var loading1;
            var loading2;
            var loading3;
            var loading4;
            loading1 = new egret.Shape();
            loading1.graphics.beginFill(0xffffff);
            loading1.graphics.drawCircle(0, 0, 10);
            loading1.graphics.endFill();
            this.shape_sprite.addChild(loading1);
            loading2 = new egret.Shape();
            loading2.graphics.beginFill(0xffffff);
            loading2.graphics.drawCircle(0, 0, 10);
            loading2.graphics.endFill();
            this.shape_sprite.addChild(loading2);
            loading3 = new egret.Shape();
            loading3.graphics.beginFill(0xffffff);
            loading3.graphics.drawCircle(0, 0, 10);
            loading3.graphics.endFill();
            this.shape_sprite.addChild(loading3);
            loading4 = new egret.Shape();
            loading4.graphics.beginFill(0xffffff);
            loading4.graphics.drawCircle(0, 0, 10);
            loading4.graphics.endFill();
            this.shape_sprite.addChild(loading4);
            loading1.x = loading2.x = loading3.x = loading4.x = 35;
            loading1.y = loading2.y = loading3.y = loading4.y = 35;
            egret.Tween.get(loading1, { loop: true }).to({ x: 35, y: 60 }, 1000).wait(1000).to({ x: 35, y: 35 }, 1000).wait(500);
            egret.Tween.get(loading2, { loop: true }).to({ x: 10, y: 35 }, 1000).wait(1000).to({ x: 35, y: 35 }, 1000).wait(500);
            egret.Tween.get(loading3, { loop: true }).to({ x: 35, y: 10 }, 1000).wait(1000).to({ x: 35, y: 35 }, 1000).wait(500);
            egret.Tween.get(loading4, { loop: true }).to({ x: 60, y: 35 }, 1000).wait(1000).to({ x: 35, y: 35 }, 1000).wait(500);
            egret.Tween.get(this.shape_sprite, { loop: true }).to({ rotation: 360 }, 1600);
        };
        /**
        *@private
        *
        *@version 0.0.2
        *@platform egret 3.0.3
        */
        LoadingData.prototype.style5 = function () {
            var _this = this;
            var loading1;
            var loading2;
            var loading3;
            var loading4;
            loading1 = new egret.Shape();
            loading1.graphics.beginFill(0xffffff);
            loading1.graphics.drawCircle(0, 0, 10);
            loading1.graphics.endFill();
            this.shape_sprite.addChild(loading1);
            loading2 = new egret.Shape();
            loading2.graphics.beginFill(0xffffff);
            loading2.graphics.drawCircle(0, 0, 10);
            loading2.graphics.endFill();
            this.shape_sprite.addChild(loading2);
            loading3 = new egret.Shape();
            loading3.graphics.beginFill(0xffffff);
            loading3.graphics.drawCircle(0, 0, 10);
            loading3.graphics.endFill();
            this.shape_sprite.addChild(loading3);
            loading4 = new egret.Shape();
            loading4.graphics.beginFill(0xffffff);
            loading4.graphics.drawCircle(0, 0, 10);
            loading4.graphics.endFill();
            this.shape_sprite.addChild(loading4);
            loading1.x = loading2.x = loading3.x = loading4.x = 35;
            loading1.y = loading2.y = loading3.y = loading4.y = 35;
            // loading1.alpha = loading2.alpha = loading3.alpha = loading4.alpha = 0;
            var Tween1 = function () {
                loading1.alpha = loading2.alpha = loading3.alpha = loading4.alpha = 0;
                loading1.alpha = 1;
                egret.Tween.get(loading1).to({ x: 35, y: 60 }, 600).wait(500).call(function () {
                    loading2.alpha = 1;
                    egret.Tween.get(loading2).to({ x: 10, y: 35 }, 600).wait(500).call(function () {
                        loading3.alpha = 1;
                        egret.Tween.get(loading3).to({ x: 35, y: 10 }, 600).wait(500).call(function () {
                            loading4.alpha = 1;
                            egret.Tween.get(loading4).to({ x: 60, y: 35 }, 600).wait(1000).call(Tween2, _this);
                        }, _this);
                    }, _this);
                }, _this);
            };
            var Tween2 = function () {
                egret.Tween.get(loading1).to({ x: 35, y: 35 }, 600).wait(500).call(function () {
                    egret.Tween.get(loading2).to({ x: 35, y: 35 }, 600).wait(500).call(function () {
                        egret.Tween.get(loading3).to({ x: 35, y: 35 }, 600).wait(500).call(function () {
                            egret.Tween.get(loading4).to({ x: 35, y: 35 }, 600).wait(600).call(Tween1, _this);
                        }, _this);
                    }, _this);
                }, _this);
            };
            Tween1();
            egret.Tween.get(this.shape_sprite, { loop: true }).to({ rotation: 360 }, 1600);
        };
        /**
        *@private
        *
        *@version 0.0.2
        *@platform egret 3.0.3
        */
        LoadingData.prototype.open_loading = function (isVertical, obj) {
            this.createOk(isVertical);
            obj.addChild(this);
        };
        /**
        *@private
        *
        *@version 0.0.2
        *@platform egret 3.0.3
        */
        LoadingData.prototype.close_loading = function () {
            if (this) {
                if (this.parent) {
                    this.removeChildren();
                    this.parent.removeChild(this);
                }
            }
        };
        /**
         *显示Loading界面
         * @param isVertical 是否为竖屏  默认为true
         * @param obj 需要添加的位置  默认为wy.GameInterface.stage
         *
         *@version 0.0.2
         *@platform egret 3.0.3
         */
        LoadingData.open = function (isVertical, obj) {
            if (isVertical === void 0) { isVertical = true; }
            if (obj === void 0) { obj = wy.GameInterface.stage; }
            this.loadingData.open_loading(isVertical, obj);
        };
        /**
         *关闭Loading界面
         *
         *
         *@version 0.0.2
         *@platform egret 3.0.3
         */
        LoadingData.close = function () {
            this.loadingData.close_loading();
        };
        LoadingData.STYLE = 3;
        LoadingData.BG_ALPHA = 0;
        LoadingData.loadingData = new LoadingData();
        return LoadingData;
    }(egret.DisplayObjectContainer));
    wy.LoadingData = LoadingData;
    /**
     *
    //  */
    // class Loading_Data {
    //     constructor() {
    //     }
    //     public static loading: LoadingData = new LoadingData();
    //     public static open_loading(obj: any) {
    //         this.loading.open_loading(obj);
    //     }
    //     public static close_loading() {
    //         this.loading.close_loading();
    //     }
    // }
})(wy || (wy = {}));

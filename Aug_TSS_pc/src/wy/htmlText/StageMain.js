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
     *舞台工具主类
     *
     *@version 0.0.1
     *@since 2017/4/21
     *
     */
    var StageMain = /** @class */ (function (_super) {
        __extends(StageMain, _super);
        function StageMain() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(StageMain, "StageUtils", {
            /**
             *舞台工具类
             */
            get: function () {
                return StageUtils.getInstance();
            },
            enumerable: true,
            configurable: true
        });
        return StageMain;
    }(SingleClass));
    wy.StageMain = StageMain;
})(wy || (wy = {}));

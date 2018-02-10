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
 * 舞台工具类
 * @author sc
 * @since 2017/4/24
 */
var StageUtils = /** @class */ (function (_super) {
    __extends(StageUtils, _super);
    function StageUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 初始化
     * @param stage 传入的stage
     */
    StageUtils.prototype.init = function (stage) {
        this.stage = stage;
    };
    Object.defineProperty(StageUtils.prototype, "stageWidth", {
        /**舞台宽度*/
        get: function () {
            return this.stage.stageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StageUtils.prototype, "stageHeight", {
        /**舞台高度 */
        get: function () {
            return this.stage.stageHeight;
        },
        enumerable: true,
        configurable: true
    });
    return StageUtils;
}(SingleClass));

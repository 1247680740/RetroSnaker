var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var models;
(function (models) {
    var score;
    (function (score) {
        /** 游戏得分数据模型 */
        var ScoreInfoVO = (function () {
            function ScoreInfoVO() {
            }
            return ScoreInfoVO;
        }());
        score.ScoreInfoVO = ScoreInfoVO;
        __reflect(ScoreInfoVO.prototype, "models.score.ScoreInfoVO");
    })(score = models.score || (models.score = {}));
})(models || (models = {}));
//# sourceMappingURL=ScoreInfoVo.js.map
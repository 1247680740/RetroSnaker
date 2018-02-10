var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Net = (function () {
    function Net() {
    }
    Net.doReqPost = function (thisObj, callback, rtype, value, type) {
        if (type === void 0) { type = egret.HttpResponseType.TEXT; }
        var req = new egret.HttpRequest();
        req.responseType = type;
        req.open(this.urlIP + rtype, egret.HttpMethod.POST);
        // req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        req.send(value);
        req.addEventListener(egret.Event.COMPLETE, callback, thisObj);
    };
    Net.doReqGet = function (thisObj, callback, rtype, value, type) {
        if (type === void 0) { type = egret.HttpResponseType.TEXT; }
        var req = new egret.HttpRequest();
        req.responseType = type;
        req.open(this.urlIP + rtype + value, egret.HttpMethod.POST);
        req.send();
        req.addEventListener(egret.Event.COMPLETE, callback, thisObj);
    };
    /*上传信息*/
    // public static save_data(thisObj: any, callback: Function, province: string, name: string, phone: string, address: string): void {
    // 	var value: string = "province=" + province + "&name=" + name + "&phone=" + phone + "&address=" + address ;
    // 	this.doReqPost(thisObj, callback, "api.php?a=getInfo", value);
    // }
    /**发送请求 */
    Net.send = function (thisObj, callback, score, kill_num, resurrection, time_live, time_chuo, openid, nickname, headimgurl) {
        var value = "score=" + score + "&kill_num=" + kill_num + "&resurrection=" + resurrection + "&time_live=" + time_live + "&time_chuo=" + time_chuo + "&openid=" + openid + "&nickname=" + nickname + "&headimgurl=" + headimgurl;
        this.doReqPost(thisObj, callback, "swcontro/addinformation.do", value);
    };
    /** 获取排行榜 */
    Net.rank = function (thisObj, callback) {
        var value = "";
        this.doReqPost(thisObj, callback, "swcontro/ranklist.do", value);
    };
    Net.dayBest = function (thisObj, callback, type) {
        var value = "type=" + type;
        this.doReqPost(thisObj, callback, "swcontro/dayBest.do", value);
    };
    Net.weekBest = function (thisObj, callback, type) {
        var value = "type=" + type;
        this.doReqPost(thisObj, callback, "swcontro/weekBest.do", value);
    };
    Net.monthBest = function (thisObj, callback, type) {
        var value = "type=" + type;
        this.doReqPost(thisObj, callback, "swcontro/monthBest.do", value);
    };
    Net.initialize = function (thisObj, callback) {
        var value = "";
        this.doReqPost(thisObj, callback, "swcontro/toinitialize.do", value);
    };
    Net.urlIP = "";
    return Net;
}());
__reflect(Net.prototype, "Net");
//# sourceMappingURL=Net.js.map

class Net {
	public static urlIP: string = "";

	public static doReqPost(thisObj: any, callback: Function, rtype: string, value: string, type: string = egret.HttpResponseType.TEXT) {
		var req = new egret.HttpRequest();
		req.responseType = type;
		req.open(this.urlIP + rtype, egret.HttpMethod.POST);
		// req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
		req.send(value);
		req.addEventListener(egret.Event.COMPLETE, callback, thisObj);
	}

	public static doReqGet(thisObj: any, callback: Function, rtype: string, value: string, type: string = egret.HttpResponseType.TEXT) {
		var req = new egret.HttpRequest();
		req.responseType = type;
		req.open(this.urlIP + rtype + value, egret.HttpMethod.POST);
		req.send();
		req.addEventListener(egret.Event.COMPLETE, callback, thisObj);
	}


	/*上传信息*/
	// public static save_data(thisObj: any, callback: Function, province: string, name: string, phone: string, address: string): void {
	// 	var value: string = "province=" + province + "&name=" + name + "&phone=" + phone + "&address=" + address ;
	// 	this.doReqPost(thisObj, callback, "api.php?a=getInfo", value);
	// }

	/**发送请求 */
	public static send(thisObj: any, callback: Function, score: string, kill_num: string, resurrection: string, time_live: string,
		time_chuo: string, openid: string, nickname: string, headimgurl: string): void {
		var value: string = `score=${score}&kill_num=${kill_num}&resurrection=${resurrection}&time_live=${time_live}&time_chuo=${time_chuo}&openid=${openid}&nickname=${nickname}&headimgurl=${headimgurl}`
		this.doReqPost(thisObj, callback, "swcontro/addinformation.do", value);   
	}
	/** 获取排行榜 */
	public static rank(thisObj: any, callback: Function): void {
		var value: string = "";
		this.doReqPost(thisObj, callback, "swcontro/ranklist.do", value);
	}

	public static dayBest(thisObj: any, callback: Function, type: number): void {
		var value: string = "type=" + type;
		this.doReqPost(thisObj, callback, "swcontro/dayBest.do", value);
	}

	public static weekBest(thisObj: any, callback: Function, type: number): void {
		var value: string = "type=" + type;
		this.doReqPost(thisObj, callback, "swcontro/weekBest.do", value);
	}
	public static monthBest(thisObj: any, callback: Function, type: number): void {
		var value: string = "type=" + type;
		this.doReqPost(thisObj, callback, "swcontro/monthBest.do", value);
	}
	public static initialize(thisObj: any, callback: Function): void {
		var value: string = "" ;
		this.doReqPost(thisObj, callback, "swcontro/toinitialize.do", value);
	}
	// public static endgame(thisObj: any, callback: Function,sname:string): void {
	// 	var value: string = "grade="+sname;
	// 	this.doReqPost(thisObj, callback, "api.php?a=over", value);
	// }
	// public static share(thisObj: any, callback: Function): void {
	// 	var value: string = ""
	// 	this.doReqPost(thisObj, callback, "api.php?a=share", value);
	// }
	// public static rank(thisObj: any, callback: Function): void {
	// 	var value: string = "";
	// 	this.doReqPost(thisObj, callback, "api.php?a=rank", value);
	// }
	// public static loadxinxi(thisObj: any, callback: Function): void {
	// 	var value: string = ""
	// 	this.doReqPost(thisObj, callback, "api.php?a=carousel", value);
	// }

}
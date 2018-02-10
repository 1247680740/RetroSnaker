
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/tween/tween.js",
	"libs/modules/res/res.js",
	"libs/modules/socket/socket.js",
	"md5/bin/md5/md5.js",
	"h5uploader_lib/bin/h5uploader/h5uploader.js",
	"neoges_lib/bin/neoges_lib/neoges_lib.js",
	"particle/bin/particle/particle.js",
	"promise/bin/promise.js",
	"bin-debug/wy/basic/comp/BaseSprite.js",
	"bin-debug/pageUI/chong7UI.js",
	"bin-debug/pageUI/chong4UI.js",
	"bin-debug/pageUI/chong5UI.js",
	"bin-debug/pageUI/chong6UI.js",
	"bin-debug/models/score/ScoreInfoVo.js",
	"bin-debug/pageUI/chong1UI.js",
	"bin-debug/pageUI/chong2UI.js",
	"bin-debug/pageUI/chong3UI.js",
	"bin-debug/pageUI/p2UI.js",
	"bin-debug/pageUI/p3UI.js",
	"bin-debug/pageUI/paUI.js",
	"bin-debug/wy/htmlText/SingleClass.js",
	"bin-debug/pageUI/chong8UI.js",
	"bin-debug/pageUI/LoadingUIUI.js",
	"bin-debug/pageUI/p1UI.js",
	"bin-debug/wy/data/Data.js",
	"bin-debug/page/p3.js",
	"bin-debug/page/pa.js",
	"bin-debug/page/SocketManager.js",
	"bin-debug/StaticVar.js",
	"bin-debug/Main.js",
	"bin-debug/page/chong1.js",
	"bin-debug/page/chong2.js",
	"bin-debug/page/chong3.js",
	"bin-debug/page/chong4.js",
	"bin-debug/page/chong5.js",
	"bin-debug/page/chong6.js",
	"bin-debug/page/chong7.js",
	"bin-debug/page/chong8.js",
	"bin-debug/page/LoadingUI.js",
	"bin-debug/page/Mytools.js",
	"bin-debug/page/Net.js",
	"bin-debug/wy/basic/GameInterface.js",
	"bin-debug/page/p1.js",
	"bin-debug/wy/basic/comp/ItemRenderer.js",
	"bin-debug/wy/basic/comp/List.js",
	"bin-debug/wy/basic/comp/ScrollerList.js",
	"bin-debug/wy/control/BaseViewManager.js",
	"bin-debug/wy/control/FreshNotifyManager.js",
	"bin-debug/wy/Views/PageSwitchEffect/basic/Out/PageTopOut.js",
	"bin-debug/wy/data/FreshType.js",
	"bin-debug/wy/data/Json.js",
	"bin-debug/wy/data/PopType.js",
	"bin-debug/wy/htmlText/HTMLText.js",
	"bin-debug/page/p2.js",
	"bin-debug/wy/htmlText/StageMain.js",
	"bin-debug/wy/htmlText/StageUtils.js",
	"bin-debug/wy/interfaces/IItemRenderer.js",
	"bin-debug/wy/interfaces/IPageSwitch.js",
	"bin-debug/wy/Utils/BGM.js",
	"bin-debug/wy/Utils/Dialog.js",
	"bin-debug/wy/Utils/EWM.js",
	"bin-debug/wy/Utils/GameTimer.js",
	"bin-debug/wy/Utils/Gesture.js",
	"bin-debug/wy/Utils/HeadImg.js",
	"bin-debug/wy/Utils/InputUtils.js",
	"bin-debug/wy/Utils/LoadingData.js",
	"bin-debug/wy/Utils/RandomUtils.js",
	"bin-debug/wy/Utils/RegUtils.js",
	"bin-debug/wy/Utils/Slider.js",
	"bin-debug/wy/Utils/StageBtnUtils.js",
	"bin-debug/wy/Utils/Toast.js",
	"bin-debug/wy/Utils/Tools.js",
	"bin-debug/wy/Utils/TouchEffects.js",
	"bin-debug/wy/Utils/Tween.js",
	"bin-debug/wy/Utils/UploadImg.js",
	"bin-debug/wy/Utils/Yaoyiyao.js",
	"bin-debug/wy/Views/PageSwitchEffect/PageSwitch.js",
	"bin-debug/wy/Views/PageSwitchEffect/basic/In/PageAlphaIn.js",
	"bin-debug/wy/Views/PageSwitchEffect/basic/In/PageBottomIn.js",
	"bin-debug/wy/Views/PageSwitchEffect/basic/In/PageLeftIn.js",
	"bin-debug/wy/Views/PageSwitchEffect/basic/In/PageRightIn.js",
	"bin-debug/wy/Views/PageSwitchEffect/basic/In/PageScaleIn.js",
	"bin-debug/wy/Views/PageSwitchEffect/basic/In/PageTopIn.js",
	"bin-debug/wy/Views/PageSwitchEffect/basic/Out/PageAlphaOut.js",
	"bin-debug/wy/Views/PageSwitchEffect/basic/Out/PageBottomOut.js",
	"bin-debug/wy/Views/PageSwitchEffect/basic/Out/PageLeftOut.js",
	"bin-debug/wy/Views/PageSwitchEffect/basic/Out/PageRightOut.js",
	"bin-debug/wy/Views/PageSwitchEffect/basic/Out/PageScaleOut.js",
	"bin-debug/she.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "exactFit",
		contentWidth: 1920,
		contentHeight: 1080,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};
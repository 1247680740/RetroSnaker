/**
 *初始化场景层
 *
 */
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
var scoreVO = models.score.ScoreInfoVO;
var p1 = /** @class */ (function (_super) {
    __extends(p1, _super);
    function p1() {
        var _this = _super.call(this) || this;
        _this.tetext = wy.Tools.createBitmapText("font2_fnt");
        _this.tetext1 = wy.Tools.createBitmapText("font2_fnt");
        /**实施数据*/
        _this.cundatax = [];
        _this.cundatay = [];
        _this.cundataz = [];
        _this.a_num = -1;
        /**最好数据*/
        _this.bestdata = [];
        _this.dateArr = ["今日", "今日", "今日", "本周", "本周", "本周", "本月", "本月", "本月"];
        _this.titleArr = ["最高得分", "最高击杀", "最长存活", "最高得分", "最高击杀", "最长存活", "最高得分", "最高击杀", "最长存活"];
        _this.typeArr = ["最高分数", "击杀数量", "存活时间", "最高分数", "击杀数量", "存活时间", "最高分数", "击杀数量", "存活时间"];
        _this.ng = 0;
        _this.tex = 0;
        _this.count = [];
        _this.count2 = [];
        _this.isgame = false;
        _this.iskaishi = false;
        _this.tim = 0;
        _this.Maxtime = 180;
        _this.daojishi = 45;
        _this.objVO = new models.score.ScoreInfoVO();
        _this.ci = [];
        _this.xishu = 5;
        _this.guiji = [];
        // private action(i: number, x: number, y: number, z: number) {
        // 	var speed: number = 5;
        // 	//先走到上一次的位置
        // 	if (Math.abs(y - this.shes[j].bodys[i].y) <= 1) {
        // 	} else {
        // 		if (y > this.shes[j].bodys[i].y) {
        // 			this.shes[j].bodys[i].y += (y - (this.shes[j].bodys[i].y)) / speed;
        // 		} else {
        // 			this.shes[j].bodys[i].y -= ((this.shes[j].bodys[i].y) - y) / speed;
        // 		}
        // 	}
        // 	if (Math.abs(x - this.shes[j].bodys[i].x) <= 1) {
        // 	} else {
        // 		if (x > this.shes[j].bodys[i].x) {
        // 			this.shes[j].bodys[i].x += (x - (this.shes[j].bodys[i].x)) / speed;
        // 		} else {
        // 			this.shes[j].bodys[i].x -= ((this.shes[j].bodys[i].x) - x) / speed;
        // 		}
        // 	}
        // if (Math.abs(z - this.shes[j].bodys[i].rotation) <= 1) {
        // } else {
        // 	if (z > this.shes[j].bodys[i].rotation) {
        // 		// this.shes[j].bodys[i].rotation+= (z - (this.shes[j].bodys[i].rotation)) / speed;
        // 			// this.shes[j].bodys[i].rotation=this.ci-(this.ci-this.shes[j].bodys[i-1].rotation)/5
        // 	} else {
        // 		// this.shes[j].bodys[i].rotation -= ((this.shes[j].bodys[i].rotation) - z) / speed;
        // 		// this.shes[j].bodys[i].rotation -=this.ci-(this.ci-this.shes[j].bodys[i-1].rotation)/5
        // 	}
        // }
        /**最高排名的蛇
        */
        _this.fenshus = [];
        /**当前排名的蛇
        */
        _this.currentShe = [];
        /**图片半径*/
        _this.r = 20;
        return _this;
    }
    /***/
    p1.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    p1.prototype.show = function (data) {
        var _this = this;
        _super.prototype.show.call(this, data);
        wj.Mytools.like(this.tetext, this.timetext);
        wj.Mytools.like(this.tetext1, this.timedao);
        this.tetext.textAlign = "center";
        this.tetext.y += 50;
        this.tetext.x -= 50;
        wy.Tools.center(this.tetext);
        // this.tetext.textHeight=this.tetext.textHeight*0.3
        // this.tetext.textWidth=this.tetext.textWidth*0.3
        this.tetext.scaleX = this.tetext.scaleY = 0.45;
        this.tetext1.textAlign = "center";
        this.addChild(this.tetext);
        this.addChild(this.tetext1);
        SocketManager.getInstance().p1x = this;
        this.inint();
        this.donghua();
        this.btnset.touchEnabled = true;
        this.btnset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.btn.touchEnabled = true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        if (data == 1) {
            this.btn.touchEnabled = false;
            wj.Donghua.danchu(this.btn, 0, 1000);
            wy.Tools.center(this.title);
            wy.Tools.center(this.award);
            egret.Tween.get(this.title).to({ alpha: 0, scaleX: 3, scaleY: 3 }, 1000).call(function () {
                _this.award.visible = false;
                _this.kongzhi();
            });
        }
    };
    p1.prototype.inint = function () {
        var _this = this;
        this.bestdata = [];
        // 拿到滚动数据
        Net.dayBest(this, function (e) {
            var day1 = JSON.parse(e.currentTarget.response);
            console.log("获取的数据：" + day1);
            for (var i = 0; i < day1.length; i++) {
                _this.scoreObj = day1[i];
                _this.score1VO = new models.score.ScoreInfoVO();
                _this.score1VO.icon = _this.scoreObj["headimgurl"];
                _this.score1VO.name = _this.scoreObj["nickname"];
                _this.score1VO.numVlue = _this.scoreObj["score"];
                _this.bestdata.push(_this.score1VO);
            }
            console.log("存储的数据：" + _this.bestdata);
            _this.gundongbofang();
        }, 1);
        Net.initialize(this, function () { });
        this.la1.verticalAlign = "middle";
        this.la1.text = "";
        this.la2.verticalAlign = "middle";
        this.la2.text = "";
        this.la3.verticalAlign = "middle";
        this.la3.text = "";
        this.la4.verticalAlign = "middle";
        this.la4.text = "";
        this.la4.x -= 10;
        this.la5.verticalAlign = "middle";
        this.la5.text = "";
        this.la5.x += 20;
        // this.timedao.fontFamily = "华康方圆体W7"
        // this.timetext.fontFamily = "华康方圆体W7"
        this.timetext.alpha = 0;
        this.tetext.alpha = 0;
        this.timedao.alpha = 0;
        this.timedao.bold = true;
        this.timetext.bold = true;
        // this.l1.y += 10;
        // this.l2.y += 10;
        // this.l3.y += 10;
        this.l1.x += this.r + this.r;
        this.l2.x += this.r + this.r;
        this.l3.x += this.r + this.r;
        for (var i = 1; i <= 8; i++) {
            this["dan" + i].alpha = 0;
            // this["cao" + i + "1"].alpha = 0;
            // this["ewm" + i].alpha = 0;
            // wy.Tools.center(this["ewm" + i])
            // this["ewm" + i].x -= (200 - 110) / 2
            // this["ewm" + i].y -= (200 - 110) / 2
            // this["ewm" + i].width = this["ewm" + i].height = 200;
        }
        this.ewm.alpha = 0;
        this.ewmx.alpha = 0;
        // Net.rank(this, (e: egret.Event) => {
        // 	var data = JSON.parse(e.currentTarget.response)
        // 	if (data) {
        // 		for (let i = 0; i < data.data.rank.length; i++) {
        // 			(this["l" + (i + 1)] as egret.TextField).bold = true;
        // 			if (i == 0) {
        // 				this["l" + (i + 1)].y += 10
        // 				this["l" + (i + 1)].text = wj.Mytools.zishuguochang(data.data.rank[0].nickname, 6) + "  " + data.data.rank[0].score;
        // 			} else if (i == 1) {
        // 				this["l" + (i + 1)].y += 10
        // 				this["l" + (i + 1)].text = wj.Mytools.zishuguochang(data.data.rank[1].nickname, 6) + "  " + data.data.rank[1].score;
        // 			} else if (i == 2) {
        // 				this["l" + (i + 1)].y += 10
        // 				this["l" + (i + 1)].text = wj.Mytools.zishuguochang(data.data.rank[2].nickname, 6) + "  " + data.data.rank[2].score;
        // 			}
        // 		}
        // 	}
        // })
        // for (let i = 1; i <= 8; i++) {
        // 	// this.ewm1.width;
        // 	// this.ewm1.height;
        // 	this["dan" + i].x += 45;
        // 	this[`cao${i}1`].x += 45;
        // 	this[`cao${i}2`].x += 45;
        // 	this["dan" + i].y += 45;
        // 	this[`cao${i}1`].y += 45;
        // 	this[`cao${i}2`].y += 45;
        // 	this[`ewm${i}`].x += 30;
        // 	this[`ewm${i}`].y += 30;
        // 	this[`ewm${i}`].width = 80;
        // 	this[`ewm${i}`].height = 80;
        // 	this.addChild(this[`ewm${i}`])
        // }
        this.jianzhi = {};
        this.shes = [];
        this.foods = [];
        this.foods2 = [];
        for (var i = 1; i <= 8; i++) {
            wy.Tools.center(this["dan" + i]);
        }
    };
    p1.prototype.donghua = function () {
        wj.Donghua.yingru(this.title, 0, 1000);
        // wj.Donghua.yingru(this.award, 0, 1000)
    };
    /** 创建浮游物 */
    p1.prototype.createfood = function () {
        var chars = [0xfcdb06, 0xfc4f90, 0xc700f6, 0x01a884, 0x00a782, 0x00c9ff];
        for (var i = 0; i < 50; i++) {
            this.foods[i] = new egret.Shape();
            this.foods[i].name = "food" + i;
            this.foods[i].x = Math.ceil(Math.random() * (1666 - 45) + 45);
            this.foods[i].y = Math.ceil(Math.random() * (1031 - 45) + 45);
            this.foods[i].graphics.beginFill(chars[Math.ceil(Math.random() * 5)], 1);
            this.foods[i].graphics.drawCircle(0, 0, 8);
            this.foods[i].graphics.endFill();
            this.addChildAt(this.foods[i], this.getChildIndex(this.timetext));
        }
    };
    p1.prototype.createfood2 = function (x, y) {
        var chars = [0xfcdb06, 0xfc4f90, 0xc700f6, 0x01a884, 0x00a782, 0x00c9ff];
        this.ng++;
        var fo = new egret.Shape();
        fo.name = "fd" + this.ng;
        fo.x = x;
        fo.y = y;
        fo.graphics.beginFill(chars[Math.ceil(Math.random() * 5)], 1);
        fo.graphics.drawCircle(0, 0, 12);
        fo.graphics.endFill();
        this.addChildAt(fo, this.getChildIndex(this.foods[0]));
        this.foods2.push(fo);
    };
    p1.prototype.sheAI = function (ss) {
        var _this = this;
        var index = this.jianzhi[ss._id + ""];
        console.log(index);
        var num;
        var cout = 0;
        var Maxcout = 3;
        num = egret.setInterval(function () {
            if (_this.isgame) {
                cout++;
                if (cout == Maxcout) {
                    // console.log(index);
                    cout = 0;
                    Maxcout = ((Math.random() * 10) >> 0) + 1;
                    _this.cundatay[index] = Math.random() * 418 * 2;
                    _this.cundatax[index] = Math.random() * 171 * 2;
                    if ((Math.random() * 2 >> 0) == 0) {
                        _this.cundataz[index] = false;
                    }
                    else {
                        _this.cundataz[index] = true;
                    }
                }
            }
            else {
                egret.clearInterval(num);
            }
        }, this, 200);
    };
    p1.prototype.view = function (e) {
        this.move();
        var fod = false;
        var fod2 = false;
        var i;
        for (var i_1 = 0; i_1 < this.foods.length; i_1++) {
            // for (let k = 0; k < this.count.length; k++) {
            // 	if (this.foods[i].name == this.count[k]) {
            // 		fod = true;
            // 	}
            // }
            // if (fod) { continue; };
            for (var j = 0; j < this.shes.length; j++) {
                if (Math.abs(this.shes[j].head.x - this.foods[i_1].x) <= 8 + (this.shes[j].body.width >> 1) && Math.abs(this.shes[j].head.y - this.foods[i_1].y) <= 8 + (this.shes[j].body.width >> 1)) {
                    this.count.push(this.foods[i_1].name);
                    // egret.Tween.get(this.foods[i]).to({ x: this.shes[j].head.x, y: this.shes[j].head.y }, 300).call(() => {
                    this.shes[j].jifen = this.shes[j]._jifen + 2;
                    this.foods[i_1].x = Math.ceil(Math.random() * (1666 - 45) + 45);
                    this.foods[i_1].y = Math.ceil(Math.random() * (1031 - 45) + 45);
                    // this.count.splice(this.count.indexOf(this.foods[i].name), 1)
                    // })
                }
            }
        }
        /** 创建大的浮游物 */
        for (var j = 0; j < this.shes.length; j++) {
            for (var i_2 = 0; i_2 < this.foods2.length; i_2++) {
                // for (let k = 0; k < this.count2.length; k++) {
                // 	if (this.foods2[i].name == this.count2[k]) {
                // 		fod2 = true
                // 	}
                // }
                // if (fod2) {
                // 	continue;
                // }
                if (Math.abs(this.shes[j].head.x - this.foods2[i_2].x) <= 12 + (this.shes[j].body.width >> 1) && Math.abs(this.shes[j].head.y - this.foods2[i_2].y) <= 12 + (this.shes[j].body.width >> 1)) {
                    // console.log(this.tex++);
                    // this.count2.push(this.foods2[i].name);
                    // egret.Tween.get(this.foods2[i]).to({ x: this.shes[j].head.x, y: this.shes[j].head.y }, 300).call(() => {
                    // this.count2.splice(this.count2.indexOf(this.foods2[i].name), 1)
                    this.shes[j].jifen = this.shes[j]._jifen + 5;
                    this.removeChild(this.foods2[i_2]);
                    this.foods2.splice(i_2, 1);
                    // })
                }
            }
        }
    };
    /** 创建蛇 */
    p1.prototype.createshe = function (type, str1, str2, str3) {
        if (this.iskaishi) {
            var sh = new she(type, this);
            sh.playername = str1;
            sh.openid = str2;
            sh.headimgurl = str3;
            sh.adds();
            this.shes.push(sh);
            this.cundatax.push(p1.xx);
            this.cundatay.push(p1.yy);
            this.cundataz.push(false);
            this.jianzhi["" + type] = this.shes.length - 1;
            if (str3 == "") {
                this.sheAI(sh);
            }
            // console.log("" + type);
            this.guiji.push([]);
            // console.log(this.jianzhi["" + type]);
        }
    };
    p1.prototype.close = function () {
        this.time.stop();
        var data = [];
        for (var i = 0; i < this.fenshus.length; i++) {
            data.push([this.fenshus[i]._id, this.fenshus[i].live, this.fenshus[i].kill, this.fenshus[i].maxjifen, this.fenshus[i].maxtime]);
        }
        SocketManager.getInstance().send({ "gameover": 1, "data": data });
        this.removeEventListener(egret.Event.ENTER_FRAME, this.view, this);
        this.time.removeEventListener(egret.TimerEvent.TIMER, this.add, this);
        SocketManager.getInstance().p1x = null;
    };
    p1.prototype.add = function () {
        if (this.isgame) {
            this.tim++;
        }
        ;
        if (this.iskaishi) {
            this.daojishi--;
        }
        ;
        this.tetext.text = wj.Mytools.getstrtime(this.Maxtime - this.tim);
        this.tetext1.text = this.daojishi + ""; // wj.Mytools.getstrtime(this.daojishi);
        if (this.tim >= this.Maxtime) {
            for (var i = 0; i < this.shes.length; i++) {
                this.shes[i].close();
            }
            this.isgame = false;
            this.close();
            wy.changeScene(p3, "", this.fenshus);
        }
        if (this.daojishi == 0) {
            this.daojishi = -100;
            this.tetext1.alpha = 0;
            this.startgame();
        }
    };
    p1.prototype.gundongbofang = function () {
        var _this = this;
        if (this.bestdata.length == 0) {
            return;
        }
        var headi = new wy.HeadImg(this.headi.width / 2, false);
        headi.x = this.headi.x + this.headi.width / 2;
        headi.y = this.headi.y + this.headi.height / 2;
        var index = -1;
        this.addChild(headi);
        for (var i = 1; i <= 5; i++) {
            this["la" + i].alpha = 1;
            wj.Donghua.hengchushang(this["la" + i], 0, 1000);
            wj.Donghua.danchu(this["la" + i], 3800, 1000);
            // this["la" + i].text = this.bestdata[index][i]
        }
        // headi.source = this.bestdata[index][0]
        var num2 = egret.setInterval(function () {
            index++;
            for (var i = 1; i <= 5; i++) {
                _this["la" + i].alpha = 1;
                wj.Donghua.hengchushang(_this["la" + i], 0, 1000);
                wj.Donghua.danchu(_this["la" + i], 3800, 1000);
            }
            if (index > 8)
                index = 0;
            _this.objVO = _this.bestdata[index];
            headi.source = _this.objVO.icon;
            _this.la1.text = _this.dateArr[index];
            _this.la2.text = _this.titleArr[index];
            _this.la3.text = _this.objVO.name;
            _this.la4.text = _this.typeArr[index];
            if (index == 2 || index == 5 || index == 8) {
                _this.la5.text = _this.objVO.numVlue + "s";
            }
            else {
                _this.la5.text = _this.objVO.numVlue + "";
            }
        }, this, 5000);
    };
    p1.prototype.startgame = function () {
        this.ewm.alpha = 0;
        this.ewmx.alpha = 0;
        this.tetext.alpha = 1;
        wy.Tools.removeFromParent(this.menc);
        this.isgame = true;
        for (var i = 1; i <= 8; i++) {
            this.cundatax[i - 1] = Math.random() * 418 * 2;
            this.cundatay[i - 1] = Math.random() * 171 * 2;
            this.cundataz[i - 1] = false;
            if (this["dan" + i].alpha == 1) {
                this.createshe(i, "电脑" + i, "computer" + i, ""); //"resource/assets/chong" + i + "/chong" + i + "_1.png"
            }
            for (var i_3 = 0; i_3 < this.shes.length; i_3++) {
                this.fenshus[i_3] = this.shes[i_3];
                this.currentShe[i_3] = this.shes[i_3];
            }
            this.addChild(this.tetext);
        }
        this.createfood();
        this.iskaishi = false;
    };
    p1.prototype.kongzhi = function () {
        var maxtime = wj.Mytools.getdata("TSS_GameTime");
        var dao = wj.Mytools.getdata("TSS_Timedown");
        if (maxtime) {
            this.Maxtime = Number(maxtime);
        }
        if (dao) {
            this.daojishi = Number(dao);
        }
        this.menc = wj.Mytools.createshap(0, 0, 1920, 1080, 0, 0.3);
        this.addChildAt(this.menc, 1);
        // wj.Donghua.shangfeiru(this.menc,0,500)
        for (var i = 1; i <= 8; i++) {
            this["dan" + i].alpha = 1;
            // this["cao" + i + "1"].alpha = 1;
            // this["ewm" + i].alpha = 1;
        }
        this.time = new egret.Timer(1000, 0);
        this.time.addEventListener(egret.TimerEvent.TIMER, this.add, this);
        this.time.start();
        this.iskaishi = true;
        // this.createshe(1,"2","3","4");
        // this.createshe(2,"2","3","4");
        // this.cundatax[0]=1;
        // this.cundatay[0]=1;
        // this.cundataz[0]=false;
        // 	this.cundatax[1]=1;
        // this.cundatay[1]=1;
        // this.cundataz[1]=false;
        // this.shes.push(new she(2, this));
        // this.shes.push(new she(1, this));
        // this.shes[1].adds();
        // this.shes[j].adds();
        this.addEventListener(egret.Event.ENTER_FRAME, this.view, this);
        // this.addEventListener(egret.Event.ENTER_FRAME, this.move, this)
    };
    p1.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.btn.touchEnabled = false;
        this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    p1.prototype.onTouchTap = function (e) {
        var _this = this;
        switch (e.currentTarget) {
            case this.btnset:
                wy.changeView(pa);
                break;
            case this.btn:
                this.btn.touchEnabled = false;
                wj.Donghua.danchu(this.btn, 0, 1000);
                wy.Tools.center(this.title);
                wy.Tools.center(this.award);
                egret.Tween.get(this.title).to({ alpha: 0, scaleX: 3, scaleY: 3 }, 1000).call(function () {
                    _this.award.alpha = 0;
                    _this.ewm.alpha = 1;
                    _this.ewmx.alpha = 1;
                    _this.kongzhi();
                });
                break;
            default:
                break;
        }
    };
    p1.prototype.move = function () {
        for (var j = 0; j < this.shes.length; j++) {
            //计算变化率
            // this.guiji[j]=[];
            var stance = 5 * 4.5 / this.xishu;
            if (this.cundatax[j] >= 171 && this.cundatay[j] <= 418) {
                // console.log(this.cundatax[j]);
                // console.log(this.cundatay[j]);
                if (!this.shes[j].isbudong && this.isgame) {
                    this.shes[j].head.x += Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                    this.shes[j].head.y += Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                }
                this.ci[j] = 90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926;
            }
            else if (this.cundatax[j] <= 171 && this.cundatay[j] <= 418) {
                if (!this.shes[j].isbudong && this.isgame) {
                    this.shes[j].head.x -= Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                    this.shes[j].head.y -= Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                }
                this.ci[j] = -90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926;
            }
            else if (this.cundatax[j] <= 171 && this.cundatay[j] >= 121) {
                if (!this.shes[j].isbudong && this.isgame) {
                    this.shes[j].head.x -= Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                    this.shes[j].head.y -= Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                }
                this.ci[j] = -90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926;
            }
            else if (this.cundatax[j] >= 171 && this.cundatay[j] >= 418) {
                if (!this.shes[j].isbudong && this.isgame) {
                    this.shes[j].head.x += Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                    this.shes[j].head.y += Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                }
                this.ci[j] = 90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926;
            }
            this.shes[j].head.rotation = this.ci[j];
            this.shes[j].bodys[0].rotation = this.shes[j].head.rotation;
            this.shes[j].bodys[0].x = this.shes[j].head.x;
            this.shes[j].bodys[0].y = this.shes[j].head.y;
            this.shes[j].txchange();
            if (this.guiji[j].length >= (this.shes[j].bodys.length + 1) * this.xishu) {
                this.guiji[j].splice(this.guiji[j].length - 1, 1);
                this.guiji[j].splice(0, 0, [this.shes[j].head.x, this.shes[j].head.y, this.shes[j].head.rotation]);
            }
            else {
                this.guiji[j].splice(0, 0, [this.shes[j].head.x, this.shes[j].head.y, this.shes[j].head.rotation]);
            }
            for (i = 0; i < this.shes[j].bodys.length; i++) {
                if (this.guiji[j][(i) * this.xishu - 1])
                    this.shes[j].bodys[i].rotation = this.guiji[j][(i) * this.xishu - 1][2];
                if (this.guiji[j][(i) * this.xishu - 1])
                    this.shes[j].bodys[i].x = this.guiji[j][(i) * this.xishu - 1][0];
                if (this.guiji[j][(i) * this.xishu - 1])
                    this.shes[j].bodys[i].y = this.guiji[j][(i) * this.xishu - 1][1];
            }
            // //穿墙
            // if (this.shes[j].head.y <= 0) {
            // 	this.shes[j].head.y = this.stage.stageHeight;
            // } else if (this.shes[j].head.y >= this.stage.stageHeight) {
            // 	this.shes[j].head.y = 0;
            // }
            // if (this.shes[j].head.x <= 0) {
            // 	this.shes[j].head.x = this.stage.stageWidth;
            // } else if (this.shes[j].head.x >= this.stage.stageWidth) {
            // 	this.shes[j].head.x = 0;
            // }
            var i;
            if (this.cundataz[j]) {
                if (this.cundatax[j] >= 171 && this.cundatay[j] <= 418) {
                    if (!this.shes[j].isbudong && this.isgame) {
                        this.shes[j].head.x += Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                        this.shes[j].head.y += Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                    }
                    this.ci[j] = 90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926;
                }
                else if (this.cundatax[j] <= 171 && this.cundatay[j] <= 418) {
                    if (!this.shes[j].isbudong && this.isgame) {
                        this.shes[j].head.x -= Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                        this.shes[j].head.y -= Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                    }
                    this.ci[j] = -90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926;
                }
                else if (this.cundatax[j] <= 171 && this.cundatay[j] >= 418) {
                    if (!this.shes[j].isbudong && this.isgame) {
                        this.shes[j].head.x -= Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                        this.shes[j].head.y -= Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                    }
                    this.ci[j] = -90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926;
                }
                else if (this.cundatax[j] >= 171 && this.cundatay[j] >= 418) {
                    if (!this.shes[j].isbudong && this.isgame) {
                        this.shes[j].head.x += Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                        this.shes[j].head.y += Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
                    }
                    this.ci[j] = 90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926;
                }
                this.shes[j].head.rotation = this.ci[j];
                this.shes[j].bodys[0].rotation = this.shes[j].head.rotation;
                this.shes[j].bodys[0].x = this.shes[j].head.x;
                this.shes[j].bodys[0].y = this.shes[j].head.y;
                if (this.guiji[j].length >= (this.shes[j].bodys.length + 1) * this.xishu) {
                    this.guiji[j].splice(this.guiji[j].length - 1, 1);
                    this.guiji[j].splice(0, 0, [this.shes[j].head.x, this.shes[j].head.y, this.shes[j].head.rotation]);
                }
                else {
                    this.guiji[j].splice(0, 0, [this.shes[j].head.x, this.shes[j].head.y, this.shes[j].head.rotation]);
                }
                for (i = 0; i < this.shes[j].bodys.length; i++) {
                    if (this.guiji[j][(i) * this.xishu - 1])
                        this.shes[j].bodys[i].rotation = this.guiji[j][(i) * this.xishu - 1][2];
                    if (this.guiji[j][(i) * this.xishu - 1])
                        this.shes[j].bodys[i].x = this.guiji[j][(i) * this.xishu - 1][0];
                    if (this.guiji[j][(i) * this.xishu - 1])
                        this.shes[j].bodys[i].y = this.guiji[j][(i) * this.xishu - 1][1];
                }
                // //穿墙
                // if (this.shes[j].head.y <= 0) {
                // 	this.shes[j].head.y = this.stage.stageHeight;
                // } else if (this.shes[j].head.y >= this.stage.stageHeight) {
                // 	this.shes[j].head.y = 0;
                // }
                // if (this.shes[j].head.x <= 0) {
                // 	this.shes[j].head.x = this.stage.stageWidth;
                // } else if (this.shes[j].head.x >= this.stage.stageWidth) {
                // 	this.shes[j].head.x = 0;
                // }
                var i;
            }
        }
        // for (i = 0; i < this.shes[j].bodys.length; i++) {
        // 	if (i > 0) {
        // 		this.action(i,this.shes[j].bodys[i - 1].x + gensui_x, this.shes[j].bodys[i - 1].y + gensui_y, this.shes[j].bodys[i - 1].rotation);
        // 		//this.shes[j].bodys[i].x = this.shes[j].bodys[i-1].x + gensui_x;
        // 		//this.shes[j].bodys[i].y = this.shes[j].bodys[i - 1].y + gensui_y;
        // 	} else {
        // 		this.action(i, this.shes[j].head.x + gensui_x, this.shes[j].head.y + gensui_y,this.shes[j].head.rotation+this.ci);
        // 		this.shes[j].head.rotation=this.ci;
        // 		this.shes[j].bodys[0].rotation=this.ci-(this.ci-this.shes[j].head.rotation)/5;
        // 		//this.shes[j].bodys[i].x = this.head.x + gensui_x;
        // 		//this.shes[j].bodys[i].y = this.head.y + gensui_y;
        // 	}
        // }
        // }
        this.pengzhuang();
        this.datachangging();
    };
    //数据更新
    p1.prototype.datachangging = function () {
        // var fenshus=[];
        this.fenshus.sort(function (x, y) {
            if (x.maxjifen < y.maxjifen) {
                return 1;
            }
            else if (x.maxjifen > y.maxjifen) {
                return -1;
            }
            else {
                return 0;
            }
        });
        for (var i = 0; i < this.fenshus.length; i++) {
            wy.Tools.removeFromParent(this.fenshus[i].headimg);
            if (i < 3) {
                var head = this.fenshus[i].headimg;
                if (head) {
                    head.x = 1762 + this.r;
                    head.y = this["l" + (i + 1)].y + (this["l" + (i + 1)].height >> 1);
                    this.addChild(head);
                }
                this["l" + (i + 1)].text = wj.Mytools.zishuguochang(this.fenshus[i].playername, 6) + " " + this.fenshus[i].maxjifen;
            }
        }
        this.currentShe.sort(function (x, y) {
            if (x._jifen < y._jifen) {
                return 1;
            }
            else if (x._jifen > y._jifen) {
                return -1;
            }
            else {
                return 0;
            }
        });
        for (var i = 0; i < this.currentShe.length; i++) {
            this["l" + (i + 4)].text = (i + 1) + "：" + wj.Mytools.zishuguochang(this.currentShe[i].playername, 6) + "  " + this.currentShe[i]._jifen;
        }
    };
    // 检测碰撞
    p1.prototype.pengzhuang = function () {
        for (var i = 0; i < this.shes.length; i++) {
            if (this.shes[i].isyouli) {
                // 碰墙
                if (this.shes[i].head.y - (this.shes[i].body.width >> 1) <= 45) {
                    this.cundatay[i] = 640;
                }
                else if (this.shes[i].head.y + (this.shes[i].body.width >> 1) >= this.stage.stageHeight - 45) {
                    this.cundatay[i] = 0;
                }
                else if (this.shes[i].head.x - (this.shes[i].body.width >> 1) <= 45) {
                    this.cundatax[i] = 1036;
                }
                else if (this.shes[i].head.x + (this.shes[i].body.width >> 1) >= 1666) {
                    this.cundatax[i] = 0;
                }
                continue;
            }
            ;
            // 碰墙
            if (this.shes[i].head.y - (this.shes[i].body.width >> 1) <= 45) {
                if (this.shes[i]._headimgurl == "") {
                    this.cundatay[i] = 640;
                }
                else {
                    this.shes[i].die();
                }
            }
            else if (this.shes[i].head.y + (this.shes[i].body.width >> 2) >= this.stage.stageHeight - 45) {
                if (this.shes[i]._headimgurl == "") {
                    this.cundatay[i] = 0;
                }
                else {
                    this.shes[i].die();
                }
            }
            else if (this.shes[i].head.x - (this.shes[i].body.width >> 1) <= 45) {
                if (this.shes[i]._headimgurl == "") {
                    this.cundatax[i] = 1036;
                }
                else {
                    this.shes[i].die();
                }
            }
            else if (this.shes[i].head.x + (this.shes[i].body.width >> 1) >= 1666) {
                if (this.shes[i]._headimgurl == "") {
                    this.cundatax[i] = 0;
                }
                else {
                    this.shes[i].die();
                }
            }
            // 碰其他蛇
            for (var j = 0; j < this.shes.length; j++) {
                if (i == j) {
                    continue;
                }
                if (this.shes[j].isyouli) {
                    continue;
                }
                for (var z = 0; z < this.shes[j].bodys.length; z++) {
                    var bo1 = Math.abs(this.shes[i].head.y - this.shes[j].bodys[z].y) < (this.shes[i].body.height >> 1) + (this.shes[j].bodys[z].width >> 1);
                    var bo2 = Math.abs(this.shes[i].head.x - this.shes[j].bodys[z].x) < (this.shes[i].body.width >> 1) + (this.shes[j].bodys[z].width >> 1);
                    if (bo1 && bo2) {
                        // if (this.shes[i]._headimgurl == "") {
                        // 	this.cundatax[i]=-this.cundatax[i];
                        // 	this.cundatay[i]=-this.cundatay[i];
                        // } else {
                        this.shes[i].die();
                        this.shes[j].kill++;
                        // }
                        /** 大蛇吃小蛇 */
                        // if(this.shes[i].bodys.length>this.shes[j].bodys.length){
                        // 	this.shes[j].die();
                        // 	this.shes[i].kill++;
                        // }else{
                        // 	this.shes[i].die();
                        // 	this.shes[j].kill++;
                        // }
                    }
                }
            }
            // //碰到蛇蛋
            // for (let k = 0; k < 8; k++) {
            // 	if (k + 1 == this.shes[i]._id) { continue; }
            // 	if (this["dan" + (k + 1)].alpha == 1) {
            // 		var bo = Math.abs(this.shes[i].head.y - this["dan" + (k + 1)].y + (this.shes[i].body.width >> 1)) < (this.shes[i].body.height >> 1) + (50)
            // 		var bo0 = Math.abs(this.shes[i].head.x - this["dan" + (k + 1)].x) < (this.shes[i].body.width >> 1) + (50)
            // 		if (bo && bo0) {
            // 			this.shes[i].die();
            // 			this.cundatax[i] = 1036
            // 		}
            // 	}
            // }
        }
    };
    p1.jiasu = false;
    p1.xx = 418;
    p1.yy = 171;
    return p1;
}(p1UI));

/**
 *初始化场景层
 *
 */

import scoreVO = models.score.ScoreInfoVO; 
class p1 extends p1UI {
	constructor() {
		super();
	}
	private tetext = wy.Tools.createBitmapText("font2_fnt");
	private tetext1 = wy.Tools.createBitmapText("font2_fnt");
	/**键值对*/
	public jianzhi: any
	/**实施数据*/
	public cundatax: number[] = [];
	public cundatay: number[] = [];
	public cundataz: boolean[] = [];
	public type: number;
	public static jiasu = false;
	/**所以的蛇*/
	public shes: she[]
	private foods: egret.Shape[];
	public foods2: egret.Shape[];
	/**触摸板类*/
	private x_jn: number;
	private y_jn: number;
	private a_num: number = -1;
	/***/
	protected createChildren(): void {
		super.createChildren();
	}
	public show(data?): void {
		super.show(data);
		wj.Mytools.like(this.tetext, this.timetext);
		wj.Mytools.like(this.tetext1, this.timedao);
		this.tetext.textAlign = "center"
		this.tetext.y += 50;
		this.tetext.x -= 50;
		wy.Tools.center(this.tetext)
		// this.tetext.textHeight=this.tetext.textHeight*0.3
		// this.tetext.textWidth=this.tetext.textWidth*0.3
		this.tetext.scaleX = this.tetext.scaleY = 0.45
		this.tetext1.textAlign = "center"
		this.addChild(this.tetext)
		this.addChild(this.tetext1)
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
			egret.Tween.get(this.title).to({ alpha: 0, scaleX: 3, scaleY: 3 }, 1000).call(() => {
				this.award.visible=false;
				this.kongzhi();
			})
		}
	}
	/**最好数据*/
	private bestdata = []
	private dateArr:Array<string>=["今日","今日","今日","本周","本周","本周","本月","本月","本月"];
	private titleArr:Array<string>=["最高得分","最高击杀","最长存活","最高得分","最高击杀","最长存活","最高得分","最高击杀","最长存活"];
	private typeArr:Array<string>=["最高分数","击杀数量","存活时间","最高分数","击杀数量","存活时间","最高分数","击杀数量","存活时间"];
	private scoreObj:Object;
	private score1VO:scoreVO;
	private inint() {
		this.bestdata = []
		// 拿到滚动数据
		
		Net.dayBest(this, (e: egret.Event) => {
			var day1:Array<Object>= JSON.parse(e.currentTarget.response);
			console.log("获取的数据："+day1);
			for(let i:number=0;i<day1.length;i++){
				this.scoreObj=day1[i];
				this.score1VO= new models.score.ScoreInfoVO();
				this.score1VO.icon=this.scoreObj["headimgurl"];
				this.score1VO.name=this.scoreObj["nickname"];
				this.score1VO.numVlue=this.scoreObj["score"];
				this.bestdata.push(this.score1VO);
			}
			this.gundongbofang();
		},1);

		Net.initialize(this, () => { });
		this.la1.verticalAlign = "middle"
		this.la1.text = ""
		this.la2.verticalAlign = "middle"
		this.la2.text = ""
		this.la3.verticalAlign = "middle"
		this.la3.text = ""
		this.la4.verticalAlign = "middle"
		this.la4.text = ""
		this.la4.x -= 10
		this.la5.verticalAlign = "middle"
		this.la5.text = ""
		this.la5.x += 20
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

		for (let i = 1; i <= 8; i++) {
			this["dan" + i].alpha = 0;
			// this["cao" + i + "1"].alpha = 0;
			// this["ewm" + i].alpha = 0;
			// wy.Tools.center(this["ewm" + i])
			// this["ewm" + i].x -= (200 - 110) / 2
			// this["ewm" + i].y -= (200 - 110) / 2
			// this["ewm" + i].width = this["ewm" + i].height = 200;
		}
		this.ewm.alpha=0;
		this.ewmx.alpha=0;
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

		this.jianzhi = {}
		this.shes = [];
		this.foods = [];
		this.foods2 = [];
		for (let i = 1; i <= 8; i++) {

			wy.Tools.center(this["dan" + i])
		}
	}
	private donghua() {
		wj.Donghua.yingru(this.title, 0, 1000)
		// wj.Donghua.yingru(this.award, 0, 1000)
	}

	/** 创建浮游物 */
	private createfood() {
		var chars: number[] = [0xfcdb06, 0xfc4f90, 0xc700f6, 0x01a884, 0x00a782, 0x00c9ff];
		for (let i = 0; i < 50; i++) {

			this.foods[i] = new egret.Shape();
			this.foods[i].name = "food" + i;
			this.foods[i].x = Math.ceil(Math.random() * (1666 - 45) + 45);
			this.foods[i].y = Math.ceil(Math.random() * (1031 - 45) + 45);
			this.foods[i].graphics.beginFill(chars[Math.ceil(Math.random() * 5)], 1);
			this.foods[i].graphics.drawCircle(0, 0, 8);
			this.foods[i].graphics.endFill();
			this.addChildAt(this.foods[i], this.getChildIndex(this.timetext));
		}

	}
	private ng: number = 0;
	public createfood2(x: number, y: number) {
		var chars: number[] = [0xfcdb06, 0xfc4f90, 0xc700f6, 0x01a884, 0x00a782, 0x00c9ff];
		this.ng++;

		var fo = new egret.Shape();
		fo.name = "fd" + this.ng;
		fo.x = x;
		fo.y = y;
		fo.graphics.beginFill(chars[Math.ceil(Math.random() * 5)], 1);
		fo.graphics.drawCircle(0, 0, 12);
		fo.graphics.endFill();
		this.addChildAt(fo, this.getChildIndex(this.foods[0]));
		this.foods2.push(fo)
	}
	public sheAI(ss: she) {
		var index = this.jianzhi[ss._id + ""];
		console.log(index);

		var num: number;

		var cout = 0;
		var Maxcout = 3;
		num = egret.setInterval(() => {
			if (this.isgame) {
				cout++;
				if (cout == Maxcout) {
					// console.log(index);

					cout = 0;
					Maxcout = ((Math.random() * 10) >> 0) + 1;
					this.cundatay[index] = Math.random() * 418 * 2;
					this.cundatax[index] = Math.random() * 171 * 2

					if ((Math.random() * 2 >> 0) == 0) {
						this.cundataz[index] = false;
					} else {
						this.cundataz[index] = true;
					}
				}
			} else {
				egret.clearInterval(num);
			}

		}, this, 200)

	}
	private tex = 0;
	private count: string[] = [];
	private count2: string[] = [];
	private view(e: egret.Event) {
		this.move()
		var fod = false;
		var fod2 = false;
		var i: number;


		for (let i = 0; i < this.foods.length; i++) {
			// for (let k = 0; k < this.count.length; k++) {
			// 	if (this.foods[i].name == this.count[k]) {
			// 		fod = true;
			// 	}
			// }
			// if (fod) { continue; };
			for (let j = 0; j < this.shes.length; j++) {
				if (Math.abs(this.shes[j].head.x - this.foods[i].x) <= 8 + (this.shes[j].body.width >> 1) && Math.abs(this.shes[j].head.y - this.foods[i].y) <= 8 + (this.shes[j].body.width >> 1)) {
					this.count.push(this.foods[i].name);
					// egret.Tween.get(this.foods[i]).to({ x: this.shes[j].head.x, y: this.shes[j].head.y }, 300).call(() => {
					this.shes[j].jifen = this.shes[j]._jifen + 2;
					this.foods[i].x = Math.ceil(Math.random() * (1666 - 45) + 45);
					this.foods[i].y = Math.ceil(Math.random() * (1031 - 45) + 45);
					// this.count.splice(this.count.indexOf(this.foods[i].name), 1)

					// })

				}
			}
		}
		
		/** 创建大的浮游物 */
		for (let j = 0; j < this.shes.length; j++) {
			for (let i = 0; i < this.foods2.length; i++) {
				// for (let k = 0; k < this.count2.length; k++) {
				// 	if (this.foods2[i].name == this.count2[k]) {
				// 		fod2 = true
				// 	}
				// }
				// if (fod2) {
				// 	continue;
				// }
				if (Math.abs(this.shes[j].head.x - this.foods2[i].x) <= 12 + (this.shes[j].body.width >> 1) && Math.abs(this.shes[j].head.y - this.foods2[i].y) <= 12 + (this.shes[j].body.width >> 1)) {
					// console.log(this.tex++);
					// this.count2.push(this.foods2[i].name);
					// egret.Tween.get(this.foods2[i]).to({ x: this.shes[j].head.x, y: this.shes[j].head.y }, 300).call(() => {
					// this.count2.splice(this.count2.indexOf(this.foods2[i].name), 1)
					this.shes[j].jifen = this.shes[j]._jifen + 5;
					this.removeChild(this.foods2[i])
					this.foods2.splice(i, 1)

					// })

				}

			}


		}

	}

	/** 创建蛇 */
	public createshe(type: number, str1: string, str2: string, str3: string) {
		if (this.iskaishi) {
			var sh = new she(type, this)
			sh.playername = str1;
			sh.openid = str2;
			sh.headimgurl = str3;
			sh.adds();
			this.shes.push(sh);
			this.cundatax.push(p1.xx);
			this.cundatay.push(p1.yy);
			this.cundataz.push(false);
			this.jianzhi["" + type] = this.shes.length - 1
			if (str3 == "") {
				this.sheAI(sh)
			}
			// console.log("" + type);
			this.guiji.push([]);
			// console.log(this.jianzhi["" + type]);
		}
	}
	public close() {
		this.time.stop();
		var data = [];
		for (let i = 0; i < this.fenshus.length; i++) {
			data.push([this.fenshus[i]._id, this.fenshus[i].live, this.fenshus[i].kill, this.fenshus[i].maxjifen, this.fenshus[i].maxtime])
		}
		SocketManager.getInstance().send({ "gameover": 1, "data": data })
		this.removeEventListener(egret.Event.ENTER_FRAME, this.view, this);
		this.time.removeEventListener(egret.TimerEvent.TIMER, this.add, this);
		SocketManager.getInstance().p1x = null;
	}
	private isgame = false;
	private iskaishi = false;
	public time: egret.Timer;
	public tim: number = 0;
	public Maxtime: number = 180
	public daojishi = 45
	private add() {
		if (this.isgame) { this.tim++ };
		if (this.iskaishi) { this.daojishi-- };
		this.tetext.text = wj.Mytools.getstrtime(this.Maxtime - this.tim);
		this.tetext1.text = this.daojishi + "";// wj.Mytools.getstrtime(this.daojishi);
		if (this.tim >= this.Maxtime) {
			for (let i = 0; i < this.shes.length; i++) {
				this.shes[i].close();

			}
			this.isgame = false;
			this.close();
			wy.changeScene(p3, "", this.fenshus)
		}
		if (this.daojishi == 0) {
			this.daojishi = -100;
			this.tetext1.alpha = 0;
			this.startgame();
		}
	}
	private objVO:scoreVO = new models.score.ScoreInfoVO();
	private gundongbofang() {
		if (this.bestdata.length == 0) { return; }
		var headi = new wy.HeadImg(this.headi.width / 2, false);
		headi.x = this.headi.x + this.headi.width / 2;
		headi.y = this.headi.y + this.headi.height / 2;
		var index = -1
		this.addChild(headi);

		for (let i = 1; i <= 5; i++) {
			this["la" + i].alpha = 1;
			wj.Donghua.hengchushang(this["la" + i], 0, 1000);
			wj.Donghua.danchu(this["la" + i], 3800, 1000);
			// this["la" + i].text = this.bestdata[index][i]
		}
		// headi.source = this.bestdata[index][0]
		var num2 = egret.setInterval(() => {
			index++;
			for (let i = 1; i <= 5; i++) {
				this["la" + i].alpha = 1;
				wj.Donghua.hengchushang(this["la" + i], 0, 1000)
				wj.Donghua.danchu(this["la" + i], 3800, 1000)
			}
			if(index>8)
				index=0;
			this.objVO=this.bestdata[index];
			headi.source = this.objVO.icon;
			this.la1.text = this.dateArr[index];
			this.la2.text = this.titleArr[index];
			this.la3.text = this.objVO.name;
			this.la4.text = this.typeArr[index];
			if(index==2||index==5||index==8){
				this.la5.text = this.objVO.numVlue+"s"; 
			}else{
				this.la5.text = this.objVO.numVlue+""; 
			}

		}, this, 5000)
	}

	private startgame() {
	
		this.ewm.alpha=0;
		this.ewmx.alpha=0;
		this.tetext.alpha = 1;
		wy.Tools.removeFromParent(this.menc);
		this.isgame = true;
		for (let i = 1; i <= 8; i++) {
			this.cundatax[i - 1] = Math.random() * 418 * 2;
			this.cundatay[i - 1] = Math.random() * 171 * 2
			this.cundataz[i - 1] = false;
			if (this["dan" + i].alpha == 1) {
				this.createshe(i, "电脑" + i, "computer" + i, "")//"resource/assets/chong" + i + "/chong" + i + "_1.png"
			}
			for (let i = 0; i < this.shes.length; i++) {
				this.fenshus[i] = this.shes[i];
				this.currentShe[i] = this.shes[i];
			}
			this.addChild(this.tetext)
		}
		this.createfood();
		this.iskaishi = false;

	}
	private numb: number
	private menc: egret.Shape
	private kongzhi() {
		
		var maxtime = wj.Mytools.getdata("TSS_GameTime")
		var dao = wj.Mytools.getdata("TSS_Timedown")
		if (maxtime) {
			this.Maxtime = Number(maxtime);
		}
		if (dao) {
			this.daojishi = Number(dao);
		}
		this.menc = wj.Mytools.createshap(0, 0, 1920, 1080, 0, 0.3);
		this.addChildAt(this.menc, 1);
		// wj.Donghua.shangfeiru(this.menc,0,500)
		for (let i = 1; i <= 8; i++) {
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
	}

	public hide(): void {
		super.hide();
		this.btn.touchEnabled = false;
		this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);

	}

	private onTouchTap(e: egret.TouchEvent): void {
		switch (e.currentTarget) {
			case this.btnset:
				wy.changeView(pa);
				break;
			case this.btn:
			
				this.btn.touchEnabled = false;
				wj.Donghua.danchu(this.btn, 0, 1000)
				wy.Tools.center(this.title);
				wy.Tools.center(this.award);
				egret.Tween.get(this.title).to({ alpha: 0, scaleX: 3, scaleY: 3 }, 1000).call(() => {
					this.award.alpha=0;
					this.ewm.alpha=1;
					this.ewmx.alpha=1;
					this.kongzhi();
				})
				break;
			default:
				break;
		}
	}
	private ci: number[] = [];
	private xishu = 5;
	private guiji: number[][][] = [];
	public static xx: number = 418;
	public static yy: number = 171;
	private move(): void {
		for (let j = 0; j < this.shes.length; j++) {

			//计算变化率
			// this.guiji[j]=[];
			var stance: number = 5 * 4.5 / this.xishu;
			if (this.cundatax[j] >= 171 && this.cundatay[j] <= 418) {
				// console.log(this.cundatax[j]);
				// console.log(this.cundatay[j]);
				if (!this.shes[j].isbudong && this.isgame) {
					this.shes[j].head.x += Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
					this.shes[j].head.y += Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
				}
				this.ci[j] = 90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926
			} else
				if (this.cundatax[j] <= 171 && this.cundatay[j] <= 418) {
					if (!this.shes[j].isbudong && this.isgame) {
						this.shes[j].head.x -= Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
						this.shes[j].head.y -= Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
					}
					this.ci[j] = -90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926
				} else
					if (this.cundatax[j] <= 171 && this.cundatay[j] >= 121) {
						if (!this.shes[j].isbudong && this.isgame) {
							this.shes[j].head.x -= Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
							this.shes[j].head.y -= Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
						}
						this.ci[j] = -90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926
					} else
						if (this.cundatax[j] >= 171 && this.cundatay[j] >= 418) {
							if (!this.shes[j].isbudong && this.isgame) {
								this.shes[j].head.x += Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
								this.shes[j].head.y += Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
							}
							this.ci[j] = 90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926
						}

			this.shes[j].head.rotation = this.ci[j]
			this.shes[j].bodys[0].rotation = this.shes[j].head.rotation;
			this.shes[j].bodys[0].x = this.shes[j].head.x;
			this.shes[j].bodys[0].y = this.shes[j].head.y;
			this.shes[j].txchange();
			if (this.guiji[j].length >= (this.shes[j].bodys.length + 1) * this.xishu) {
				this.guiji[j].splice(this.guiji[j].length - 1, 1);
				this.guiji[j].splice(0, 0, [this.shes[j].head.x, this.shes[j].head.y, this.shes[j].head.rotation])
			} else {
				this.guiji[j].splice(0, 0, [this.shes[j].head.x, this.shes[j].head.y, this.shes[j].head.rotation]);
			}
			for (i = 0; i < this.shes[j].bodys.length; i++) {
				if (this.guiji[j][(i) * this.xishu - 1]) this.shes[j].bodys[i].rotation = this.guiji[j][(i) * this.xishu - 1][2]
				if (this.guiji[j][(i) * this.xishu - 1]) this.shes[j].bodys[i].x = this.guiji[j][(i) * this.xishu - 1][0];
				if (this.guiji[j][(i) * this.xishu - 1]) this.shes[j].bodys[i].y = this.guiji[j][(i) * this.xishu - 1][1];
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
			var i: number;
			if (this.cundataz[j]) {
				if (this.cundatax[j] >= 171 && this.cundatay[j] <= 418) {
					if (!this.shes[j].isbudong && this.isgame) {
						this.shes[j].head.x += Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
						this.shes[j].head.y += Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
					}
					this.ci[j] = 90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926
				} else
					if (this.cundatax[j] <= 171 && this.cundatay[j] <= 418) {
						if (!this.shes[j].isbudong && this.isgame) {
							this.shes[j].head.x -= Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
							this.shes[j].head.y -= Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
						}
						this.ci[j] = -90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926
					} else
						if (this.cundatax[j] <= 171 && this.cundatay[j] >= 418) {
							if (!this.shes[j].isbudong && this.isgame) {
								this.shes[j].head.x -= Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
								this.shes[j].head.y -= Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
							}
							this.ci[j] = -90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926
						} else
							if (this.cundatax[j] >= 171 && this.cundatay[j] >= 418) {
								if (!this.shes[j].isbudong && this.isgame) {
									this.shes[j].head.x += Math.cos(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
									this.shes[j].head.y += Math.sin(Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171))) * stance;
								}
								this.ci[j] = 90 + Math.atan((this.cundatay[j] - 418) / (this.cundatax[j] - 171)) * 180 / 3.1415926
							}

				this.shes[j].head.rotation = this.ci[j]
				this.shes[j].bodys[0].rotation = this.shes[j].head.rotation;
				this.shes[j].bodys[0].x = this.shes[j].head.x;
				this.shes[j].bodys[0].y = this.shes[j].head.y;
				if (this.guiji[j].length >= (this.shes[j].bodys.length + 1) * this.xishu) {
					this.guiji[j].splice(this.guiji[j].length - 1, 1);
					this.guiji[j].splice(0, 0, [this.shes[j].head.x, this.shes[j].head.y, this.shes[j].head.rotation])
				} else {
					this.guiji[j].splice(0, 0, [this.shes[j].head.x, this.shes[j].head.y, this.shes[j].head.rotation]);
				}
				for (i = 0; i < this.shes[j].bodys.length; i++) {
					if (this.guiji[j][(i) * this.xishu - 1]) this.shes[j].bodys[i].rotation = this.guiji[j][(i) * this.xishu - 1][2]
					if (this.guiji[j][(i) * this.xishu - 1]) this.shes[j].bodys[i].x = this.guiji[j][(i) * this.xishu - 1][0];
					if (this.guiji[j][(i) * this.xishu - 1]) this.shes[j].bodys[i].y = this.guiji[j][(i) * this.xishu - 1][1];
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
				var i: number;
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
	}
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
	private fenshus: she[] = [];
	/**当前排名的蛇
	*/
	private currentShe: she[] = []
	/**图片半径*/
	public r = 20;
	//数据更新
	public datachangging() {
		// var fenshus=[];

		this.fenshus.sort(function (x, y) {
			if (x.maxjifen < y.maxjifen) {
				return 1
			} else if (x.maxjifen > y.maxjifen) {
				return -1
			} else {
				return 0
			}
		})
		for (let i = 0; i < this.fenshus.length; i++) {
			wy.Tools.removeFromParent(this.fenshus[i].headimg)
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
				return 1
			} else if (x._jifen > y._jifen) {
				return -1
			} else {
				return 0
			}
		})
		for (let i = 0; i < this.currentShe.length; i++) {
			this["l" + (i + 4)].text = (i + 1) + "：" + wj.Mytools.zishuguochang(this.currentShe[i].playername, 6) + "  " + this.currentShe[i]._jifen;
		}

	}
	// 检测碰撞

	private pengzhuang() {
		for (let i = 0; i < this.shes.length; i++) {
			if (this.shes[i].isyouli) {
				// 碰墙
				if (this.shes[i].head.y - (this.shes[i].body.width >> 1) <= 45) {
					this.cundatay[i] = 640
				} else if (this.shes[i].head.y + (this.shes[i].body.width >> 1) >= this.stage.stageHeight - 45) {
					this.cundatay[i] = 0
				} else
					if (this.shes[i].head.x - (this.shes[i].body.width >> 1) <= 45) {
						this.cundatax[i] = 1036
					} else if (this.shes[i].head.x + (this.shes[i].body.width >> 1) >= 1666) {
						this.cundatax[i] = 0
					}



				continue;
			};
			// 碰墙
			if (this.shes[i].head.y - (this.shes[i].body.width >> 1) <= 45) {
				if (this.shes[i]._headimgurl == "") {
					this.cundatay[i] = 640
				} else {
					this.shes[i].die();
				}


			} else if (this.shes[i].head.y + (this.shes[i].body.width >> 2) >= this.stage.stageHeight - 45) {
				if (this.shes[i]._headimgurl == "") {
					this.cundatay[i] = 0
				} else {
					this.shes[i].die();
				}


			} else if (this.shes[i].head.x - (this.shes[i].body.width >> 1) <= 45) {

				if (this.shes[i]._headimgurl == "") {
					this.cundatax[i] = 1036
				} else {
					this.shes[i].die();
				}

			} else if (this.shes[i].head.x + (this.shes[i].body.width >> 1) >= 1666) {

				if (this.shes[i]._headimgurl == "") {
					this.cundatax[i] = 0
				} else {
					this.shes[i].die();
				}
			}
			// 碰其他蛇

			for (let j = 0; j < this.shes.length; j++) {
				if (i == j) { continue; }
				if (this.shes[j].isyouli) { continue; }
				for (let z = 0; z < this.shes[j].bodys.length; z++) {
					var bo1 = Math.abs(this.shes[i].head.y - this.shes[j].bodys[z].y) < (this.shes[i].body.height >> 1) + (this.shes[j].bodys[z].width >> 1)
					var bo2 = Math.abs(this.shes[i].head.x - this.shes[j].bodys[z].x) < (this.shes[i].body.width >> 1) + (this.shes[j].bodys[z].width >> 1)
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
	}
}

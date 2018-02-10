/**
 *
 *@author
 *
 */
class p3 extends p3UI {
	constructor() {
		super();
	}

	protected createChildren(): void {
		super.createChildren();
	}

	public show(data?): void {
		super.show(data);
		var shes: she[] = data
		wj.Mytools.zhongxia(this.chong11);
		wj.Mytools.zhongxia(this.chong21);
		wj.Mytools.zhongxia(this.chong31);
		var tim = new Date().getTime();
		this.l1.bold
		for (let i = 0; i < shes.length; i++) {
			Net.send(this, () => {}, shes[i].maxjifen + "", shes[i].kill + "", shes[i].live + "", shes[i].maxtime + "", tim + "", shes[i].openid, shes[i].playername, shes[i].headimgurl);
			if (i <= 2) {
				this["l" + (i + 1) + ""].text = `${shes[i].playername}`
				this["l" + (i + 1) + "" + (i + 1)].text = `${shes[i].maxjifen}`;
					this["l" + (i + 1) + "" + (i + 1)].y +=10 ;
				this["head" + (i + 1)].alpha = 0;
				shes[i].headimg.x =this["head" + (i + 1)].x+this["head" + (i + 1)].width/2;
				shes[i].headimg.y =this["head" + (i + 1)].y+this["head" + (i + 1)].height/2;
				shes[i].headimg.scaleX=shes[i].headimg.scaleY=shes[i].headimg.scaleY*(this["head" + (i + 1)].width/2/20)
				this.addChild(shes[i].headimg)
				var ds = new egret.Bitmap(RES.getRes(`chongzi${shes[i]._id}_png`));
				wj.Mytools.zhongxia(ds);
				ds.x = this[`chong${i + 1}1`].x; 
				ds.y = this[`chong${i + 1}1`].y;
				this[`chong${i + 1}1`].alpha = 0;
				this.addChild(ds);
			}
		}

		this.inint();
		this.donghua();
		this.btn1.touchEnabled = true;
		this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		this.btn2.touchEnabled = true;
		this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);


	}
	private inint() {

	}
	private num1: number;
	private donghua() {
		wy.Tools.center(this.caidai);
		this.num1 = egret.setInterval(() => {
			this.caidai.scaleX = (-1) * this.caidai.scaleX
		}, this, 500);
		wj.Donghua.shansuo(this.diandian, 0, 300);
		wj.Donghua.shansuo2(this.guang11, 0, 500);
		wj.Donghua.shansuo2(this.guang21, 100, 500);
		wj.Donghua.shansuo2(this.guang31, 200, 500);
	}
	public getstr(num: number): string {
		var str = ((num / 60) >> 0) + "分" + (num % 60) + "秒"
		return str
	}
	public hide(): void {
		super.hide();


		this.btn1.touchEnabled = false;
		this.btn1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		this.btn2.touchEnabled = false;
		this.btn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);

	}

	private onTouchTap(e: egret.TouchEvent): void {
		switch (e.currentTarget) {

			case this.btn1:
				wy.changeScene(p1);
				break;
			case this.btn2:
				wy.changeScene(p1, "", 1)
				break;
			default:
				break;
		}
	}
}
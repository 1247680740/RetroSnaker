/**
 *
 *@author
 *
 */
class OnePeople extends OnePeopleUI {
	constructor() {
		super();
	}

	protected createChildren(): void {
		super.createChildren();
	}
	public getstr(num: number): string {
		var str = ((num / 60) >> 0) + "分" + (num % 60) + "秒"
		return str
	}
	public show(data?): void {
		super.show(data);
		wj.Donghua.shansuo2(this.shan1, 0, 100);
		wj.Donghua.shansuo2(this.shan2, 0, 220);
		wj.Donghua.lianxu([this.xin1, this.xin2, this.xin3], 0, 120);
		wj.Donghua.shansuo(this.guang1, 1000, 300);
		this.chongzi.alpha = 0;
		wj.Mytools.zhongxia(this.chongzi);
		this.addChild(kongzhi.cunshe);
		
		kongzhi.cunshe.x = this.chongzi.x;
		kongzhi.cunshe.y = this.chongzi.y;
		kongzhi.cunshe.y -=kongzhi.cunshe.height>>1
		this.lv.text = "第" + data[0] + "名"
		this.lv.bold = true;
		this.l1.text = "累计复活次数："+data[1][1];
		this.l2.text ="总击杀次数："+ data[1][2];
		this.l3.text ="最大分数："+ data[1][3];
		this.l4.text = `最大存活时间:${this.getstr(Number(data[1][4]))}`
		// this.bg.touchEnabled = true;
		// this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		// this.l1.touchEnabled = true;
		// this.l1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		// this.l2.touchEnabled = true;
		// this.l2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		// this.l3.touchEnabled = true;
		// this.l3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		// this.l4.touchEnabled = true;
		// this.l4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		// this.guang2.touchEnabled = true;
		// this.guang2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		// this.shan2.touchEnabled = true;
		// this.shan2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		// this.xin2.touchEnabled = true;
		// this.xin2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		// this.xin3.touchEnabled = true;
		// this.xin3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		// this.xin1.touchEnabled = true;
		// this.xin1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		// this.chongzi.touchEnabled = true;
		// this.chongzi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		// this.guang1.touchEnabled = true;
		// this.guang1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		// this.shan1.touchEnabled = true;
		// this.shan1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);

		// wy.Tween.do(this);
	}

	public hide(): void {
		super.hide();

		// this.bg.touchEnabled = false;
		// this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// this.l1.touchEnabled = false;
		// this.l1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// this.l2.touchEnabled = false;
		// this.l2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// this.l3.touchEnabled = false;
		// this.l3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// this.l4.touchEnabled = false;
		// this.l4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// this.guang2.touchEnabled = false;
		// this.guang2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// this.shan2.touchEnabled = false;
		// this.shan2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// this.xin2.touchEnabled = false;
		// this.xin2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// this.xin3.touchEnabled = false;
		// this.xin3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// this.xin1.touchEnabled = false;
		// this.xin1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// this.chongzi.touchEnabled = false;
		// this.chongzi.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// this.guang1.touchEnabled = false;
		// this.guang1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		// this.shan1.touchEnabled = false;
		// this.shan1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	}

	private onTouchTap(e: egret.TouchEvent): void {
		switch (e.currentTarget) {
			case this.bg:

				break;
			case this.l1:

				break;
			case this.l2:

				break;
			case this.l3:

				break;
			case this.l4:

				break;
			case this.guang2:

				break;
			case this.shan2:

				break;
			case this.xin2:

				break;
			case this.xin3:

				break;
			case this.xin1:

				break;
			case this.chongzi:

				break;
			case this.guang1:

				break;
			case this.shan1:

				break;
			default:
				break;
		}
	}
}
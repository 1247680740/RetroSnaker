/**
 *
 *@author
 *
 */
class pa extends paUI {
	constructor() {
		super();
	}

	protected createChildren():void {
		super.createChildren();
	}

	public show(data?):void {
		super.show(data);
		this.l1.type=egret.TextFieldType.INPUT;
		this.l2.type=egret.TextFieldType.INPUT;
		this.l1.verticalAlign="middle";
		this.l2.verticalAlign="middle";
		this.l1.restrict="0-9";
		this.l2.restrict="0-9";
		this.l1.text="45";
		this.l2.text="180"
		this.bg.touchEnabled = true;
		this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.l1.touchEnabled = true;
		this.l1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.l2.touchEnabled = true;
		this.l2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.btn1.touchEnabled = true;
		this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.btn2.touchEnabled = true;
		this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);

		wy.Tween.do(this);
	}

	public hide():void {
		super.hide();

		this.bg.touchEnabled = false;
		this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.l1.touchEnabled = false;
		this.l1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.l2.touchEnabled = false;
		this.l2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.btn1.touchEnabled = false;
		this.btn1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
		this.btn2.touchEnabled = false;
		this.btn2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
	}

	private onTouchTap(e:egret.TouchEvent):void {
		switch(e.currentTarget) {
			case this.bg:
			
				break;
			case this.l1:
			
				break;
			case this.l2:
			
				break;
			case this.btn1:
			wj.Mytools.savedata("TSS_Timedown",this.l1.text);
			wj.Mytools.savedata("TSS_GameTime",this.l2.text);
			wy.hideView();
				break;
			case this.btn2:
			wy.hideView();
				break;
			default:
				break;
		}
	}
}
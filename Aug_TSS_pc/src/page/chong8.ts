/**
 *
 *@author
 *
 */
class chong8 extends chong8UI {
	constructor() {
		super();
	}

	protected createChildren():void {
		super.createChildren();
	}

	public show(data?):void {
		super.show(data);


		wy.Tween.do(this);
	}

	public hide():void {
		super.hide();

	}

	private onTouchTap(e:egret.TouchEvent):void {
		switch(e.currentTarget) {
			default:
				break;
		}
	}
}
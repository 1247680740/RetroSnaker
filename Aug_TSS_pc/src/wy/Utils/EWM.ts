module wy {

    /**
     * 二维码 通用类
	 * 
	 * @example 
	 * <pre>
	 *    wy.EWM.init('http://wap.i-h5.cn/ljd_game/Aug_rjb/resource/assets/ewm.png');
     *    wy.EWM.set(300,300,200,200);
     *    wy.EWM.show();
	 * </pre>
	 * 
	 * @version 0.0.3
	 * @platform egret3.0.3
	 * 
     */
	export class EWM {

		/**
		 * 初始化二维码 
		 * @param src 二维码地址
		 * 
		 * @version 0.0.3
		 * @platform egret3.0.3
		 */
		public static init(src: string): void {
			this.myImg = document.createElement("img");
			this.myImg.src = src;
		}

		/**
		 * 设置二维码的坐标和长宽
		 * 
		 * @param x
		 * @param y
		 * @param w
		 * @param h
		 * 
		 * @version 0.0.3
		 * @platform egret3.0.3
		 */
		public static set(x: number, y: number, w: number, h: number):void {
			var width = w / wy.GameInterface.stage.stageWidth * 100;
			var heigth = h / wy.GameInterface.stage.stageHeight * 100;
			var left = x / wy.GameInterface.stage.stageWidth * 100;
			var top = y / wy.GameInterface.stage.stageHeight * 100;

			this.myImg.style.width = width + "%";
			this.myImg.style.height = heigth + "%";
			this.myImg.style.position = "absolute";
			this.myImg.style.left = left + "%";
			this.myImg.style.top = top + "%";
		}

		/**
		 * 隐藏二维码
		 * 
		 * @version 0.0.3
		 * @platform egret3.0.3
		 */
		public static hide():void {
			if(this.myImg && this.myImg.parentNode) {
				this.myImg.parentNode.removeChild(this.myImg);
			}
		}

		/**
		 * 显示二维码
		 * 
		 * @version 0.0.3
		 * @platform egret3.0.3
		 */
		public static show():void {
			var divMain = document.getElementById("gameID");
			divMain.appendChild(this.myImg);
		}

		/**
		 * 二维码
		 * 
		 * @version 0.0.3
		 * @platform egret3.0.3
		 */
		private static myImg: HTMLImageElement;
	}

}
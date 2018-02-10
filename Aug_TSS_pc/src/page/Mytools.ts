// TypeScript file
module wj {
    export class Mytools {
          /*保存本地数据*/
        public static savedata(str1:string,str2:string){
            localStorage.setItem(str1,str2)
        }
        /*取出本地数据*/
        public static getdata(str1:string):string{
            return  localStorage.getItem(str1)
        }
        /*关闭窗口调用的方法*/
        public static closewindow(func:Function){
            window.onbeforeunload=function () {
                     func();
            }
           console.log(window.orientation=90);
            
        }
        /**正则电话*/

        public static checkMobile(strMobile): boolean {
            var regu = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
            if (regu.test(strMobile)) {
                return true;
            }
            else {
                return false;
            }
        }
        /**检测身份证 */
        public static checkShengfenzheng(card): boolean {
            // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (reg.test(card)) {
                return true;
            }
            else {
                return false;
            }
        }
        /**正则中文*/
        public static checkzhongwen(str): boolean {
            var re = /[^\u4e00-\u9fa5]/;
            if (re.test(str)) return false;
            return true;
        }
        /**正则英文*/
        public static checkyingwen(str): boolean {
            var re = /[^a-zA-Z]/;
            if (re.test(str)) return false;
            return true;
        }
        /**正则数字*/
        public static checkshuzi(str): boolean {
            var re = /^[0-9]*$/;
            if (re.test(str)) return true;
            return false;
        }
        /**检测字节数*/
        public static checkzijie(str: string): number {
            if (!str) { str = "" }
            var a: number = 0;
            for (let i = 0; i < str.length; i++) {
                if (wj.Mytools.checkzhongwen(str.charAt(i))) {
                    a += 2;
                } else { a++ }
            }
            return a;
        }
        /**检测邮箱*/
        public static checkYouxiang(str): boolean {
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (filter.test(str)) return true;
            else {

                return false;
            }
        }
           /**时间转化未时间字符串(分秒)*/
        public static getstrtime(time: number): string {
            var fen=time/60>>0;
            var miao=time%60;
            var str1:string;
            var str2:string;
            if(fen<=9){str1="0"+fen}else{str1=""+fen};
            if(miao<=9){str2="0"+miao}else{str2=""+miao};
            return str1+":"+str2;
        }
        /**手指动的点集*/
        public static _dianji: egret.Point[] = [];
        /**手指动的点集分段长度*/
        public static _leng: number[] = [];
        /**手指划线起点*/
        public static _qidian: egret.Point = new egret.Point(0, 0);
        /**手指划线*/
        public static huaxian(thisobj: any, color: number = 0, w: number = 4, quyu: any = new egret.Rectangle(0, 0, 640, 1036)
        ): egret.DisplayObjectContainer {
            wj.Mytools._dianji = [];
            wj.Mytools._leng = [];
            // var contain1:egret.DisplayObjectContainer=new egret.DisplayObjectContainer();
            var contain: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
            //  contain.x=quyu.x;
            //  contain.y=quyu.y;
            contain.width = quyu.width;
            contain.height = quyu.height;
            var line: egret.Shape;
            thisobj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e: egret.TouchEvent) => {
                thisobj.dispatchEventWith("ssss");
                var dian: egret.Point = new egret.Point(e.stageX, e.stageY);
                wj.Mytools._dianji.push(dian);
                line = new egret.Shape();
                wj.Mytools._qidian.x = e.stageX;
                wj.Mytools._qidian.y = e.stageY;
                line.graphics.lineStyle(w, color);
                line.graphics.moveTo(e.stageX, e.stageY);
                line.x -= contain.x;
                line.y -= contain.y;
                contain.addChild(line);
                contain.mask = quyu;
            }, this);

            thisobj.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e: egret.TouchEvent) => {
                if (line) { line.graphics.lineTo(e.stageX, e.stageY); } else {
                    thisobj.dispatchEventWith("ssss");
                    var dian: egret.Point = new egret.Point(e.stageX, e.stageY);
                    wj.Mytools._dianji.push(dian);
                    line = new egret.Shape();
                    wj.Mytools._qidian.x = e.stageX;
                    wj.Mytools._qidian.y = e.stageY;
                    var dian: egret.Point = new egret.Point(e.stageX, e.stageY);
                    wj.Mytools._dianji.push(dian);
                    line.graphics.lineStyle(w, color);
                    line.graphics.moveTo(e.stageX, e.stageY);
                    line.x -= contain.x;
                    line.y -= contain.y;
                    contain.addChild(line);
                    contain.mask = quyu;
                }
            }, this);
            thisobj.addEventListener(egret.TouchEvent.TOUCH_END, (e: egret.TouchEvent) => {
                if (line) line.graphics.endFill();
                wj.Mytools._leng.push(wj.Mytools._dianji.length);
                return line;
            }, this);
            return contain;
        }
        /**自制帧动画元素
     */
        public static dong(p1: egret.Bitmap[], num: number = 4, bo: boolean = true, fun?: Function): number {
            for (let i = 0; i < p1.length; i++) {
                p1[i].alpha = 0;
            }
            p1[0].alpha = 1;
            var index = 0;
            var s = egret.setInterval(() => {
                for (let i = 0; i < p1.length; i++) {
                    p1[i].alpha = 0;
                    if (i == index) { p1[i].alpha = 1; }
                }
                index++
                if (bo) { index = index % p1.length; }
                else {
                    if (index == p1.length) {
                        if (fun) fun();
                        egret.clearInterval(s);
                    }
                }

            }, this, 1000 / num)
            return s;
        }
        /**自制帧动画元素
        */
        public static tu: egret.Bitmap = null;
        /**自制帧动画
        */
        public static creatdonghua(arr: string[], objthis: any, zheng: number = 24, time: number = 0): number {
            var max = arr.length;
            var index = -1;
            if (max == 0) { return null; }
            wj.Mytools.tu = wj.Mytools.createBitmapByName(arr[0]);
            objthis.addChild(wj.Mytools.tu);
            egret.setTimeout(() => {
                var s = egret.setInterval(() => {
                    index++;
                    wj.Mytools.tu.texture = RES.getRes(arr[index]);
                    if (index == max - 1) {
                        index = -1
                    } return s;
                }, objthis, 1000 / zheng);

            }, objthis, time);


        }
        /**自制帧动画元素2
       */
        public static tu2: egret.Bitmap = null;
        /**自制帧动画2
        */
        public static creatdonghua2(arr: string[], objthis: any, zheng: number = 24, time: number = 0): number {
            var max = arr.length;
            var index = -1;
            if (max == 0) { return null; }
            wj.Mytools.tu2 = wj.Mytools.createBitmapByName(arr[0]);
            objthis.addChild(wj.Mytools.tu2);
            egret.setTimeout(() => {
                var ss = egret.setInterval(() => {
                    index++;
                    wj.Mytools.tu2.texture = RES.getRes(arr[index]);
                    if (index == max - 1) {
                        egret.clearInterval(ss);
                    }
                }, objthis, 1000 / zheng);
            }, objthis, time);
        }
        /**加载视频
        */
        public static createvideo(thisobj: any, p1: string, url: string, onLoad: Function, onLoadErr: Function, x: number = 0, y: number = 0, w: number = 640, h: number = 320): egret.Video {

            var video = new egret.Video();
            video.x = x;                     //设置视频坐标x
            video.y = y;                     //设置视频坐标y
            video.width = w;                 //设置视频宽
            video.height = h;                //设置视频高
            video.fullscreen = false;        //设置是否全屏（暂不支持移动设备）
            video.poster = p1;               //设置loding图
            video.load(url);
            // addChild(this.video);         //将视频添加到舞台
            //监听视频加载完成
            video.once(egret.Event.COMPLETE, onLoad, this);
            //监听视频加载失败
            video.once(egret.IOErrorEvent.IO_ERROR, onLoadErr, this);
            return video;
        }
        /**文本创建
         * *tybe    "0"普通文本 "1"可输入文本 
        *@param tybe    "0"普通文本 "1"可输入文本 
        *
        *
        *
        */
        public static createTextField(tybe: number = 0, width?: number, height?: number, x?: number, y?: number, size?: number): egret.TextField {
            var te = new egret.TextField();
            if (width) { te.width = width; }
            if (height) { te.height = height; }
            if (x) { te.x = x; }
            if (y) { te.y = y; }
            if (size) { te.size = size } else { te.size = 28 }
            if (tybe == 1) { te.type = egret.TextFieldType.INPUT }
            te.textAlign = "center"
            return te;
        }
        /**创建受限输入式文本
         **type 0:只输中文 1：只输数字，2：只输英文，3:只输英文加数字；4电话号码文本
         *@param te:是否需要新建文本
        */
        public static createReField(thisObj: any, type: number = 1, te?: egret.TextField): egret.TextField {
            if (!te) {
                te = wj.Mytools.createTextField(1)
            }
            te.addEventListener(egret.Event.CHANGE, (e: egret.Event) => {
                switch (type) {
                    case 0:
                        te.restrict = "\u4e00-\u9fa5"

                        break;
                    case 1:
                        te.restrict = "0-9"
                        te.inputType = egret.TextFieldInputType.TEL
                        break;
                    case 2:
                        te.restrict = "a-zA-z_"
                        break;
                    case 3:

                        te.restrict = "a-zA-z_0-9"
                        break;
                    case 4:
                        te.restrict = "0-9"
                        te.inputType = egret.TextFieldInputType.TEL
                        te.maxChars = 11;
                        break;
                }
            }, thisObj)
            return te;
        }
        // /**文本设置字体（注意，要手动建一个存放字体的文件夹名字为：“fonts”放在项目目录下）
        // */

        // public static loadfont(text:egret.TextField,font1:string):string{
        //     egret.registerFontMapping("font1","fonts/"+font1)
        //     text.fontFamily="font1"
        //     return "font1";
        // }
        /**基本属性相同传递（给obj1复制obj2的基本属性）
        */

        public static like(obj1, obj2) {
            obj1.x = obj2.x;
            obj1.y = obj2.y;
            obj1.width = obj2.width;
            obj1.height = obj2.height;
        }
        /**交换位置
        */
        public static jiaohuanweizi(obj1, obj2) {
            var a = obj1.x;
            var b = obj1.y;
            obj1.x = obj2.x;
            obj1.y = obj2.y;
            obj2.x = a;
            obj2.y = b;
        }
        /**压缩纹理并上传
         * private compFunc(e) {	
                    var object = JSON.parse(e.target.data);
                    if (Number(object.error) == 0) {
                        if (object.hasOwnProperty('data')) {
                            if (object.data.hasOwnProperty('url')) {
                                object.data.url;//服务器图片地址链接
                            }
                        }
                    }
                }
            */
        public static yasuoshangchuang(comFunc: Function, Objthis: any, te: egret.Texture, width: number = 100, height: number = 100) {
            wy.Tools.upload_base64(wj.Mytools.yasuotupian(Objthis, te, width, height).toDataURL("image/png"), comFunc, Objthis)

        }
        /**压缩纹理
        */

        public static yasuotupian(Objthis: any, te: egret.Texture, width?: number, height?: number):
            egret.Texture {

            var t = new egret.Bitmap(te);
            t.width = 100;
            if (width) { t.width = width; }
            t.height = 100;
            if (height) { t.height = height; }
            Objthis.addChild(t);
            var pageTexture = new egret.RenderTexture();
            pageTexture.drawToTexture(Objthis, new egret.Rectangle(0, 0, t.width, t.height));

            Objthis.removeChild(t)
            return pageTexture;
        }
        /**创建可滑动文本框
         */
        public static createScolltext(text: egret.TextField, speed: number = 30) {
            text.multiline = true;
            var shape = wj.Mytools.createshap(0, 0, text.width, text.height, 0xff0000, 0)
            shape.x = text.x;
            shape.y = text.y;
            text.parent.addChild(shape);
            var s: number = -1
            var juli: number = 0
            shape.touchEnabled = true;
            text.parent.addChildAt(shape, text.parent.getChildIndex(text));
            shape.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e: egret.TouchEvent) => {
                if (s == -1) { s = e.stageY } else {
                    if (e.stageY > s) {
                        juli += e.stageY - s
                        if (juli >= speed) {
                            juli = juli - speed;
                            text.scrollV -= 1
                            if (text.scrollV == 0) {
                                text.scrollV = 1
                            }
                        }
                    } else {

                        juli += s - e.stageY


                        if (juli >= speed) {
                            juli = juli - speed;
                            if (text.scrollV == text.maxScrollV) {
                            } else (text.scrollV += 1)
                        }

                    }
                    s = e.stageY;
                }
            }, text.parent);
            shape.parent.addEventListener(egret.TouchEvent.TOUCH_END, (e: egret.TouchEvent) => {
                s = -1;
            }, text.parent)
        }
        /**创建透明按钮
         */
        public static GetBtn1(w: number, h: number, cx: number, cy: number, pa?: any): egret.Sprite {
            var spr1: egret.Sprite = new egret.Sprite();
            spr1.graphics.beginFill(0xff0000, 0);
            spr1.graphics.drawRect(0, 0, w, h);
            spr1.graphics.endFill();
            spr1.width = w;
            spr1.height = h;
            spr1.x = cx;
            spr1.y = cy;
            spr1.touchEnabled = true;
            if (pa) {
                pa.addChild(spr1);
            }
            return spr1;
        }
        /**设置位置
      */
        public static setweiz(obj, x?: number, y?: number, w?: number, h?: number) {
            obj.x = x;
            obj.y = y;
            obj.width = w;
            obj.height = h;

        }
        public static _isonce: boolean = true;
        /**只执行一次
    */
        public static oneAction(func: Function, objthis: any) {
            if (this._isonce) {
                objthis.func();
                this._isonce = false;
            }

        }
        /**设置锚点
       */
        public static maodian(p: egret.DisplayObject, x: number, y: number) {
            
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = x - p.x;
            p.anchorOffsetY = y - p.y;
            p.x += x - p.x;
            p.y += y - p.y;
        }
        /**设置右上位置锚点
        */
        public static youshang(p: egret.DisplayObject) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = p.width ;
			p.anchorOffsetY = 0;
			p.x += p.anchorOffsetX;
			p.y += p.anchorOffsetY;
        }
        /**设置右中位置锚点
       */
        public static youzhong(p: egret.DisplayObject) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = p.width;
            p.anchorOffsetY = p.height >> 1;
            p.x += p.width;
            p.y += p.height >> 1;
        }
        /**设置右下位置锚点
     */
        public static youxia(p: egret.DisplayObject) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = p.width;
            p.anchorOffsetY = p.height;
            p.x += p.width;
            p.y += p.height;
        }
        /**设置中上位置锚点
     */
        public static zhongshang(p: egret.DisplayObject) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = p.width >> 1;
            p.x += p.width >> 1;
        }
        /**设置中下位置锚点
       */
        public static zhongxia(p: egret.DisplayObject) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = p.width >> 1;
            p.anchorOffsetY = p.height;
            p.x += p.width >> 1;
            p.y += p.height;
        }
        /**设置左中位置锚点
     */
        public static zuozhong(p: egret.DisplayObject) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;

            p.anchorOffsetY = p.height >> 1;

            p.y += p.height >> 1;
        }
        /**设置左下位置锚点
     */
        public static zuoxia(p: egret.DisplayObject) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;

            p.anchorOffsetY = p.height;

            p.y += p.height;
        }
        /**如果字节过长，切除多余的字节
       */
        public static cut(str: string, num: number): string {

            var strin: string = ""
            if (wj.Mytools.checkzijie(str) > num) {
                strin = str.substr(0, str.length - 1);
                return this.cut(strin, num)
            } else { return str }
        }
        /**设置过长的字节用...代替后面的字
      */
        public static zishuguochang(str: string, num: number): string {
            var ii: string;

            if (wj.Mytools.checkzijie(str) <= num) {
                ii = str
            } else { ii = this.cut(str, num) + "..." }
            return ii;
        }
        /**用名字创建图片
      */
        public static createBitmapByName(name: string): egret.Bitmap {
            var result: egret.Bitmap = new egret.Bitmap();
            var texture: egret.Texture = RES.getRes(name);
            result.texture = texture;
            return result;
        }
        /**正方形图形
         */
        public static createshap(x: number, y: number, w: number, h: number, color: number = 0xffffff, alph: number = 1): egret.Shape {
            var a = new egret.Shape();
            a.graphics.beginFill(color, alph);
            a.graphics.drawRect(0, 0, w, h);
            a.graphics.endFill();
            a.x=x;
            a.y=y;
            return a;
        }
        /**正方形图形带圆角
         */
        public static createshap1(x: number, y: number, w: number, h: number, color: number = 0xffffff, alph: number = 1, r = 10): egret.Shape {
            var a = new egret.Shape();
            a.graphics.beginFill(color, alph);
            a.graphics.drawRoundRect(x, y, w, h, r, r);
            a.graphics.endFill();
            return a;
        }
        /**圆形图形
         */
        public static createshap2(x: number, y: number, r: number, color: number = 0xffffff, alph: number = 1): egret.Shape {
            var a = new egret.Shape();
            a.graphics.beginFill(color, alph);
            a.graphics.drawCircle(x, y, r);
            a.graphics.endFill();
            return a;
        }
    }

    export class Donghua {
        constructor() { }
        /**字慢慢显出来，不是整体的type:1：横向，2：竖向。默认2
           */
        public static jianxian(bmp: egret.DisplayObject, time: number = 1000, sudu = 2000, type: number = 2) {
            if (type == 2) {
                var num = 20;
                var mas = new egret.Sprite;
                var ma = wj.Mytools.createshap(0, -num, bmp.width, bmp.height);
                mas.addChild(ma);
                for (let i = 1; i <= 20; i++) {
                    var s = wj.Mytools.createshap(0, bmp.height - num / 20 * i, bmp.width, num / 20, 0, i / 20);
                    mas.addChild(s);
                }
                mas.x = bmp.x;
                mas.y = bmp.y - bmp.height;
                bmp.parent.addChild(mas)
                bmp.mask = mas;
                egret.setTimeout(() => { egret.Tween.get(mas).to({ y: bmp.y + num }, sudu) }, bmp.parent.addChild(mas), time)
            }
            else {
                var num = 20;
                var mas = new egret.Sprite;
                var ma = wj.Mytools.createshap(0 - num, 0, bmp.width, bmp.height);
                mas.addChild(ma);
                for (let i = 1; i <= 20; i++) {
                    var s = wj.Mytools.createshap(bmp.width - num / 20 * i, 0, num / 20, bmp.height, 0, i / 20);
                    mas.addChild(s);
                }
                mas.x = bmp.x - bmp.width;
                mas.y = bmp.y;
                bmp.parent.addChild(mas)
                bmp.mask = mas;
                egret.setTimeout(() => { egret.Tween.get(mas).to({ x: bmp.x + num }, sudu).call(() => { bmp.parent.removeChild(mas) }) }, bmp.parent.addChild(mas), time)
            }
        }
        /**左右摇摆动画
     */
        public static yaobai(bmp: egret.Bitmap, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            egret.setTimeout(() => {
                wj.Mytools.zhongxia(bmp);
                egret.Tween.get(bmp, { loop: true }).to({ skewX: -3 }, sudu).to({ skewX: 3 }, 2 * sudu).to({ skewX: 0 }, sudu);
            }, thisobj, time)
        }
        /**右移场景动画
      */
        public static youyi(bmp: egret.Bitmap, time: number = 1000, x: number): number {
            var thisobj = bmp.parent
            var bmp1 = new egret.Bitmap(bmp.texture);
            wj.Mytools.like(bmp1, bmp);
            bmp1.x = -bmp.width;
            // bmp1.scaleX=-1;
            thisobj.addChildAt(bmp1, thisobj.getChildIndex(bmp));
            egret.setTimeout(() => {
                var s = egret.setInterval(() => {

                    bmp.x += x;
                    bmp1.x += x;
                    if (bmp.x >= bmp.width) {
                        bmp.x = -bmp.width
                    }
                    if (bmp1.x >= bmp1.width) {
                        bmp1.x = -bmp1.width
                    }


                }, thisobj, 1000 / 24)
                return s;
            }, thisobj, time)
            return -1;
        }
        /**左下方45°移动
     */
        public static liuxin(bmp: egret.Bitmap, time: number = 1000, sudu: number = 10000) {
            var thisobj = bmp.parent
            var ss = bmp.width;
            var xx = bmp.x;
            var yy = bmp.y;
            egret.setTimeout(() => { wy.Tools.center(bmp); egret.Tween.get(bmp).to({ x: -ss, y: yy + ss + xx }, sudu) }, thisobj, time)
        }
        /**映入
         */
        public static yingru(bmp: egret.Bitmap, time: number = 1000, jiangge: number = 350) {
            var thisobj = bmp.parent
            bmp.alpha = 0;
            bmp.scaleX = 2;
            bmp.scaleY = 2;
            wy.Tools.center(bmp);
            egret.setTimeout(() => { bmp.alpha = 1; egret.Tween.get(bmp).to({ scaleX: 1, scaleY: 1 }, jiangge) }, thisobj, time)
        }
        /**闪烁
     */
        public static shansuo(bmp: egret.Bitmap, time: number = 1000, jiangge: number = 1000) {
            var thisobj = bmp.parent
            egret.setTimeout(() => { bmp.alpha = 1; egret.Tween.get(bmp, { loop: true }).to({ alpha: 0 }, jiangge).to({ alpha: 1 }, jiangge) }, thisobj, time)
        }
        /**半闪烁
         */
        public static shansuo2(bmp: egret.Bitmap, time: number = 1000, tim2: number = 1000) {
            var thisobj = bmp.parent
            // bmp.alpha = 1;
            egret.setTimeout(() => { egret.Tween.get(bmp, { loop: true }).to({ alpha: 0.5 }, tim2).to({ alpha: 1 }, tim2) }, thisobj, time)
        }
        /**下落动画
       */
        public static xialuo(bmp: egret.Bitmap, time: number = 1000, sudu: number = 10): number {
            var thisobj = bmp.parent
            var bmp1 = new egret.Bitmap(bmp.texture);
            wj.Mytools.like(bmp1, bmp);
            bmp1.y = -bmp.height;
            thisobj.addChildAt(bmp1, thisobj.getChildIndex(bmp));
            egret.setTimeout(() => {
                var s = egret.setInterval(() => {

                    bmp.y += sudu;
                    bmp1.y += sudu;
                    if (bmp.y >= bmp.height) {
                        bmp.y = -bmp.height
                    }
                    if (bmp1.y >= bmp1.height) {
                        bmp1.y = -bmp1.height
                    }
                }, thisobj, 1000 / 24)
                return s;
            }, thisobj, time)
            return -1;
        }
        /**旋转动画
        */
        public static xuanzhuan(bmp: egret.Bitmap, time: number = 2000, tim: number = 10000) {
            var thisobj = bmp.parent
            egret.setTimeout(() => { wy.Tools.center(bmp); egret.Tween.get(bmp, { loop: true }).to({ rotation: 360 }, tim) }, thisobj, time)
        }
        /**旋入动画
      */
        public static zhuanru(bmp: egret.Bitmap, time: number = 2000, tim: number = 10000) {
            wy.Tools.center(bmp)
            bmp.scaleX = bmp.scaleY = 0
            var thisobj = bmp.parent
            egret.setTimeout(() => { egret.Tween.get(bmp).to({ rotation: 1080, scaleX: 1, scaleY: 1 }, tim) }, thisobj, time)
        }
        /**放大缩小动画
        */
        public static fadasuoxiao(bmp: egret.Bitmap, time: number = 1000, sudu: number = 1000) {
            var thisobj = bmp.parent
            egret.setTimeout(() => { wy.Tools.center(bmp); egret.Tween.get(bmp, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, sudu).to({ scaleX: 1, scaleY: 1 }, sudu) }, thisobj, time)
        }
        /**上下浮动动画
         */
        public static doudong(bmp: egret.Bitmap, time: number = 800, sudu: number = 300) {
            var thisobj = bmp.parent
            egret.setTimeout(() => { wy.Tools.center(bmp); egret.Tween.get(bmp, { loop: true }).to({ y: bmp.y + 3 }, sudu).to({ y: bmp.y - 3 }, 2 * sudu).to({ y: bmp.y }, sudu) }, thisobj, time)
        }
        /**左边飞入动画
         */
        public static zuofeiru(bmp: any, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            var a = bmp.x;
            bmp.x = -bmp.width
            egret.setTimeout(() => { egret.Tween.get(bmp).to({ x: a }, sudu, egret.Ease.elasticOut); }, thisobj, time)
        }

        /**左边飞入动画
         */
        public static zuofeiru1(bmp: any, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            var a = bmp.x;
            bmp.x = -bmp.width
            egret.setTimeout(() => { egret.Tween.get(bmp).to({ x: a }, sudu); }, thisobj, time)
        }
        /**右边飞入动画
         */
        public static youfeiru(bmp: egret.Bitmap, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            var a = bmp.x;
            bmp.x = 640
            egret.setTimeout(() => { egret.Tween.get(bmp).to({ x: a }, sudu, egret.Ease.elasticOut); }, thisobj, time)
        }

        /**右边飞入动画
        */
        public static youfeiru1(bmp: egret.Bitmap, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            var a = bmp.x;
            bmp.x = 640
            egret.setTimeout(() => { egret.Tween.get(bmp).to({ x: a }, sudu); }, thisobj, time)
        }
        /**上边飞入动画
        */
        public static shangfeiru(bmp: any, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            var a = bmp.y;
            bmp.y = -bmp.height
            egret.setTimeout(() => {
                egret.Tween.get(bmp).to({ y: a }, sudu//,egret.Ease.elasticOut
                );
            }, thisobj, time)
        }
        /**上边飞入动画
       */
        public static shangfeiru1(bmp: egret.Bitmap, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            var a = bmp.y;
            bmp.y = -bmp.height
            egret.setTimeout(() => {
                egret.Tween.get(bmp).to({ y: a }, sudu, egret.Ease.elasticOut
                );
            }, thisobj, time)
        }
        /**横向扁出上
         */
        public static hengchushang(bmp, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            bmp.scaleY = 0;
            egret.setTimeout(() => { egret.Tween.get(bmp).to({ scaleY: 1 }, sudu, egret.Ease.elasticOut); }, thisobj, time)
        }
        /**横向扁出下
         */
        public static hengchuxia(bmp: egret.Bitmap, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            wj.Mytools.zuoxia(bmp);
            bmp.scaleY = 0;
            egret.setTimeout(() => { egret.Tween.get(bmp).to({ scaleY: 1 }, sudu); }, thisobj, time)
        }
        /**横向扁出中
         */
        public static hengchuzhong(bmp: egret.Bitmap, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            wy.Tools.center(bmp);
            bmp.scaleY = 0;
            egret.setTimeout(() => { egret.Tween.get(bmp).to({ scaleY: 1 }, sudu, egret.Ease.elasticOut); }, thisobj, time)
        }
        /**淡入
        */
        public static danru(bmp: any, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            bmp.alpha = 0;
            egret.setTimeout(() => { egret.Tween.get(bmp).to({ alpha: 1 }, sudu); }, thisobj, time)
        }
        /**淡出
            */
        public static danchu(bmp: any, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            bmp.alpha = 1;
            egret.setTimeout(() => { egret.Tween.get(bmp).to({ alpha: 0 }, sudu); }, thisobj, time)
        }
        /**下边飞入动画
        */
        public static xiafeiru(bmp: egret.Bitmap, time: number = 800, sudu: number = 1000) {
            var thisobj = bmp.parent
            var a = bmp.y;
            //    bmp.y=document.body.clientHeight+bmp.height
            bmp.y = 1036 + bmp.height
            egret.setTimeout(() => {
                egret.Tween.get(bmp).to({ y: a }, sudu//,egret.Ease.elasticOut
                );
            }, thisobj, time)
        }
        /**左右摇摆动画
        */
        public static zuoyouyaobai(bmp: egret.Bitmap, time: number = 800, sudu: number = 300) {
            var thisobj = bmp.parent
            egret.setTimeout(() => { wy.Tools.center(bmp); egret.Tween.get(bmp, { loop: true }).to({ x: bmp.x + 3 }, sudu).to({ x: bmp.x - 3 }, sudu) }, thisobj, time)
        }
        /**摇一摇动画
         */
        public static yaoyiyao(bmp: egret.Bitmap, time: number = 800, sudu: number = 300) {
            var thisobj = bmp.parent
            egret.setTimeout(() => { wy.Tools.center(bmp); egret.Tween.get(bmp, { loop: true }).to({ rotation: 15 }, sudu).to({ rotation: -15 }, 600).to({ rotation: 0 }, sudu) }, thisobj, time)
        }
        public static isqis = false;
         /**连续动画
        */
        public static lianxu(bmp: egret.Bitmap[], time: number = 800, sudu: number = 1000) {
            var thisobj = bmp[0].parent
            var a = bmp[0].x;
            egret.setTimeout(() => { 
                for(let i=0;i<bmp.length;i++){
                    wy.Tools.center(bmp[i]);
                }
            egret.setInterval(()=>{
                for(let i=0;i<bmp.length;i++){
                    egret.Tween.get(bmp[i]).wait(2*sudu*i).to({scaleX:1.1,scaleY:1.1},sudu).to({scaleX:1,scaleY:1},sudu)
                }


            },thisobj,2*sudu*bmp.length)
            
        
    
 }, thisobj, time)
        }
        /**气势动画
        */
        public static qishi(bmp: egret.Bitmap, time: number = 800, sudu: number = 300): egret.Bitmap {
            wj.Donghua.isqis = false;
            var thisobj = bmp.parent

            var bmp2 = new egret.Bitmap(bmp.texture);

            wj.Mytools.like(bmp2, bmp);
            wy.Tools.center(bmp2);
            egret.setTimeout(() => {

                thisobj.addChild(bmp2); wy.Tools.center(bmp); egret.Tween.get(bmp2, { loop: true }).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 0).to({ alpha: 0, scaleX: 1.2, scaleY: 1.2 }, sudu).call(() => {
                    if (wj.Donghua.isqis) wy.Tools.stop(bmp2)
                })
            }, thisobj, time)
            return bmp2;
        }
    }
    /**
    * Toast 提示工具
    *@example 使用方法如下
     *<pre>
     *     wy.Toast.setContent("xxx",y=?,isBottomIn=false);
     *     y:默认为900（设置提示框的Y坐标）
     *     isBottomIn:是否从下飞入显示（默认为false）
     *</pre>
     *
     *@version 0.0.2
     *@platform egret 3.0.3
     */
    export class Toast {
        /** 
         * 默认提示框背景颜色 
         * @version 0.0.1
         * @platform egret3.0.3
         */
        public static BG_COLOR: number = 0x35393c;
        /**
         *默认提示文字颜色
         *@version 0.0.1
         *@platform egret3.0.3
         */
        public static TXT_COLOR: number = 0xffffff;
        /**
         *默认提示文字大小
         *@version 0.0.1
         *@platform egret3.0.3
         */
        public static FONT_SIZE: number = 30;
        /**
         *默认文本框高度
         *@version 0.0.1
         *@platform egret3.0.3
         */
        public static TF_HEIGHT: number = 60;
        /**
         *默认文本框宽度
         *@version 0.0.1
         *@platform egret3.0.3
         */
        public static TF_WIDTH: number = 640;
        private static _instanceSpr: egret.Sprite;
        private static toastText: egret.TextField;
        /**
         *显示Toast提示框
         * @param conten 提示内容
         * @param pa 需要添加的位置 默认是wy.GameInterface
         * @param y 设置提示框的Y值 默认是900
         * @param isBottomIn 是否需要从下飞入 默认是false
         */
        public static setContent(conten: string, pa: any = wy.GameInterface, y: number = 900, isBottomIn: boolean = false) {
            var spr = this.InstanceSpr();
            //        spr.alpha = 1;
            this.toastText.text = conten;
            egret.Tween.removeTweens(spr);
            if (isBottomIn) {
                spr.y = 1036;
                egret.Tween.get(spr).to({ y: y }, 500);
            }

            egret.Tween.get(spr).to({ alpha: 1 }, 300).wait(2000).to({ alpha: 0 }, 300).call(function () {
                if (spr.parent) {
                    spr.parent.removeChild(spr);
                }
            });
            spr.y = y;
            pa.stage.addChild(spr);
            // wy.GameInterface.stage.addChild(spr);
        }
        /**
         *version 0.0.1
         *platform egret3.0.3
         */
        private static InstanceSpr(): egret.Sprite {
            if (this._instanceSpr == null) {
                this._instanceSpr = new egret.Sprite();
                var matrix: egret.Matrix = new egret.Matrix();
                matrix.createGradientBox(this.TF_WIDTH, this.TF_HEIGHT);
                this._instanceSpr.graphics.beginGradientFill(egret.GradientType.LINEAR, [this.BG_COLOR, this.BG_COLOR, this.BG_COLOR], [0, 1, 0], [0, 127, 255], matrix);
                this._instanceSpr.graphics.drawRect(0, 0, this.TF_WIDTH, this.TF_HEIGHT);
                this._instanceSpr.graphics.endFill();
                this.toastText = new egret.TextField;
                this.toastText.size = this.FONT_SIZE;
                this.toastText.x = this.toastText.y = 0;
                this.toastText.width = this.TF_WIDTH;
                this.toastText.height = this.TF_HEIGHT;
                this.toastText.textAlign = "center";
                this.toastText.fontFamily = "微软雅黑";
                this.toastText.verticalAlign = egret.VerticalAlign.MIDDLE;
                this.toastText.textColor = this.TXT_COLOR;
                this._instanceSpr.addChild(this.toastText);
            }
            this._instanceSpr.alpha = 0;
            return this._instanceSpr;
        }
    }
    /**
    * 随机数工具类
    */
    export class RandomUtils {
        /**
         * 获取一个区间的随机数(带小数)
         * @param $from 最小值
         * @param $end 最大值
         * @returns {number}
         */
        public static limit($from: number, $end: number): number {
            $from = Math.min($from, $end);
            $end = Math.max($from, $end);
            var range: number = $end - $from;
            return $from + Math.random() * range;
        }
        /**
         * 获取一个区间的随机数(整数)
         * @param $from 最小值
         * @param $end 最大值
         * @returns {number}
         */
        public static limitInteger($from: number, $end: number): number {
            return Math.round(this.limit($from, $end));
        }
        /**
        * 获取一个区间的随机数(不同数字的整数数组)
        * @param num 几个元素
        * @param $from 最小值
        * @param $end 最大值
        * @returns {number}
        */
        public static limitInteger1($from: number, $end: number, num: number): number[] {
            var a = [];
            for (let i = 0; i < num; i++) {
                a[i] = Math.round(this.limit($from, $end))
                for (let j = 0; j < i; j++) {
                    if (a[i] == a[j]) {
                        i--;
                    }
                }
            }
            return a;
        }
        /**
         * 在一个数组中随机获取一个元素
         * @param arr 数组
         * @returns {any} 随机出来的结果
         */
        public randomArray(arr: Array<any>): any {
            var index: number = Math.floor(Math.random() * arr.length);
            return arr[index];
        }
    }
    /**
       * 头像图片显示类;矩形图片类
       * 
       * 
       * @example 
       * <pre>
       *     var img:wy.HeadImg = new wy.HeadImg();//构造函数可以传入半径，如果不是圆形，那传入的值则是正方形边长的一半
       *     img.source = 'http://wx.qlogo.cn/mmopen/JUvAvnJSpXADD7HxXhh8866bbibVAkabWP41MqsRZlUm1oePib2vVIhKbu4WWicGEPDKh4nbyGSuSjgMcJ756ANEHS023qPwmH5/132';
       *     img.x = wy.GameInterface.stage.stageWidth>>1;
       *     img.y = wy.GameInterface.stage.stageHeight>>1;
       *     this.addChild(img);
       * </pre>
       * 
       * @version 0.0.3
       * @platform egret3.0.3
       * 
       */
    export class HeadImg extends egret.DisplayObjectContainer {
        /**
         * 遮罩圆形
         * 
         * @version 0.0.3
           * @platform egret3.0.3
         */
        protected shpMask: egret.Shape;
        /**
         * 头像图片
         * 
         * @version 0.0.3
           * @platform egret3.0.3
         */
        protected bmp: egret.Bitmap;

        /**
         * 通用半径 默认50
         * 
         * @version 0.0.3
           * @platform egret3.0.3
         */
        public static RADIUS: number = 50;
        public constructor(radius?: number, he?: number, isCircle: boolean = true) {
            super();
            var rad: number;
            if (radius) { rad = radius; }
            else { rad = HeadImg.RADIUS; }

            this.bmp = new egret.Bitmap();
            this.addChild(this.bmp);
            this.bmp.width = rad;
            this.bmp.height = he;
            // this.bmp.x = this.bmp.y = -rad;

            if (isCircle) {
                this.shpMask = new egret.Shape();
                this.shpMask.graphics.beginFill(0xffffff, 1);
                this.shpMask.graphics.drawCircle(0, 0, rad);
                this.shpMask.graphics.endFill();
                this.addChild(this.shpMask);
                this.bmp.mask = this.shpMask;
            }
        }
        /**
         * 图片地址
         * 
         * @version 0.0.3
           * @platform egret3.0.3
         */
        protected _source: string;

        /**
         * set 设置图片地址 并加载显示
         * 
         * @version 0.0.3
           * @platform egret3.0.3
         */
        public set source(value: string) {
            this._source = value;
            RES.getResByUrl(value, this.compFunc, this, RES.ResourceItem.TYPE_IMAGE);
        }

        /**
         * 获取图片地址
         * 
         * @version 0.0.3
           * @platform egret3.0.3
         */
        public get source(): string {
            return this._source;
        }

        /**
         * @private 
         * 
         * 图片加载完成
         * 
         * @param texture
         * 
         * @version 0.0.3
           * @platform egret3.0.3
         */
        private compFunc(texture: egret.Texture): void {
            if (this.bmp) {
                this.bmp.texture = texture;
            }
        }

        /**
         * 设置图片纹理
         * 
         * @version 0.0.3
           * @platform egret3.0.3
         */
        public set texture(texure: egret.Texture) {
            if (this.bmp) {
                this.bmp.texture = texure;
            }
        }
        /**
         * 获取图片纹理
         * 
         * @version 0.0.3
           * @platform egret3.0.3
         */
        public get texture(): egret.Texture {
            if (this.bmp) {
                return this.bmp.texture;
            }
            return null;
        }
    }
    export class Music {
        /**播放音乐
         * 
         * 
         */
        public static play(mus: egret.Sound): egret.SoundChannel {
            if (mus) {
                var s = mus.play(0, 1);
                return s;
            } else { return null };

        }
        /**停止音乐
        * 
        * 
    	
        */
        public static stop1(c: egret.SoundChannel) {
            if (c) {
                c.stop();
            }
        }
        /**本地加载音乐（音乐名）
            * 
            * 
            */
        public static loadmusic(soundname: string, func: Function) {
            var sound: egret.Sound = new egret.Sound();
            sound.addEventListener(egret.Event.COMPLETE, func, this);
            sound.load("resource/assets/" + soundname + ".mp3");
        }
        /**网络加载音乐
        * 
        * 
           function loadOver(event:egret.Event) {
                var sound:egret.Sound = loader.data;
            sound.play();
     }
        */
        public static loadmusicbyurl(soundurl: string, func: Function) {
            var loader: egret.URLLoader = new egret.URLLoader();
            loader.addEventListener(egret.Event.COMPLETE, func, this);
            loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
            loader.load(new egret.URLRequest(soundurl));
        }
    }
    /**排行榜类
    * 
    * 
    */
    export class paihangban extends egret.DisplayObjectContainer {
        protected _w: number;
        protected _h: number;
        protected _x: number;
        protected _y: number;
        _lie: number;
        _hanggao: number;
        private thisany: any;
        private data1: any[][];
        private spr: egret.Sprite;
        private scollvi: egret.ScrollView;
        private duixiang: any[];
        private type: number[];
        public index: number = 0;
        private jianju = this._w / this._lie;
        /**排行榜类 排行榜的参数依次是x,y,宽，高，每一行高，列数
         * 
         * 
         */
        public constructor(xx: number, yy: number, w: number, h: number, hanggao: number, lie = 1) {
            super()
            this._x = xx;
            this._y = yy;
            this._w = w;
            this._h = h;
            this._lie = lie
            this._hanggao = hanggao
            this.scollvi = new egret.ScrollView;
            wj.Mytools.setweiz(this.scollvi, xx, yy, w, h);
            this.spr = new egret.Sprite
            this.scollvi.setContent(this.spr);
            this.addChild(this.scollvi);
        }
        /**初始化数据
         **@param duixiang 第一个模板的对象集
          **@param type 对应对象集的参数类型（1:本地图片，2：网络图片，3,：文本）
          **@param data 数据对应的二维数组,例如[[p1_png,http://www.baidu.com,"1"],[p2_png,http://www.baidu2.com,"2"]]
          */
        public inint(duixiang: any[], type: number[], data: any[][], jianju: number = this._w / this._lie) {
            this.jianju = jianju;
            this.data1 = data;
            this.duixiang = duixiang;
            this.type = type;
            for (let i = 0; i < data.length; i++) {
                this.createyuansu(data[i], i)
            }
            this.scollvi.addEventListener(egret.Event.CHANGE, () => {
                if (this.scollvi.scrollTop == this.scollvi.getMaxScrollTop()) {
                    //是否数据末尾
                    this.dispatchEventWith("mowei")
                }
            }, this)
        }
        private duix: egret.Shape[] = []
        private createyuansu(data: any[], index: number) {
            var shape = wj.Mytools.createshap(0 + (this._w / this._lie) * (index % this._lie), 0 + ((index / this._lie) >> 0) * this._hanggao, this._w / this._lie - 1, this._hanggao, 0, 0);
            this.spr.addChild(shape)
            this.onclic(shape, index);
            this.duix.push(shape);
            for (let i = 0; i < this.duixiang.length; i++) {
                this.duixiang[i].alpha = 0;
                switch (this.type[i]) {
                    case 1:
                        var p1 = wj.Mytools.createBitmapByName(data[i]);
                        wj.Mytools.setweiz(p1, this.duixiang[i].x - this._x + this.jianju * (index % this._lie), this.duixiang[i].y - this._y + ((index / this._lie) >> 0) * this._hanggao, this.duixiang[i].width, this.duixiang[i].height);
                        this.spr.addChild(p1);
                        //  this.onclic(p1,i);
                        break;
                    case 2:
                        var p2 = new wj.HeadImg(this.duixiang[i].width, this.duixiang[i].height, false);
                        p2.source = data[i];
                        wj.Mytools.setweiz(p2, this.duixiang[i].x - this._x + this.jianju * (index % this._lie), this.duixiang[i].y - this._y + ((index / this._lie) >> 0) * this._hanggao, this.duixiang[i].width, this.duixiang[i].height);
                        p2.x = this.duixiang[i].x - this._x + this.jianju * (index % this._lie);
                        p2.y = this.duixiang[i].y - this._y + ((index / this._lie) >> 0) * this._hanggao;
                        this.spr.addChild(p2);
                        //  this.onclic(p2,i);
                        break;
                    case 3:
                        var p3 = new egret.TextField();
                        wj.Mytools.setweiz(p3, this.duixiang[i].x - this._x + this.jianju * (index % this._lie), this.duixiang[i].y - this._y + ((index / this._lie) >> 0) * this._hanggao, this.duixiang[i].width, this.duixiang[i].height);
                        p3.textColor = this.duixiang[i].textColor;
                        p3.size = this.duixiang[i].size;
                        p3.bold = this.duixiang[i].bold;
                        p3.text = data[i];
                        this.spr.addChild(p3);
                        //  this.onclic(p3,i)
                        break;
                    case 4:
                        var p4 = new wy.HeadImg(this.duixiang[i].width/2);
                        p4.source = data[i];
                        wj.Mytools.setweiz(p4, this.duixiang[i].x - this._x + this.jianju * (index % this._lie), this.duixiang[i].y - this._y + ((index / this._lie) >> 0) * this._hanggao, this.duixiang[i].width, this.duixiang[i].height);
                        p4.x = this.duixiang[i].x - this._x + this.jianju * (index % this._lie);
                        p4.x+=this.duixiang[i].width/2
                        p4.y = this.duixiang[i].y - this._y + ((index / this._lie) >> 0) * this._hanggao;
                        p4.y+=this.duixiang[i].width/2
                        this.spr.addChild(p4);
                        //  this.onclic(p2,i);
                        break;
                }
            }
        }
        private onclic(du: egret.DisplayObject, num: number) {
            du.touchEnabled = true;
            du.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
                this.index = this.duix.indexOf(e.target);
                // 选择对应的值;
                this.dispatchEventWith("choose");
            }, this)
        }
        public set data(value: any[][]) {
            this.data1 = value
            this.spr.removeChildren();
            this.duix = [];
            this.inint(this.duixiang, this.type, this.data, this.jianju);
        }
        public get data(): any[][] {
            return this.data1
        }
    }
}
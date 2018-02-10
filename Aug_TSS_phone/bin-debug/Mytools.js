var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
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
// TypeScript file
var wj;
(function (wj) {
    var Mytools = (function () {
        function Mytools() {
        }
        /**正则电话*/
        Mytools.checkMobile = function (strMobile) {
            var regu = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
            if (regu.test(strMobile)) {
                return true;
            }
            else {
                return false;
            }
        };
        /**检测身份证 */
        Mytools.checkShengfenzheng = function (card) {
            // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (reg.test(card)) {
                return true;
            }
            else {
                return false;
            }
        };
        /**正则中文*/
        Mytools.checkzhongwen = function (str) {
            var re = /[^\u4e00-\u9fa5]/;
            if (re.test(str))
                return false;
            return true;
        };
        /**正则英文*/
        Mytools.checkyingwen = function (str) {
            var re = /[^a-zA-Z]/;
            if (re.test(str))
                return false;
            return true;
        };
        /**正则数字*/
        Mytools.checkshuzi = function (str) {
            var re = /^[0-9]*$/;
            if (re.test(str))
                return true;
            return false;
        };
        /**检测字节数*/
        Mytools.checkzijie = function (str) {
            if (!str) {
                str = "";
            }
            var a = 0;
            for (var i = 0; i < str.length; i++) {
                if (wj.Mytools.checkzhongwen(str.charAt(i))) {
                    a += 2;
                }
                else {
                    a++;
                }
            }
            return a;
        };
        /**检测邮箱*/
        Mytools.checkYouxiang = function (str) {
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (filter.test(str))
                return true;
            else {
                return false;
            }
        };
        /**手指划线*/
        Mytools.huaxian = function (thisobj, color, w, quyu) {
            if (color === void 0) { color = 0; }
            if (w === void 0) { w = 4; }
            if (quyu === void 0) { quyu = new egret.Rectangle(0, 0, 640, 1036); }
            wj.Mytools._dianji = [];
            wj.Mytools._leng = [];
            // var contain1:egret.DisplayObjectContainer=new egret.DisplayObjectContainer();
            var contain = new egret.DisplayObjectContainer();
            //  contain.x=quyu.x;
            //  contain.y=quyu.y;
            contain.width = quyu.width;
            contain.height = quyu.height;
            var line;
            thisobj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                contain.dispatchEventWith("ssss");
                var dian = new egret.Point(e.stageX, e.stageY);
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
            thisobj.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
                if (line) {
                    line.graphics.lineTo(e.stageX, e.stageY);
                }
                else {
                    contain.dispatchEventWith("ssss");
                    var dian = new egret.Point(e.stageX, e.stageY);
                    wj.Mytools._dianji.push(dian);
                    line = new egret.Shape();
                    wj.Mytools._qidian.x = e.stageX;
                    wj.Mytools._qidian.y = e.stageY;
                    var dian = new egret.Point(e.stageX, e.stageY);
                    wj.Mytools._dianji.push(dian);
                    line.graphics.lineStyle(w, color);
                    line.graphics.moveTo(e.stageX, e.stageY);
                    line.x -= contain.x;
                    line.y -= contain.y;
                    contain.addChild(line);
                    contain.mask = quyu;
                }
            }, this);
            thisobj.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
                if (line)
                    line.graphics.endFill();
                wj.Mytools._leng.push(wj.Mytools._dianji.length);
                return line;
            }, this);
            return contain;
        };
        /**自制帧动画元素
     */
        Mytools.dong = function (p1, num, bo, fun) {
            if (num === void 0) { num = 4; }
            if (bo === void 0) { bo = true; }
            for (var i = 0; i < p1.length; i++) {
                p1[i].alpha = 0;
            }
            p1[0].alpha = 1;
            var index = 0;
            var s = egret.setInterval(function () {
                for (var i = 0; i < p1.length; i++) {
                    p1[i].alpha = 0;
                    if (i == index) {
                        p1[i].alpha = 1;
                    }
                }
                index++;
                if (bo) {
                    index = index % p1.length;
                }
                else {
                    if (index == p1.length) {
                        if (fun)
                            fun();
                        egret.clearInterval(s);
                    }
                }
            }, this, 1000 / num);
            return s;
        };
        /**自制帧动画
        */
        Mytools.creatdonghua = function (arr, objthis, zheng, time) {
            if (zheng === void 0) { zheng = 24; }
            if (time === void 0) { time = 0; }
            var max = arr.length;
            var index = -1;
            if (max == 0) {
                return null;
            }
            wj.Mytools.tu = wj.Mytools.createBitmapByName(arr[0]);
            objthis.addChild(wj.Mytools.tu);
            egret.setTimeout(function () {
                var s = egret.setInterval(function () {
                    index++;
                    wj.Mytools.tu.texture = RES.getRes(arr[index]);
                    if (index == max - 1) {
                        index = -1;
                    }
                    return s;
                }, objthis, 1000 / zheng);
            }, objthis, time);
        };
        /**自制帧动画2
        */
        Mytools.creatdonghua2 = function (arr, objthis, zheng, time) {
            if (zheng === void 0) { zheng = 24; }
            if (time === void 0) { time = 0; }
            var max = arr.length;
            var index = -1;
            if (max == 0) {
                return null;
            }
            wj.Mytools.tu2 = wj.Mytools.createBitmapByName(arr[0]);
            objthis.addChild(wj.Mytools.tu2);
            egret.setTimeout(function () {
                var ss = egret.setInterval(function () {
                    index++;
                    wj.Mytools.tu2.texture = RES.getRes(arr[index]);
                    if (index == max - 1) {
                        egret.clearInterval(ss);
                    }
                }, objthis, 1000 / zheng);
            }, objthis, time);
        };
        /**加载视频
        */
        Mytools.createvideo = function (thisobj, p1, url, onLoad, onLoadErr, x, y, w, h) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (w === void 0) { w = 640; }
            if (h === void 0) { h = 320; }
            var video = new egret.Video();
            video.x = x; //设置视频坐标x
            video.y = y; //设置视频坐标y
            video.width = w; //设置视频宽
            video.height = h; //设置视频高
            video.fullscreen = false; //设置是否全屏（暂不支持移动设备）
            video.poster = p1; //设置loding图
            video.load(url);
            // addChild(this.video);         //将视频添加到舞台
            //监听视频加载完成
            video.once(egret.Event.COMPLETE, onLoad, this);
            //监听视频加载失败
            video.once(egret.IOErrorEvent.IO_ERROR, onLoadErr, this);
            return video;
        };
        /**文本创建
         * *tybe    "0"普通文本 "1"可输入文本
        *@param tybe    "0"普通文本 "1"可输入文本
        *
        *
        *
        */
        Mytools.createTextField = function (tybe, width, height, x, y, size) {
            if (tybe === void 0) { tybe = 0; }
            var te = new egret.TextField();
            if (width) {
                te.width = width;
            }
            if (height) {
                te.height = height;
            }
            if (x) {
                te.x = x;
            }
            if (y) {
                te.y = y;
            }
            if (size) {
                te.size = size;
            }
            else {
                te.size = 28;
            }
            if (tybe == 1) {
                te.type = egret.TextFieldType.INPUT;
            }
            te.textAlign = "center";
            return te;
        };
        /**创建受限输入式文本
         **type 0:只输中文 1：只输数字，2：只输英文，3:只输英文加数字；4电话号码文本
         *@param te:是否需要新建文本
        */
        Mytools.createReField = function (thisObj, type, te) {
            if (type === void 0) { type = 1; }
            if (!te) {
                te = wj.Mytools.createTextField(1);
            }
            te.addEventListener(egret.Event.CHANGE, function (e) {
                switch (type) {
                    case 0:
                        te.restrict = "\u4e00-\u9fa5";
                        break;
                    case 1:
                        te.restrict = "0-9";
                        te.inputType = egret.TextFieldInputType.TEL;
                        break;
                    case 2:
                        te.restrict = "a-zA-z_";
                        break;
                    case 3:
                        te.restrict = "a-zA-z_0-9";
                        break;
                    case 4:
                        te.restrict = "0-9";
                        te.inputType = egret.TextFieldInputType.TEL;
                        te.maxChars = 11;
                        break;
                }
            }, thisObj);
            return te;
        };
        // /**文本设置字体（注意，要手动建一个存放字体的文件夹名字为：“fonts”放在项目目录下）
        // */
        // public static loadfont(text:egret.TextField,font1:string):string{
        //     egret.registerFontMapping("font1","fonts/"+font1)
        //     text.fontFamily="font1"
        //     return "font1";
        // }
        /**基本属性相同传递（给obj1复制obj2的基本属性）
        */
        Mytools.like = function (obj1, obj2) {
            obj1.x = obj2.x;
            obj1.y = obj2.y;
            obj1.width = obj2.width;
            obj1.height = obj2.height;
        };
        /**交换位置
        */
        Mytools.jiaohuanweizi = function (obj1, obj2) {
            var a = obj1.x;
            var b = obj1.y;
            obj1.x = obj2.x;
            obj1.y = obj2.y;
            obj2.x = a;
            obj2.y = b;
        };
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
        Mytools.yasuoshangchuang = function (comFunc, Objthis, te, width, height) {
            if (width === void 0) { width = 100; }
            if (height === void 0) { height = 100; }
            wy.Tools.upload_base64(wj.Mytools.yasuotupian(Objthis, te, width, height).toDataURL("image/png"), comFunc, Objthis);
        };
        /**
         * 获取刮开的百分比
         * @return 0-100
         * @param _currentTexture:测试的纹理；
         * @param __penThickness:测试精度：数字越大越不准确，越小CPU需求越高
         */
        Mytools.prototype.getPercent = function (_currentTexture, _penThickness) {
            if (_currentTexture == null) {
                return 0;
            }
            var pixels = _currentTexture.getPixels(0, 0, _currentTexture.textureWidth, _currentTexture.textureHeight);
            var count = 0;
            for (var i = 0; i < pixels.length; i += 4 * _penThickness) {
                if (pixels[i] != 0) {
                    count++;
                }
            }
            // egret.log(count * _penThickness + "/" + pixels.length / 4);
            return parseFloat((count * 4 * _penThickness / pixels.length * 100).toFixed(1));
        };
        /**压缩纹理
        */
        Mytools.yasuotupian = function (Objthis, te, width, height) {
            var t = new egret.Bitmap(te);
            t.width = 100;
            if (width) {
                t.width = width;
            }
            t.height = 100;
            if (height) {
                t.height = height;
            }
            Objthis.addChild(t);
            var pageTexture = new egret.RenderTexture();
            pageTexture.drawToTexture(Objthis, new egret.Rectangle(0, 0, t.width, t.height));
            Objthis.removeChild(t);
            return pageTexture;
        };
        /**创建可滑动文本框
         */
        Mytools.createScolltext = function (text, speed) {
            if (speed === void 0) { speed = 30; }
            text.multiline = true;
            var shape = wj.Mytools.createshap(0, 0, text.width, text.height, 0xff0000, 0);
            shape.x = text.x;
            shape.y = text.y;
            text.parent.addChild(shape);
            var s = -1;
            var juli = 0;
            shape.touchEnabled = true;
            text.parent.addChildAt(shape, text.parent.getChildIndex(text));
            shape.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
                if (s == -1) {
                    s = e.stageY;
                }
                else {
                    if (e.stageY > s) {
                        juli += e.stageY - s;
                        if (juli >= speed) {
                            juli = juli - speed;
                            text.scrollV -= 1;
                            if (text.scrollV == 0) {
                                text.scrollV = 1;
                            }
                        }
                    }
                    else {
                        juli += s - e.stageY;
                        if (juli >= speed) {
                            juli = juli - speed;
                            if (text.scrollV == text.maxScrollV) {
                            }
                            else
                                (text.scrollV += 1);
                        }
                    }
                    s = e.stageY;
                }
            }, text.parent);
            shape.parent.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
                s = -1;
            }, text.parent);
        };
        /**创建透明按钮
         */
        Mytools.GetBtn1 = function (w, h, cx, cy, pa) {
            var spr1 = new egret.Sprite();
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
        };
        /**设置位置
      */
        Mytools.setweiz = function (obj, x, y, w, h) {
            obj.x = x;
            obj.y = y;
            obj.width = w;
            obj.height = h;
        };
        /**只执行一次
    */
        Mytools.oneAction = function (func) {
            if (this._isonce) {
                func();
                this._isonce = false;
            }
        };
        /**设置锚点
       */
        Mytools.maodian = function (p, x, y) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = x - p.x;
            p.anchorOffsetY = y - p.y;
            p.x += x - p.x;
            p.y += y - p.y;
        };
        /**设置右上位置锚点
        */
        Mytools.youshang = function (p) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = p.width;
            p.anchorOffsetY = 0;
            p.x += p.anchorOffsetX;
            p.y += p.anchorOffsetY;
        };
        /**设置右中位置锚点
       */
        Mytools.youzhong = function (p) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = p.width;
            p.anchorOffsetY = p.height >> 1;
            p.x += p.anchorOffsetX;
            p.y += p.anchorOffsetY;
        };
        /**设置右下位置锚点
     */
        Mytools.youxia = function (p) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = p.width;
            p.anchorOffsetY = p.height;
            p.x += p.anchorOffsetX;
            p.y += p.anchorOffsetY;
        };
        /**设置中上位置锚点
     */
        Mytools.zhongshang = function (p) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = p.width >> 1;
            p.anchorOffsetY = 0;
            p.x += p.anchorOffsetX;
            p.y += p.anchorOffsetY;
        };
        /**设置中下位置锚点
       */
        Mytools.zhongxia = function (p) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = p.width >> 1;
            p.anchorOffsetY = p.height;
            p.x += p.anchorOffsetX;
            p.y += p.anchorOffsetY;
            // p.x -= p.anchorOffsetX;
            // p.y -= p.anchorOffsetY;
            // p.anchorOffsetX = p.width >> 1;
            // p.anchorOffsetY = p.height;
            // p.x += p.anchorOffsetX;
            // p.y += p.anchorOffsetY;
        };
        /**设置左中位置锚点
     */
        Mytools.zuozhong = function (p) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetY = p.height >> 1;
            p.anchorOffsetX = 0;
            p.x += p.anchorOffsetX;
            p.y += p.anchorOffsetY;
        };
        /**设置左下位置锚点
     */
        Mytools.zuoxia = function (p) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetY = p.height;
            p.anchorOffsetX = 0;
            p.x += p.anchorOffsetX;
            p.y += p.anchorOffsetY;
        };
        /**如果字节过长，切除多余的字节
       */
        Mytools.cut = function (str, num) {
            var strin = "";
            if (wj.Mytools.checkzijie(str) > num) {
                strin = str.substr(0, str.length - 1);
                return this.cut(strin, num);
            }
            else {
                return str;
            }
        };
        /**设置过长的字节用...代替后面的字
      */
        Mytools.zishuguochang = function (str, num) {
            var ii;
            if (wj.Mytools.checkzijie(str) <= num) {
                ii = str;
            }
            else {
                ii = this.cut(str, num) + "...";
            }
            return ii;
        };
        /**用名字创建图片
      */
        Mytools.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        /**正方形图形
         */
        Mytools.createshap = function (x, y, w, h, color, alph) {
            if (color === void 0) { color = 0xffffff; }
            if (alph === void 0) { alph = 1; }
            var a = new egret.Shape();
            a.graphics.beginFill(color, alph);
            a.graphics.drawRect(0, 0, w, h);
            a.graphics.endFill();
            a.x = x;
            a.y = y;
            return a;
        };
        /**正方形图形带圆角
         */
        Mytools.createshap1 = function (x, y, w, h, color, alph, r) {
            if (color === void 0) { color = 0xffffff; }
            if (alph === void 0) { alph = 1; }
            if (r === void 0) { r = 10; }
            var a = new egret.Shape();
            a.graphics.beginFill(color, alph);
            a.graphics.drawRoundRect(x, y, w, h, r, r);
            a.graphics.endFill();
            return a;
        };
        /**圆形图形
         */
        Mytools.createshap2 = function (x, y, r, color, alph) {
            if (color === void 0) { color = 0xffffff; }
            if (alph === void 0) { alph = 1; }
            var a = new egret.Shape();
            a.graphics.beginFill(color, alph);
            a.graphics.drawCircle(x, y, r);
            a.graphics.endFill();
            return a;
        };
        /**手指动的点集*/
        Mytools._dianji = [];
        /**手指动的点集分段长度*/
        Mytools._leng = [];
        /**手指划线起点*/
        Mytools._qidian = new egret.Point(0, 0);
        /**自制帧动画元素
        */
        Mytools.tu = null;
        /**自制帧动画元素2
       */
        Mytools.tu2 = null;
        Mytools._isonce = true;
        return Mytools;
    }());
    wj.Mytools = Mytools;
    __reflect(Mytools.prototype, "wj.Mytools");
    var Donghua = (function () {
        function Donghua() {
        }
        /**字慢慢显出来，不是整体的type:1：横向，2：竖向。默认2
           */
        Donghua.jianxian = function (bmp, time, sudu, type) {
            if (time === void 0) { time = 1000; }
            if (sudu === void 0) { sudu = 2000; }
            if (type === void 0) { type = 2; }
            if (type == 2) {
                var num = 20;
                var mas = new egret.Sprite;
                var ma = wj.Mytools.createshap(0, -num, bmp.width, bmp.height);
                mas.addChild(ma);
                for (var i = 1; i <= 20; i++) {
                    var s = wj.Mytools.createshap(0, bmp.height - num / 20 * i, bmp.width, num / 20, 0, i / 20);
                    mas.addChild(s);
                }
                mas.x = bmp.x;
                mas.y = bmp.y - bmp.height;
                bmp.parent.addChild(mas);
                bmp.mask = mas;
                egret.setTimeout(function () { egret.Tween.get(mas).to({ y: bmp.y + num }, sudu); }, bmp.parent.addChild(mas), time);
            }
            else {
                var num = 20;
                var mas = new egret.Sprite;
                var ma = wj.Mytools.createshap(0 - num, 0, bmp.width, bmp.height);
                mas.addChild(ma);
                for (var i = 1; i <= 20; i++) {
                    var s = wj.Mytools.createshap(bmp.width - num / 20 * i, 0, num / 20, bmp.height, 0, i / 20);
                    mas.addChild(s);
                }
                mas.x = bmp.x - bmp.width;
                mas.y = bmp.y;
                bmp.parent.addChild(mas);
                bmp.mask = mas;
                egret.setTimeout(function () { egret.Tween.get(mas).to({ x: bmp.x + num }, sudu).call(function () { bmp.parent.removeChild(mas); }); }, bmp.parent.addChild(mas), time);
            }
        };
        /**左右摇摆动画
     */
        Donghua.yaobai = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            egret.setTimeout(function () {
                wj.Mytools.zhongxia(bmp);
                egret.Tween.get(bmp, { loop: true }).to({ skewX: -3 }, sudu).to({ skewX: 3 }, 2 * sudu).to({ skewX: 0 }, sudu);
            }, thisobj, time);
        };
        /**右移场景动画
      */
        Donghua.youyi = function (bmp, time, x) {
            if (time === void 0) { time = 1000; }
            var thisobj = bmp.parent;
            var bmp1 = new egret.Bitmap(bmp.texture);
            wj.Mytools.like(bmp1, bmp);
            bmp1.x = -bmp.width;
            // bmp1.scaleX=-1;
            thisobj.addChildAt(bmp1, thisobj.getChildIndex(bmp));
            egret.setTimeout(function () {
                var s = egret.setInterval(function () {
                    bmp.x += x;
                    bmp1.x += x;
                    if (bmp.x >= bmp.width) {
                        bmp.x = -bmp.width;
                    }
                    if (bmp1.x >= bmp1.width) {
                        bmp1.x = -bmp1.width;
                    }
                }, thisobj, 1000 / 24);
                return s;
            }, thisobj, time);
            return -1;
        };
        /**左下方45°移动
     */
        Donghua.liuxin = function (bmp, time, sudu) {
            if (time === void 0) { time = 1000; }
            if (sudu === void 0) { sudu = 10000; }
            var thisobj = bmp.parent;
            var ss = bmp.width;
            var xx = bmp.x;
            var yy = bmp.y;
            egret.setTimeout(function () { wy.Tools.center(bmp); egret.Tween.get(bmp).to({ x: -ss, y: yy + ss + xx }, sudu); }, thisobj, time);
        };
        /**映入
         */
        Donghua.yingru = function (bmp, time, jiangge) {
            if (time === void 0) { time = 1000; }
            if (jiangge === void 0) { jiangge = 350; }
            var thisobj = bmp.parent;
            bmp.alpha = 0;
            bmp.scaleX = 2;
            bmp.scaleY = 2;
            wy.Tools.center(bmp);
            egret.setTimeout(function () { bmp.alpha = 1; egret.Tween.get(bmp).to({ scaleX: 1, scaleY: 1 }, jiangge); }, thisobj, time);
        };
        /**闪烁
     */
        Donghua.shansuo = function (bmp, time, jiangge) {
            if (time === void 0) { time = 1000; }
            if (jiangge === void 0) { jiangge = 1000; }
            var thisobj = bmp.parent;
            egret.setTimeout(function () { bmp.alpha = 1; egret.Tween.get(bmp, { loop: true }).to({ alpha: 0 }, jiangge).to({ alpha: 1 }, jiangge); }, thisobj, time);
        };
        /**半闪烁
         */
        Donghua.shansuo2 = function (bmp, time, tim2) {
            if (time === void 0) { time = 1000; }
            if (tim2 === void 0) { tim2 = 1000; }
            var thisobj = bmp.parent;
            // bmp.alpha = 1;
            egret.setTimeout(function () { egret.Tween.get(bmp, { loop: true }).to({ alpha: 0.5 }, tim2).to({ alpha: 1 }, tim2); }, thisobj, time);
        };
        /**下落动画
       */
        Donghua.xialuo = function (bmp, time, sudu) {
            if (time === void 0) { time = 1000; }
            if (sudu === void 0) { sudu = 10; }
            var thisobj = bmp.parent;
            var bmp1 = new egret.Bitmap(bmp.texture);
            wj.Mytools.like(bmp1, bmp);
            bmp1.y = -bmp.height;
            thisobj.addChildAt(bmp1, thisobj.getChildIndex(bmp));
            egret.setTimeout(function () {
                var s = egret.setInterval(function () {
                    bmp.y += sudu;
                    bmp1.y += sudu;
                    if (bmp.y >= bmp.height) {
                        bmp.y = -bmp.height;
                    }
                    if (bmp1.y >= bmp1.height) {
                        bmp1.y = -bmp1.height;
                    }
                }, thisobj, 1000 / 24);
                return s;
            }, thisobj, time);
            return -1;
        };
        /**旋转动画
        */
        Donghua.xuanzhuan = function (bmp, time, tim) {
            if (time === void 0) { time = 2000; }
            if (tim === void 0) { tim = 10000; }
            var thisobj = bmp.parent;
            egret.setTimeout(function () { wy.Tools.center(bmp); egret.Tween.get(bmp, { loop: true }).to({ rotation: 360 }, tim); }, thisobj, time);
        };
        /**旋入动画
      */
        Donghua.zhuanru = function (bmp, time, tim) {
            if (time === void 0) { time = 2000; }
            if (tim === void 0) { tim = 10000; }
            wy.Tools.center(bmp);
            bmp.scaleX = bmp.scaleY = 0;
            var thisobj = bmp.parent;
            egret.setTimeout(function () { egret.Tween.get(bmp).to({ rotation: 1080, scaleX: 1, scaleY: 1 }, tim); }, thisobj, time);
        };
        /**放大缩小动画
        */
        Donghua.fadasuoxiao = function (bmp, time, sudu) {
            if (time === void 0) { time = 1000; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            egret.setTimeout(function () { wy.Tools.center(bmp); egret.Tween.get(bmp, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, sudu).to({ scaleX: 1, scaleY: 1 }, sudu); }, thisobj, time);
        };
        /**上下浮动动画
         */
        Donghua.doudong = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 300; }
            var thisobj = bmp.parent;
            egret.setTimeout(function () { wy.Tools.center(bmp); egret.Tween.get(bmp, { loop: true }).to({ y: bmp.y + 3 }, sudu).to({ y: bmp.y - 3 }, 2 * sudu).to({ y: bmp.y }, sudu); }, thisobj, time);
        };
        /**左边飞入动画
         */
        Donghua.zuofeiru = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            var a = bmp.x;
            bmp.x = -bmp.width;
            egret.setTimeout(function () { egret.Tween.get(bmp).to({ x: a }, sudu, egret.Ease.elasticOut); }, thisobj, time);
        };
        /**左边飞入动画
         */
        Donghua.zuofeiru1 = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            var a = bmp.x;
            bmp.x = -bmp.width;
            egret.setTimeout(function () { egret.Tween.get(bmp).to({ x: a }, sudu); }, thisobj, time);
        };
        /**右边飞入动画
         */
        Donghua.youfeiru = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            var a = bmp.x;
            bmp.x = 640;
            egret.setTimeout(function () { egret.Tween.get(bmp).to({ x: a }, sudu, egret.Ease.elasticOut); }, thisobj, time);
        };
        /**右边飞入动画
        */
        Donghua.youfeiru1 = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            var a = bmp.x;
            bmp.x = 640;
            egret.setTimeout(function () { egret.Tween.get(bmp).to({ x: a }, sudu); }, thisobj, time);
        };
        /**上边飞入动画
        */
        Donghua.shangfeiru = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            var a = bmp.y;
            bmp.y = -bmp.height;
            egret.setTimeout(function () {
                egret.Tween.get(bmp).to({ y: a }, sudu //,egret.Ease.elasticOut
                );
            }, thisobj, time);
        };
        /**上边飞入动画
       */
        Donghua.shangfeiru1 = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            var a = bmp.y;
            bmp.y = -bmp.height;
            egret.setTimeout(function () {
                egret.Tween.get(bmp).to({ y: a }, sudu, egret.Ease.elasticOut);
            }, thisobj, time);
        };
        /**横向扁出上
         */
        Donghua.hengchushang = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            bmp.scaleY = 0;
            egret.setTimeout(function () { egret.Tween.get(bmp).to({ scaleY: 1 }, sudu, egret.Ease.elasticOut); }, thisobj, time);
        };
        /**横向扁出下
         */
        Donghua.hengchuxia = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            wj.Mytools.zuoxia(bmp);
            bmp.scaleY = 0;
            egret.setTimeout(function () { egret.Tween.get(bmp).to({ scaleY: 1 }, sudu); }, thisobj, time);
        };
        /**横向扁出中
         */
        Donghua.hengchuzhong = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            wy.Tools.center(bmp);
            bmp.scaleY = 0;
            egret.setTimeout(function () { egret.Tween.get(bmp).to({ scaleY: 1 }, sudu, egret.Ease.elasticOut); }, thisobj, time);
        };
        /**淡入
        */
        Donghua.danru = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            bmp.alpha = 0;
            egret.setTimeout(function () { egret.Tween.get(bmp).to({ alpha: 1 }, sudu); }, thisobj, time);
        };
        /**淡出
            */
        Donghua.danchu = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            bmp.alpha = 1;
            egret.setTimeout(function () { egret.Tween.get(bmp).to({ alpha: 0 }, sudu); }, thisobj, time);
        };
        /**下边飞入动画
        */
        Donghua.xiafeiru = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp.parent;
            var a = bmp.y;
            //    bmp.y=document.body.clientHeight+bmp.height
            bmp.y = 1036 + bmp.height;
            egret.setTimeout(function () {
                egret.Tween.get(bmp).to({ y: a }, sudu //,egret.Ease.elasticOut
                );
            }, thisobj, time);
        };
        /**左右摇摆动画
        */
        Donghua.zuoyouyaobai = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 300; }
            var thisobj = bmp.parent;
            egret.setTimeout(function () { wy.Tools.center(bmp); egret.Tween.get(bmp, { loop: true }).to({ x: bmp.x + 3 }, sudu).to({ x: bmp.x - 3 }, sudu); }, thisobj, time);
        };
        /**摇一摇动画
         */
        Donghua.yaoyiyao = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 300; }
            var thisobj = bmp.parent;
            egret.setTimeout(function () { wy.Tools.center(bmp); egret.Tween.get(bmp, { loop: true }).to({ rotation: 15 }, sudu).to({ rotation: -15 }, 600).to({ rotation: 0 }, sudu); }, thisobj, time);
        };
        /**连续动画
       */
        Donghua.lianxu = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 1000; }
            var thisobj = bmp[0].parent;
            var a = bmp[0].x;
            egret.setTimeout(function () {
                for (var i = 0; i < bmp.length; i++) {
                    wy.Tools.center(bmp[i]);
                }
                egret.setInterval(function () {
                    for (var i = 0; i < bmp.length; i++) {
                        egret.Tween.get(bmp[i]).wait(2 * sudu * i).to({ scaleX: 1.1, scaleY: 1.1 }, sudu).to({ scaleX: 1, scaleY: 1 }, sudu);
                    }
                }, thisobj, 2 * sudu * bmp.length);
            }, thisobj, time);
        };
        /**气势动画
        */
        Donghua.qishi = function (bmp, time, sudu) {
            if (time === void 0) { time = 800; }
            if (sudu === void 0) { sudu = 300; }
            wj.Donghua.isqis = false;
            var thisobj = bmp.parent;
            var bmp2 = new egret.Bitmap(bmp.texture);
            wj.Mytools.like(bmp2, bmp);
            wy.Tools.center(bmp2);
            egret.setTimeout(function () {
                thisobj.addChild(bmp2);
                wy.Tools.center(bmp);
                egret.Tween.get(bmp2, { loop: true }).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 0).to({ alpha: 0, scaleX: 1.2, scaleY: 1.2 }, sudu).call(function () {
                    if (wj.Donghua.isqis)
                        wy.Tools.stop(bmp2);
                });
            }, thisobj, time);
            return bmp2;
        };
        Donghua.isqis = false;
        return Donghua;
    }());
    wj.Donghua = Donghua;
    __reflect(Donghua.prototype, "wj.Donghua");
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
    var Toast = (function () {
        function Toast() {
        }
        /**
         *显示Toast提示框
         * @param conten 提示内容
         * @param pa 需要添加的位置 默认是wy.GameInterface
         * @param y 设置提示框的Y值 默认是900
         * @param isBottomIn 是否需要从下飞入 默认是false
         */
        Toast.setContent = function (conten, pa, y, isBottomIn) {
            if (pa === void 0) { pa = wy.GameInterface; }
            if (y === void 0) { y = 900; }
            if (isBottomIn === void 0) { isBottomIn = false; }
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
        };
        /**
         *version 0.0.1
         *platform egret3.0.3
         */
        Toast.InstanceSpr = function () {
            if (this._instanceSpr == null) {
                this._instanceSpr = new egret.Sprite();
                var matrix = new egret.Matrix();
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
        };
        /**
         * 默认提示框背景颜色
         * @version 0.0.1
         * @platform egret3.0.3
         */
        Toast.BG_COLOR = 0x35393c;
        /**
         *默认提示文字颜色
         *@version 0.0.1
         *@platform egret3.0.3
         */
        Toast.TXT_COLOR = 0xffffff;
        /**
         *默认提示文字大小
         *@version 0.0.1
         *@platform egret3.0.3
         */
        Toast.FONT_SIZE = 30;
        /**
         *默认文本框高度
         *@version 0.0.1
         *@platform egret3.0.3
         */
        Toast.TF_HEIGHT = 60;
        /**
         *默认文本框宽度
         *@version 0.0.1
         *@platform egret3.0.3
         */
        Toast.TF_WIDTH = 640;
        return Toast;
    }());
    wj.Toast = Toast;
    __reflect(Toast.prototype, "wj.Toast");
    /**
    * 随机数工具类
    */
    var RandomUtils = (function () {
        function RandomUtils() {
        }
        /**
         * 获取一个区间的随机数(带小数)
         * @param $from 最小值
         * @param $end 最大值
         * @returns {number}
         */
        RandomUtils.limit = function ($from, $end) {
            $from = Math.min($from, $end);
            $end = Math.max($from, $end);
            var range = $end - $from;
            return $from + Math.random() * range;
        };
        /**
         * 获取一个区间的随机数(整数)
         * @param $from 最小值
         * @param $end 最大值
         * @returns {number}
         */
        RandomUtils.limitInteger = function ($from, $end) {
            return Math.round(this.limit($from, $end));
        };
        /**
        * 获取一个区间的随机数(不同数字的整数数组)
        * @param num 几个元素
        * @param $from 最小值
        * @param $end 最大值
        * @returns {number}
        */
        RandomUtils.limitInteger1 = function ($from, $end, num) {
            var a = [];
            for (var i = 0; i < num; i++) {
                a[i] = Math.round(this.limit($from, $end));
                for (var j = 0; j < i; j++) {
                    if (a[i] == a[j]) {
                        i--;
                    }
                }
            }
            return a;
        };
        /**
         * 在一个数组中随机获取一个元素
         * @param arr 数组
         * @returns {any} 随机出来的结果
         */
        RandomUtils.prototype.randomArray = function (arr) {
            var index = Math.floor(Math.random() * arr.length);
            return arr[index];
        };
        return RandomUtils;
    }());
    wj.RandomUtils = RandomUtils;
    __reflect(RandomUtils.prototype, "wj.RandomUtils");
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
    var HeadImg = (function (_super) {
        __extends(HeadImg, _super);
        function HeadImg(radius, he, isCircle) {
            if (isCircle === void 0) { isCircle = true; }
            var _this = _super.call(this) || this;
            var rad;
            if (radius) {
                rad = radius;
            }
            else {
                rad = HeadImg.RADIUS;
            }
            _this.bmp = new egret.Bitmap();
            _this.addChild(_this.bmp);
            _this.bmp.width = rad;
            _this.bmp.height = he;
            // this.bmp.x = this.bmp.y = -rad;
            if (isCircle) {
                _this.shpMask = new egret.Shape();
                _this.shpMask.graphics.beginFill(0xffffff, 1);
                _this.shpMask.graphics.drawCircle(0, 0, rad);
                _this.shpMask.graphics.endFill();
                _this.addChild(_this.shpMask);
                _this.bmp.mask = _this.shpMask;
            }
            return _this;
        }
        Object.defineProperty(HeadImg.prototype, "source", {
            /**
             * 获取图片地址
             *
             * @version 0.0.3
               * @platform egret3.0.3
             */
            get: function () {
                return this._source;
            },
            /**
             * set 设置图片地址 并加载显示
             *
             * @version 0.0.3
               * @platform egret3.0.3
             */
            set: function (value) {
                this._source = value;
                RES.getResByUrl(value, this.compFunc, this, RES.ResourceItem.TYPE_IMAGE);
            },
            enumerable: true,
            configurable: true
        });
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
        HeadImg.prototype.compFunc = function (texture) {
            if (this.bmp) {
                this.bmp.texture = texture;
            }
        };
        Object.defineProperty(HeadImg.prototype, "texture", {
            /**
             * 获取图片纹理
             *
             * @version 0.0.3
               * @platform egret3.0.3
             */
            get: function () {
                if (this.bmp) {
                    return this.bmp.texture;
                }
                return null;
            },
            /**
             * 设置图片纹理
             *
             * @version 0.0.3
               * @platform egret3.0.3
             */
            set: function (texure) {
                if (this.bmp) {
                    this.bmp.texture = texure;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 通用半径 默认50
         *
         * @version 0.0.3
           * @platform egret3.0.3
         */
        HeadImg.RADIUS = 50;
        return HeadImg;
    }(egret.DisplayObjectContainer));
    wj.HeadImg = HeadImg;
    __reflect(HeadImg.prototype, "wj.HeadImg");
    var Music = (function () {
        function Music() {
        }
        /**播放音乐
         *
         *
         */
        Music.play = function (mus) {
            if (mus) {
                var s = mus.play(0, 1);
                return s;
            }
            else {
                return null;
            }
            ;
        };
        /**停止音乐
        *
        *
        
        */
        Music.stop1 = function (c) {
            if (c) {
                c.stop();
            }
        };
        /**本地加载音乐（音乐名）
            *
            *
            */
        Music.loadmusic = function (soundname, func) {
            var sound = new egret.Sound();
            sound.addEventListener(egret.Event.COMPLETE, func, this);
            sound.load("resource/assets/" + soundname + ".mp3");
        };
        /**网络加载音乐
        *
        *
           function loadOver(event:egret.Event) {
                var sound:egret.Sound = loader.data;
            sound.play();
     }
        */
        Music.loadmusicbyurl = function (soundurl, func) {
            var loader = new egret.URLLoader();
            loader.addEventListener(egret.Event.COMPLETE, func, this);
            loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
            loader.load(new egret.URLRequest(soundurl));
        };
        return Music;
    }());
    wj.Music = Music;
    __reflect(Music.prototype, "wj.Music");
    /**排行榜类
    *
    *
    */
    var paihangban = (function (_super) {
        __extends(paihangban, _super);
        /**排行榜类 排行榜的参数依次是x,y,宽，高，每一行高，列数
         *
         *
         */
        function paihangban(xx, yy, w, h, hanggao, lie) {
            if (lie === void 0) { lie = 1; }
            var _this = _super.call(this) || this;
            _this.index = 0;
            _this.jianju = _this._w / _this._lie;
            _this.duix = [];
            _this._x = xx;
            _this._y = yy;
            _this._w = w;
            _this._h = h;
            _this._lie = lie;
            _this._hanggao = hanggao;
            _this.scollvi = new egret.ScrollView;
            wj.Mytools.setweiz(_this.scollvi, xx, yy, w, h);
            _this.spr = new egret.Sprite;
            _this.scollvi.setContent(_this.spr);
            _this.addChild(_this.scollvi);
            return _this;
        }
        /**初始化数据
         **@param duixiang 第一个模板的对象集
          **@param type 对应对象集的参数类型（1:本地图片，2：网络图片，3,：文本）
          **@param data 数据对应的二维数组,例如[[p1_png,http://www.baidu.com,"1"],[p2_png,http://www.baidu2.com,"2"]]
          */
        paihangban.prototype.inint = function (duixiang, type, data, jianju) {
            var _this = this;
            if (jianju === void 0) { jianju = this._w / this._lie; }
            this.jianju = jianju;
            this.data1 = data;
            this.duixiang = duixiang;
            this.type = type;
            for (var i = 0; i < data.length; i++) {
                this.createyuansu(data[i], i);
            }
            this.scollvi.addEventListener(egret.Event.CHANGE, function () {
                if (_this.scollvi.scrollTop == _this.scollvi.getMaxScrollTop()) {
                    //是否数据末尾
                    _this.dispatchEventWith("mowei");
                }
            }, this);
        };
        paihangban.prototype.createyuansu = function (data, index) {
            var shape = wj.Mytools.createshap(0 + (this._w / this._lie) * (index % this._lie), 0 + ((index / this._lie) >> 0) * this._hanggao, this._w / this._lie - 1, this._hanggao, 0, 0);
            this.spr.addChild(shape);
            this.onclic(shape, index);
            this.duix.push(shape);
            for (var i = 0; i < this.duixiang.length; i++) {
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
                        var p4 = new wy.HeadImg(this.duixiang[i].width / 2);
                        p4.source = data[i];
                        wj.Mytools.setweiz(p4, this.duixiang[i].x - this._x + this.jianju * (index % this._lie), this.duixiang[i].y - this._y + ((index / this._lie) >> 0) * this._hanggao, this.duixiang[i].width, this.duixiang[i].height);
                        p4.x = this.duixiang[i].x - this._x + this.jianju * (index % this._lie);
                        p4.x += this.duixiang[i].width / 2;
                        p4.y = this.duixiang[i].y - this._y + ((index / this._lie) >> 0) * this._hanggao;
                        p4.y += this.duixiang[i].width / 2;
                        this.spr.addChild(p4);
                        //  this.onclic(p2,i);
                        break;
                }
            }
        };
        paihangban.prototype.onclic = function (du, num) {
            var _this = this;
            du.touchEnabled = true;
            du.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                _this.index = _this.duix.indexOf(e.target);
                // 选择对应的值;
                _this.dispatchEventWith("choose");
            }, this);
        };
        Object.defineProperty(paihangban.prototype, "data", {
            get: function () {
                return this.data1;
            },
            set: function (value) {
                this.data1 = value;
                this.spr.removeChildren();
                this.duix = [];
                this.inint(this.duixiang, this.type, this.data, this.jianju);
            },
            enumerable: true,
            configurable: true
        });
        return paihangban;
    }(egret.DisplayObjectContainer));
    wj.paihangban = paihangban;
    __reflect(paihangban.prototype, "wj.paihangban");
    var InputText = (function () {
        function InputText() {
            //在egret的div下创建<p>
            this._id = "gameID";
            this._fontSize = 100;
            var gameDiv = document.getElementById(this._id);
            this.input = document.createElement("input");
            gameDiv.appendChild(this.input);
            //设置<input>属性
            // outline:none
            this.input.style.outline = "none";
            this.input.style.border = "0px";
            this.input.style.backgroundColor = "transparent";
            this.input.style.position = "absolute";
            this.input.style.fontSize = this.fontSize + "px";
            this.input.style.display = "none";
            this.input.style.color = "#000000";
            this.input.style.textAlign = "center";
            // this.input.style["maxlength"]="18"
        }
        Object.defineProperty(InputText.prototype, "fontSize", {
            /**
             *获得字体大小
             */
            get: function () {
                return this._fontSize;
            },
            /**
             *设置字体大小
             */
            set: function (value) {
                this._fontSize = value;
                this.input.style.fontSize = this._fontSize + "px";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputText.prototype, "id", {
            /**
             *获得index中的div id
             */
            get: function () {
                return this._id;
            },
            /**
                 *设置index中的div id
                 */
            set: function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 设置文本内容
         * @param value 内容
         */
        InputText.prototype.setValue = function (value) {
            this.input.style.display = "inline";
            this.input.innerHTML = value;
        };
        /**
         * 根据canvas中的位置和高宽，来设置<p>位置和高宽
         * @param xPos egret中 x坐标
         * @param yPos y坐标
         * @param width 宽度
         * @param height 高度
         *
         * @version 0.0.1
         * @platform egret3.0.3
         */
        InputText.prototype.setPosition = function (xPos, yPos, width, height, jianju) {
            //计算stage和浏览器的比例
            var wScale = document.body.clientWidth / wy.StageMain.StageUtils.stageWidth;
            var hScale = document.body.clientHeight / wy.StageMain.StageUtils.stageHeight;
            //根据比例设置<p>的位置和高宽
            this.input.style.left = xPos * wScale + "px";
            this.input.style.top = yPos * hScale - this.fontSize + "px";
            this.input.style.width = width * wScale + "px";
            this.input.style.height = height * hScale + "px";
            this.input.style.display = "inline";
            this.input.style.letterSpacing = wScale * jianju + "px";
        };
        /**显示 */
        InputText.prototype.show = function () {
            this.input && (this.input.style.display = "inline");
        };
        /**隐藏*/
        InputText.prototype.hide = function () {
            this.input && (this.input.style.display = "none");
        };
        return InputText;
    }());
    wj.InputText = InputText;
    __reflect(InputText.prototype, "wj.InputText");
})(wj || (wj = {}));
//# sourceMappingURL=Mytools.js.map
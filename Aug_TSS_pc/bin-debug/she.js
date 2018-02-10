var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var she = (function () {
    function she(id, objthis) {
        this.headimg = null;
        this.isbudong = false;
        this.isyouli = false;
        this.maxjifen = 0;
        this.maxtime = 0;
        this.cuntinme = 0;
        this.kill = 0;
        this.live = 0;
        this.playername = "我是游客";
        this.playersex = "1";
        this._jifen = 0;
        this.soud = RES.getRes("end_wav");
        this.time = new egret.Timer(1000);
        this.time.start();
        this.time.addEventListener(egret.TimerEvent.TIMER, this.add, this);
        this.Objthis = objthis;
        this._id = id;
        wj.Donghua.danchu(this.Objthis["dan" + this._id], 0, 500);
        // wj.Donghua.danchu(this.Objthis["ewm" + this._id], 0, 500)
        // wj.Donghua.danchu(this.Objthis["cao" + this._id + "1"], 0, 500)
        this.bodys = [];
        this.head = wy.Tools.createSnakeBitmapByName("chong" + this._id + "_1_png");
        // this.head.cacheAsBitmap=true;
        this.body = wy.Tools.createSnakeBitmapByName("chong" + this._id + "_2_png");
        wy.Tools.center(this.body);
        this.wei = wy.Tools.createSnakeBitmapByName("chong" + this._id + "_3_png");
        this.head.x = this.Objthis["dan" + this._id].x;
        this.body.x = this.Objthis["dan" + this._id].x;
        this.wei.x = this.Objthis["dan" + this._id].x;
        this.head.y = this.Objthis["dan" + this._id].y;
        this.body.y = this.Objthis["dan" + this._id].y;
        this.wei.y = this.Objthis["dan" + this._id].y;
        this.bodys.push(this.body);
        this.bodys.push(this.wei);
        this.head.anchorOffsetX = this.head.width / 2;
        this.head.anchorOffsetY = this.head.height - this.body.anchorOffsetY;
        this.wei.anchorOffsetX = this.body.anchorOffsetX;
        this.wei.anchorOffsetY = this.body.anchorOffsetY;
        if (this._id == 5) {
            this.head.anchorOffsetY = this.head.height - this.body.anchorOffsetY - 15;
            this.head.scaleX = this.head.scaleY = 0.8;
        }
    }
    she.prototype.add = function () {
        this.cuntinme++;
        if (this.cuntinme > this.maxtime) {
            this.maxtime = this.cuntinme;
        }
    };
    Object.defineProperty(she.prototype, "headimgurl", {
        get: function () {
            return this._headimgurl;
        },
        set: function (str) {
            this._headimgurl = str;
            this.headimg = new wy.HeadImg(this.Objthis.r, false);
            this.headimg.source = str;
        },
        enumerable: true,
        configurable: true
    });
    she.prototype.addshengti = function () {
        if (this._id == 2 || this._id == 6 || this._id == 8) {
            var s = wy.Tools.createSnakeBitmapByName("chong" + this._id + "_" + (this.bodys.length % 2 + 2) + "_png");
            if (this.isyouli) {
                s.alpha = 0.5;
            }
            wy.Tools.center(s);
            if (this._id == 2) {
                // console.log("最后一蛇的x："+this.bodys[this.bodys.length - 1].x+"\n最后一蛇的y："+this.bodys[this.bodys.length - 1].y);
            }
            s.x = this.bodys[this.bodys.length - 1].x + s.width; //this.bodys[this.bodys.length - 1].x-s.width/2;
            s.y = this.bodys[this.bodys.length - 1].y - s.height; //this.bodys[this.bodys.length - 1].y-s.height/2;
            s.rotation = this.bodys[this.bodys.length - 1].rotation;
            this.Objthis.addChildAt(s, this.Objthis.getChildIndex(this.bodys[this.bodys.length - 1]));
            this.bodys.push(s);
        }
        else if (this._id == 3) {
            if (this.bodys.length % 2 == 0) {
                this.wei.texture = RES.getRes("chong" + this._id + "1_3_png");
                var s = wy.Tools.createSnakeBitmapByName("chong" + this._id + "_2_png");
            }
            else {
                this.wei.texture = RES.getRes("chong" + this._id + "_3_png");
                var s = wy.Tools.createSnakeBitmapByName("chong" + this._id + "1_2_png");
            }
            if (this.isyouli) {
                s.alpha = 0.5;
            }
            wy.Tools.center(s);
            s.x = this.bodys[this.bodys.length - 2].x;
            s.y = this.bodys[this.bodys.length - 2].y;
            s.rotation = this.bodys[this.bodys.length - 2].rotation;
            this.Objthis.addChildAt(s, this.Objthis.getChildIndex(this.bodys[this.bodys.length - 2]));
            this.bodys.splice(this.bodys.length - 1, 0, s);
        }
        else {
            var s = wy.Tools.createSnakeBitmapByName("chong" + this._id + "_2_png");
            if (this.isyouli) {
                s.alpha = 0.5;
            }
            wy.Tools.center(s);
            s.x = this.bodys[this.bodys.length - 2].x;
            s.y = this.bodys[this.bodys.length - 2].y;
            s.rotation = this.bodys[this.bodys.length - 2].rotation;
            this.Objthis.addChildAt(s, this.Objthis.getChildIndex(this.bodys[this.bodys.length - 2]));
            // console.log(this.Objthis.getChildIndex(this.bodys[this.bodys.length - 2]) - 1);
            this.bodys.splice(this.bodys.length - 1, 0, s);
        }
        // s.cacheAsBitmap=true;
    };
    Object.defineProperty(she.prototype, "jifen", {
        set: function (jf) {
            this._jifen = jf;
            if (this.maxjifen < this._jifen) {
                this.maxjifen = this._jifen;
            }
            if (Math.floor(this._jifen) / (1.5 * this.bodys.length) > this.bodys.length) {
                this.addshengti();
            }
        },
        enumerable: true,
        configurable: true
    });
    she.prototype.adds = function () {
        this.Objthis.addChild(this.wei);
        this.Objthis.addChild(this.body);
        this.Objthis.addChild(this.head);
        var tx = new egret.TextField();
        var chars = [0xfcdb06, 0xfc4f90, 0xc700f6, 0x01a884, 0x00a782, 0x00c9ff];
        this.namek = tx;
        tx.width = 150;
        tx.height = 40;
        tx.fontFamily = "微软雅黑";
        wy.Tools.center(tx);
        tx.bold = true;
        tx.textColor = 0x021526; //chars[Math.ceil(Math.random() * 5)]
        tx.size = 35;
        tx.text = this.playername;
        tx.textAlign = "center";
        tx.verticalAlign = "middle";
        // tx.strokeColor = 0x0000ff;
        // tx.stroke = 1;
        this.addshengti();
        this.Objthis.addChild(tx);
    };
    she.prototype.txchange = function () {
        this.namek.x = this.head.x;
        this.namek.y = this.head.y - this.body.height;
    };
    /** 死亡逻辑 */
    she.prototype.die = function () {
        SocketManager.getInstance().send({ "type": this._id, "die": 1 });
        if (this.soud) {
            this.soud.play(0, 1);
        }
        //    egret.setTimeout(()=>{
        //        this.Objthis.cundatax[this.Objthis.jianzhi[""+this._id]]=null;
        //     this.Objthis.cundatay[this.Objthis.jianzhi[""+this._id]]=null;
        //    },this,100) 
        this.cuntinme = 0;
        this.live++;
        this._jifen = 0;
        var a = this.bodys.length;
        for (var i = 0; i < a; i++) {
            this.Objthis.createfood2(this.bodys[i].x + Math.random() * (this.body.width >> 1), this.bodys[i].y + Math.random() * (this.body.width >> 1));
            wy.Tools.stop(this.bodys[i]);
            this.Objthis.removeChild(this.bodys[i]);
            // wy.Tools.removeFromParent( this.bodys[i])
            this.bodys[i] = null;
        }
        this.fuhuo();
    };
    she.prototype.shan = function () {
        var _this = this;
        if (!this.isyouli) {
            wj.Donghua.shansuo(this.head, 0, 100);
            egret.setTimeout(function () {
                wy.Tools.stop(_this.head);
            }, this, 2000);
            var a = this.bodys.length;
            var _loop_1 = function (i) {
                wj.Donghua.shansuo(this_1.bodys[i], 0, 100);
                egret.setTimeout(function () {
                    wy.Tools.stop(_this.bodys[i]);
                }, this_1, 2000);
            };
            var this_1 = this;
            for (var i = 0; i < a; i++) {
                _loop_1(i);
            }
        }
    };
    /** 小蛇重生 */
    she.prototype.fuhuo = function () {
        var _this = this;
        this.head.alpha = 0.5;
        this.bodys = [];
        this.body = wy.Tools.createSnakeBitmapByName("chong" + this._id + "_2_png");
        wy.Tools.center(this.body);
        // this.bodys.push(this.head);
        this.bodys.push(this.body);
        this.wei = wy.Tools.createSnakeBitmapByName("chong" + this._id + "_3_png");
        this.bodys.push(this.wei);
        this.wei.anchorOffsetX = this.body.anchorOffsetX;
        this.wei.anchorOffsetY = this.body.anchorOffsetY;
        this.body.x = this.head.x;
        this.wei.x = this.head.x;
        this.body.y = this.head.y;
        this.wei.y = this.head.y;
        this.Objthis.addChild(this.wei);
        this.Objthis.addChild(this.body);
        this.Objthis.addChild(this.head);
        this.addshengti();
        this.Objthis.addChild(this.namek);
        this.isyouli = true;
        this.isbudong = true;
        for (var i = 0; i < this.bodys.length; i++) {
            this.bodys[i].alpha = 0.5;
        }
        egret.setTimeout(function () { _this.isbudong = false; }, this, 3000);
        egret.setTimeout(function () {
            _this.isyouli = false;
            _this.head.alpha = 1;
            for (var i = 0; i < _this.bodys.length; i++) {
                _this.bodys[i].alpha = 1;
            }
        }, this, 5000);
    };
    she.prototype.close = function () {
        this.time.removeEventListener(egret.TimerEvent.TIMER, this.add, this);
        this.time.stop();
    };
    return she;
}());
__reflect(she.prototype, "she");
//# sourceMappingURL=she.js.map
/**
 * Created by ljd on 16/8/17.
 */
var mime = {'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'bmp': 'image/bmp'};
var selectedHandler;
var bytesHandler;
var thisRef;
var MAX_HEIGHT = 300;
var orientation;

function selectImage(selectedFunc,thisValue) {
    selectedHandler = selectedFunc;
    thisRef = thisValue;
    var fileInput = document.getElementById("fileInput");
    if(fileInput==null){
        fileInput = document.createElement("input");
        fileInput.id = "fileInput";
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.style.height = "0px";
        fileInput.style.display = "block";
        fileInput.style.overflow = "hidden";
        document.body.insertBefore(fileInput,document.body.firstChild);
        if (navigator.userAgent.match(/Android/i)) {
            fileInput.addEventListener('change', tmpSelectFile, false);
        } else {
            fileInput.addEventListener('change', selectFileImage, false);
        }
    }
    setTimeout(function(){fileInput.click()},100);
}
function tmpSelectFile(evt) {
    //console.log("image selected...");
    var file = evt.target.files[0];
    var type = file.type;
    if (!type) {
        type = mime[file.name.match(/\.([^\.]+)$/i)[1]];
    }
    var ret = myCreateObjectURL(file);
    // EXIF.getData(file,function(){        
    //      orientation=EXIF.getTag(this,'Orientation');  
         tmpCreateImage && tmpCreateImage(ret,file);  
    // }); 
    var fileInput = document.getElementById("fileInput");
    fileInput.value="";
}
function tmpCreateImage(uri,file) {
    var image = new Image();
    image.onload = function(){
        var canvas = document.createElement("canvas");
        canvas.orientation = orientation;
        if(!isWeixin() && image.height > MAX_HEIGHT) {
            //宽度等比例缩放
            image.width *= MAX_HEIGHT / image.height;
            image.height = MAX_HEIGHT;
            var ctx = canvas.getContext("2d");

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0, image.width, image.height);
            var smallURL = canvas.toDataURL("image/png");
        } else {
            smallURL = uri;
        }
        image.width = image.height = 1;
        selectedHandler & selectedHandler(thisRef,smallURL,file);
    }
    image.src = uri;
    image.style.visibility = "hidden";
    document.body.appendChild(image);
}
function myCreateObjectURL(blob){
    if(window.URL != undefined)
        return window['URL']['createObjectURL'](blob);
    else
        return window['webkitURL']['createObjectURL'](blob);
}
function myResolveObjectURL(blob){
    if(window.URL != undefined)
        window['URL']['revokeObjectURL'](blob);
    else
        window['webkitURL']['revokeObjectURL'](blob);
}

function getImageData(file,bytesFunc,thisValue) {
    bytesHandler = bytesFunc;
    thisRef = thisValue;
    try{var reader = new FileReader();}
    catch(err) {console.log("no support FileReader")}
    function tmpLoad() {
        bytesHandler && bytesHandler(thisRef,this.result);
    }
    reader.onload = tmpLoad;
    reader.readAsArrayBuffer(file);
}
function isWeixin(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}
/**
 * Created by ljd on 16/8/17.
 */
function selectImageWX(selectedFunc,thisValue) {
    selectedHandler = selectedFunc;
    thisRef = thisValue;
    wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            //alert(localIds[0]);
            tmpCreateImage(localIds[0]);
        }
    });
}

function selectFileImage(evt) {
	var file = evt.target.files[0];
	//图片方向角 added by lzk
	var Orientation = null;
	
	if (file) {
		// console.log("正在上传,请稍后...");
		var rFilter = /^(image\/jpeg|image\/png)$/i; // 检查图片格式
		if (!rFilter.test(file.type)) {
			//showMyTips("请选择jpeg、png格式的图片", false);
			return;
		}
		// var URL = URL || webkitURL;
		//获取照片方向角属性，用户旋转控制
		EXIF.getData(file, function() {
		   // alert(EXIF.pretty(this));
		    EXIF.getAllTags(this); 
		    //alert(EXIF.getTag(this, 'Orientation')); 
		    Orientation = EXIF.getTag(this, 'Orientation');
		    //return;
		});
		
		var oReader = new FileReader();
		oReader.onload = function(e) {
			//var blob = URL.createObjectURL(file);
			//_compress(blob, file, basePath);
			var image = new Image();
			image.src = e.target.result;
			image.onload = function() {
				var expectWidth = this.naturalWidth;
				var expectHeight = this.naturalHeight;
				
				if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
					expectWidth = 800;
					expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
				} else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
					expectHeight = 1200;
					expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
				}
				var canvas = document.createElement("canvas");
				var ctx = canvas.getContext("2d");
				canvas.width = expectWidth;
				canvas.height = expectHeight;
				ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
				var base64 = null;
				//修复ios
				if (navigator.userAgent.match(/iphone/i)) {
					// console.log('iphone');
					//alert(expectWidth + ',' + expectHeight);
					//如果方向角不为1，都需要进行旋转 added by lzk
					if(Orientation != "" && Orientation != 1){
						// alert('旋转处理');
						switch(Orientation){
						 	case 6://需要顺时针（向左）90度旋转
						 		// alert('需要顺时针（向左）90度旋转');
						 		rotateImg(this,'left',canvas);
						 		break;
						 	case 8://需要逆时针（向右）90度旋转
						 		// alert('需要顺时针（向右）90度旋转');
						 		rotateImg(this,'right',canvas);
						 		break;
						 	case 3://需要180度旋转
						 		// alert('需要180度旋转');
								rotateImg(this,'right',canvas);//转两次
								rotateImg(this,'right',canvas);
								break;
						}		
					}
					
					/*var mpImg = new MegaPixImage(image);
					mpImg.render(canvas, {
						maxWidth: 800,
						maxHeight: 1200,
						quality: 0.8,
						orientation: 8
					});*/
					base64 = canvas.toDataURL("image/jpeg", 0.8);
				}else if (navigator.userAgent.match(/Android/i)) {// 修复android
					var encoder = new JPEGEncoder();
					// base64 = encoder.encode(ctx.getImageData(0, 0, expectWidth, expectHeight), 80);
                    // alert('Android');
                    base64 = canvas.toDataURL("image/jpeg", 0.8);
                    // alert(base64);
				}else{
					//alert(Orientation);
					if(Orientation != "" && Orientation != 1){
						//alert('旋转处理');
						switch(Orientation){
						 	case 6://需要顺时针（向左）90度旋转
						 		// alert('需要顺时针（向左）90度旋转');
						 		rotateImg(this,'left',canvas);
						 		break;
						 	case 8://需要逆时针（向右）90度旋转
						 		// alert('需要顺时针（向右）90度旋转');
						 		rotateImg(this,'right',canvas);
						 		break;
						 	case 3://需要180度旋转
						 		// alert('需要180度旋转');
								rotateImg(this,'right',canvas);//转两次
								rotateImg(this,'right',canvas);
								break;
						}		
					}
					
					base64 = canvas.toDataURL("image/jpeg", 0.8);
				}
				//uploadImage(base64);
				// $("#myImage").attr("src", base64);
                selectedHandler & selectedHandler(thisRef,base64,file);
			};
		};
		oReader.readAsDataURL(file);
	}
}

//对图片旋转处理 added by lzk
function rotateImg(img, direction,canvas) {  
		//alert(img);
        //最小与最大旋转方向，图片旋转4次后回到原方向  
        var min_step = 0;  
        var max_step = 3;  
        //var img = document.getElementById(pid);  
        if (img == null)return;  
        //img的高度和宽度不能在img元素隐藏后获取，否则会出错  
        var height = img.height;  
        var width = img.width;  
        //var step = img.getAttribute('step');  
        var step = 2;  
        if (step == null) {  
            step = min_step;  
        }  
        if (direction == 'right') {  
            step++;  
            //旋转到原位置，即超过最大值  
            step > max_step && (step = min_step);  
        } else {  
            step--;  
            step < min_step && (step = max_step);  
        }  
        //img.setAttribute('step', step);  
        /*var canvas = document.getElementById('pic_' + pid);  
        if (canvas == null) {  
            img.style.display = 'none';  
            canvas = document.createElement('canvas');  
            canvas.setAttribute('id', 'pic_' + pid);  
            img.parentNode.appendChild(canvas);  
        }  */
        //旋转角度以弧度值为参数  
        var degree = step * 90 * Math.PI / 180;  
        var ctx = canvas.getContext('2d');  
        switch (step) {  
            case 0:  
                canvas.width = width;  
                canvas.height = height;  
                ctx.drawImage(img, 0, 0);  
                break;  
            case 1:  
                canvas.width = height;  
                canvas.height = width;  
                ctx.rotate(degree);  
                ctx.drawImage(img, 0, -height);  
                break;  
            case 2:  
                canvas.width = width;  
                canvas.height = height;  
                ctx.rotate(degree);  
                ctx.drawImage(img, -width, -height);  
                break;  
            case 3:  
                canvas.width = height;  
                canvas.height = width;  
                ctx.rotate(degree);  
                ctx.drawImage(img, -width, 0);  
                break;  
        }  
    }  

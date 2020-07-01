// 实现网站自动跳转电脑PC端与手机端不同页面
function mobilePcRedirect() {
 var sUserAgent= navigator.userAgent.toLowerCase();
 var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
 var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
 var bIsMidp= sUserAgent.match(/midp/i) == "midp";
 var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
 var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
 var bIsAndroid= sUserAgent.match(/android/i) == "android";
 var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
 var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
 if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
 console.log("https://dg828.cn/bless");
 } else {
 console.log("https://dg828.cn/"); 
    // 注：此时写入的是PC端首页跳转路径
   window.location.href = getBasePath() + "/education/new_index.html";
 }
};
mobilePcRedirect();
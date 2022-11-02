function setFont(){
    //设置ui设计稿
    var uiW=630;
    //设备宽度
    var winW=document.documentElement.clientWidth;
    //设置比例
    var rate=winW/uiW;
    //设置字体大小
    document.documentElement.style.fontSize=rate*100+"px";
}
setFont();

function resize(){
    document.getElementsByTagName('html')[0].style.fontSize=document.documentElement.clientWidth/3+'px';
};
resize();
window.onresize=resize;
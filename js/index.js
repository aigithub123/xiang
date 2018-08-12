var content=document.querySelector('.content');
var str='';
var arr=[];
for(var i=0;i<16;i++){
    str+='<li style="background-image:url(./images/'+(i+1)+'.jpg")></li>';
}
content.innerHTML=str;
var li=document.getElementsByTagName('li');
var length=li.length;
//li布局函数
function position(){
    for(var i=0;i<li.length;i++){
        var w=li[i].offsetWidth;
        var h=li[i].offsetHeight;
       // li[i].style.backgroundPosition="100px 100px";
       li[i].style.left=(i%3)*w+'px';
       li[i].style.top=parseInt(i/3)*h+'px';
    }
}
position();
//功能选择
var btn=document.querySelectorAll(".btn");
var mark=true;
btn[1].onclick=function(){
    this.className='on';
    if(mark){
        this.innerHTML='cancel';
        btn[0].style.display='block';
        for(var i=0;i<length;i++){
            li[i].index=i;
           li[i].addEventListener('click',selectLi,false);
        }
    }else{
        this.innerHTML='option';
        btn[0].style.display='none';
        //全部取消
        cancelAll();
    }
   mark=!mark;
};
var onOff=true;
btn[0].onclick=function(){
  this.className='on';
  this.style.display='none';
  btn[1].innerHTML='option';
  //persistClick();
  mark=true;
  for(var j=0;j<arr.length;j++){
      content.removeChild(li[arr[j]]);
  }
  arr.length=0;
  position();
  for(var i=0;i<length;i++){
      li[i].style.opacity=1;
  }
};
function selectLi(){
    if(btn[1].innerHTML=='cancel'){
        this.style.backgroundColor='#000';
        this.style.opacity=0.2;
        arr.push(this.index);
         //为了不影响删除时的顺序，先将数组倒序输出,以防出错
        arr.sort(function(a,b){
            return b-a;
        });
    }
};
//全部取消函数
function cancelAll(){
    for(var i=0;i<length;i++){
        li[i].style.opacity=1;
     }
};


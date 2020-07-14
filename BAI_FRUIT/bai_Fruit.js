//1.xác định các phần tử chúng ta sẽ tác động:
var fruit=document.getElementById("txtFruit");
var showFruit=document.getElementById("btnShowFruit");
var imgFruit=document.getElementById("imgFruit");

//2.bắt sự kiện:
 alert(btnShowFruit.value);
showFruit.addEventListener('click',function(){
    let getFruit = fruit.value;
    imgFruit.setAttribute('src','images/'+getFruit+'.jpg');
    if (getFruit= this.nodeValue){
        alert("Bạn chưa nhập!");
    }
});

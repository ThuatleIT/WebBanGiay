var index = 1;
changeImage = function(){
    var imgs = ["images/1.jpg", "images/2.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index==2){
        index=0;
    }
}
setInterval(changeImage, 5000)  



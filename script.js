const imgs = document.querySelectorAll(".header-slider ul img");
const prev = document.querySelector(".control_prev");
const next = document.querySelector(".control_next");

let n =0;
function kk(){
for(let i = 0;i<imgs.length;i++){
imgs[i].style.display = "none";
}
imgs[n].style.display = "block";
}

kk();

prev.addEventListener("click",(e)=>{
    if (n >0){
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    kk();
});


next.addEventListener("click",(e)=>{
    if (n < imgs.length - 1){
        n++;
    }
    else{
        n=0;
    }
    kk();
});

const scrollContainer = document.querySelectorAll(".product");
for (const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}
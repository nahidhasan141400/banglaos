let mbtn =document.querySelector('#mbtn');
let ol =document.querySelector('ol');
let x;

mbtn.addEventListener('click',()=>{

     if(x){
         ol.style.left='-150%';
         x=false;
     }else{
         ol.style.left='0';
         x=true;
     }
})

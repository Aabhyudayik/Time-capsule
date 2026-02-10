// @ts-nocheck
let photo=document.getElementById('photo');
let pic=document.getElementById("pic");
photo.addEventListener("change", display);
function display(){
    const reader= new FileReader();
    reader.readAsDataURL(photo.files[0]);
    reader.onload =function(){
        pic.src= reader.result;
    }
   


}

 

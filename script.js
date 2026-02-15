// @ts-nocheck
let photo=document.getElementById('photo');
let pic=document.getElementById("pic");
let text=document.getElementById("text");
let email=document.getElementById("email");
let button=document.getElementById("button");
let date=document.getElementById("date");
photo.addEventListener("change", display);
function display(){
    const reader= new FileReader();
    reader.readAsDataURL(photo.files[0]);
    reader.onload =function(){
        pic.src= reader.result;
    }

 let base64=pic.src;

}
pic.addEventListener("load",frame);
function frame(){
    pic.classList.add("polaroid")



}
pic.addEventListener("load",time);
function time(){
    date.style.display="block";
}

button.addEventListener("click",collect);
function collect(){
    const capsule_element={
        
        text:text.value,
        email:email.value,
        pic:base64.value,
        date:date.value

    }
    console.log("Yes it worked");
    
    


}



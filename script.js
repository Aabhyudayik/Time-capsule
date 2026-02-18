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
 console.log(tsParticles);
      // All options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
     
      const options = {
        background: {
          color: "transparent", // the canvas background color
        },
        interactivity: {
          events: {
            onClick: {
              // this handles the mouse click event
              enable: true,
              mode: "push", // this adds particles
            },
            onHover: {
              // this handles the mouse hover event
              enable: false,
              mode: "repulse", // this make particles move away from the mouse
            },
          },
          modes: {
            push: {
              quantity: 2, // number of particles to add
            },
            repulse: {
              distance: 100, // the distance of the particles from the mouse(this is null rn)
            },
          },
        },
        particles: {
          links: {
            enable: true, // this enables links between aka the lines drawn between particles
            opacity: 0,
            distance: 200,
          },
          move: {
            enable: true, // this makes particles move
            speed: { min: 1, max: 3 }, // this is the speed of the particles
          },
          opacity: {
            value: { min: 0.3, max: 0.7 }, // this sets the opacity of the particles
          },
          size: {
            value: { min: 1, max: 20 }, // this sets the size of the particles
          },
        },
      };

      // tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
      tsParticles.load("tsparticles", options);




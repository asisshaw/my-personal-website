const mobileNav=document.querySelector(".moblie-navbar-btn");
// console.log(mobileNav)
const navHeader=document.querySelector(".header");
// console.log(navHeader)
const toggleNavbar=()=>{
    navHeader.classList.toggle("active");
}
mobileNav.addEventListener("click",()=>toggleNavbar())
    
var type=new Typed(".input",{
    String:["Frontend Developer","UX Designer","Web Developer"],
    typedSpeed:70,
    backSpeed:55,
    loop:true

})
let text =""
 //li hover effect 
  
//  list.forEach((e)=>{
//      text=e.innerHTML;
//     // console.log(text)
//     e.addEventListener("mouseover",()=>{
//         e.style.color="white";
//         e.style.borderBottom="1px solid white"
//         e.style.transform="scale(1.2)"
//         e.style.backgroundColor="black"
//     })
//     e.addEventListener("mouseleave",()=>{
//         e.style.color="white";
//          e.style.borderBottom="none"
//           e.style.transform="none"
//           e.style.backgroundColor=""

//     })
   
     
 
//   let downloadbtn=document.querySelector(".btn");
//   console.log(downloadbtn)
//   anime({
//     targets:'.btn',
//     scale:1.1,
//     opacity:0.8,
//     duration:200,
//     easing:'easeOutSine',
//     direction:'alternate',
//     loop: true,
//     autoplay:false,
//     hover:true
//   });

list=document.querySelectorAll(".navbar-link");
function vibe(){
    
    const animated=function(e){
        const span=this.document.querySelector("span");
        const {offsetX: x, offsetY: y}=e,
         {offsetWidth: width , offsetHeight: height}=this 
        move=25;
        xMove=x / width*(move*2)-move;
        yMove=y / height*(move*2)-move;
        span.style.transform=translate(`${xMove}px,${yMove}px`);
        if(e.type===mouseleave) span.style.transform=""
    }
   
list.forEach(element => element.addEventListener("mousemove",animated));
list.forEach(element => element.addEventListener("mouseleave",animated));
    

}
let cursor=document.querySelector(".cursor");
let body=document.querySelector(".hero-header");
// console.log(body)
body.addEventListener("mousemove",(dels)=>{
    // console.log(dels.x)
    cursor.style.left=dels.x+"px";
    cursor.style.top=dels.y+"px";
})

body.addEventListener("mouseover",()=>{
    cursor.style.transform=scale(2.1)
})
list.forEach((list)=>{
   
    list.addEventListener("mouseover",()=>{
        text= list.innerHTML;
cursor.classList.add('sclaeUp');
cursor.style.backgroundColor="white"
    })
    list.addEventListener("mouseleave",()=>{
        text= list.innerHTML;
cursor.classList.remove('sclaeUp');
cursor.style.backgroundColor="black"
    })
})
list.forEach((list)=>{
})

// vibe();
    



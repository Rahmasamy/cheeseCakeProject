// window.addEventListener("load", (event) => {
//     console.log("page is fully loaded");
//     let count=3;
//     setTimeout(()=> {
    
//     count-=1;
//     },3000)
//   });
function loadingFade(){
    const load =document.querySelector('.loading-bg');
    const img=document.querySelector('.loading-img');
    load.style.opacity="0";
    img.style.opacity="0";

}
function removeLoading(){
    const load =document.querySelector('.loading');
    load.style.display="none"
}
const firstVisite=localStorage.getItem('firstvisit');
if (firstVisite == null){
   
    window.setInterval(loadingFade,2800);
    window.setInterval(removeLoading,3000);
    localStorage.setItem('firstvisit',1);
}
else {
    removeLoading();
}
function darkMood(){
    let element = document.getElementById('body');
    let boxes=document.querySelectorAll('.menue2 .box');
    let featureHeading=document.getElementById('feaureHeading');
    element.classList.toggle("dark-mode");
    boxes.forEach(element => {
        element.classList.add('light');
    });
    featureHeading.style.color="#6F3E2F"
}
let h1="welcome to Chesse Cake cafe";
let speed = 50;
let i=0;
if (i < h1.length) {
    setInterval(()=> {
        document.getElementById("welcome").innerHTML += h1.charAt(i);
        i++;
    },70)
   
    
}
else {
    clearInterval( setInterval(()=> {
        document.getElementById("welcome").innerHTML += h1.charAt(i);
        i++;
    },70));
}
/////////////////////////////////////////////////////
let ourSkills=document.querySelector(".top-content");
// console.log(ourSkills);
window.onscroll=function(){
    // calculate the height of scrolling
    let skillsOffsetTop=ourSkills.offsetTop;
    console.log(skillsOffsetTop)
    // get outerheight 
    let outHeight=ourSkills.offsetHeight;
    console.log(outHeight)
    // window height 
    let windowHeight=this.innerHeight;
    console.log(windowHeight)
    // window scroll top 
    let windowScrollTop=this.scrollY;
    console.log(windowScrollTop)
    
    if (windowScrollTop > (skillsOffsetTop + outHeight - windowHeight)){
        console.log(1)
            let allSkills= document.querySelectorAll('.top .progress span');
            console.log(allSkills);
            allSkills.forEach( skill => {
                skill.style.width=skill.dataset.progress;
            });
    }

}
/////////////////////////////////////////////////////


// let landingPageImg=document.querySelector(".main-page .images img");
let landingPageImg=document.getElementById("landimg");
console.log(landingPageImg)
let backGroundImage=setInterval(() => {
    // let RandomNumber=Math.floor(Math.random()* imgs.length);
    // console.log(RandomNumber);
    // console.log(landingPageImg); 
    // console.log(imgs[RandomNumber])
    // landingPageImg.style.src=imgs[RandomNumber]; 
    // var yourImages = ["image1.png","image2.png","image3.png"];
    let imgs=["https://th.bing.com/th/id/OIP.KNpsRbRVLfXTb83Yp-YHIwHaFj?rs=1&pid=ImgDetMain",
    "https://lirp.cdn-website.com/d6ddf3c7/dms3rep/multi/opt/cheesecake02-1920x1280-1920w.jpg",
    "https://th.bing.com/th/id/R.ba6b5bf94e447f1496b112d3b4cb918b?rik=V0%2bOWRb9a9lCag&riu=http%3a%2f%2fwww.phawker.com%2fwp-content%2fuploads%2f2010%2f07%2fcheesecake.jpg&ehk=n8KRGFNTOU4gHtmgFFLQrKi42FeOXNRyYsEljzFoVNA%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.C4dGK95b0s8PS-hN98LC_gHaHa?rs=1&pid=ImgDetMain"]
    let randomImage = Math.floor(Math.random()*imgs.length);
    console.log(randomImage)
    let setImg = landingPageImg.src;
    console.log(setImg);
    document.getElementById("landimg").src = imgs[randomImage];
    
    

},2000)

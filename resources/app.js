const text=['DESIGNER','DEVELOPER'];
let count=0,index=0,currentText='',letter='';


//self invokes function
function type(){
    if(count===text.length)
    {
        count=0;    //if printed both words in text then reset count to 0
    }
    currentText=text[count];
    letter=currentText.slice(0,index++);    //take a subset of the string intext till index position
    
    document.querySelector('.typing').textContent=letter;
    if(letter.length===currentText.length){
        count++;    //change pointer to the next element in text array
        index=0;    //reset index to first letter of the next word
    }
    setTimeout(type,400); //calls after 400ms/
};








 // Wrap every letter in a span
 var textWrapper = document.querySelector('.readJournal .letters2');
 textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
 
 anime.timeline({loop: true})
   .add({
     targets: '.readJournal .letter',
     scale: [0, 1],
     duration: 1500,
     elasticity: 600,
     delay: (el, i) => 45 * (i+1)
   }).add({
     targets: '.readJournal',
     opacity: 0,
     duration: 1000,
     easing: "easeOutExpo",
     delay: 1000
   });




   anime.timeline()
   .add({
     targets: '.land .circle-white',
     scale: [0, 3],
     opacity: [1, 0],
     easing: "easeInOutExpo",
     rotateZ: 360,
     duration: 1100
   }).add({
     targets: '.land .circle-container',
     scale: [0, 1],
     duration: 1100,
     easing: "easeInOutExpo",
     offset: '-=1000'
   }).add({
     targets: '.land .circle-dark',
     scale: [0, 1],
     duration: 1100,
     easing: "easeOutExpo",
     offset: '-=600'
   }).add({
     targets: '.land .letters-left',
     scale: [0, 1],
     duration: 800,
     offset: '-=550'
   }).add({
     targets: '.land .bang',
     scale: [0, 1],
     rotateZ: [45, 15],
     duration: 1200,
     offset: '-=1000'
   }).add({
     targets: '.land .circle-white',
     opacity: 0,
     duration: 1000,
     easing: "easeOutExpo",
     delay: 1400
   }); 



 
 anime({
   targets: '.land .circle-dark-dashed',
   rotateZ: 360,
   duration: 8000,
   easing: "linear",
   loop: true
 });

const t1=gsap.timeline({defaults:{ease: "power1.out"}})

t1.to('.hello',{y:"10vh",duration:0.5,delay:5}) 
t1.fromTo('.name2',{opacity:0},{opacity:1,duration:1})  
t1.fromTo('.typing',{opacity:0},{opacity:1,duration:1})  
t1.fromTo('header',{opacity:0},{opacity:1,duration:1});

 setTimeout(type,7000);

 
 

let margin = document.querySelector('.bannerimg')


let m1 = margin.style.marginLeft="0vw"
let m2 = margin.style.marginLeft="-100vw"
let m3 = margin.style.marginLeft="-200vw"
let m4 = margin.style.marginLeft="-300vw"
/* 
setInterval(
function slider() {
    if ( m1 == m1 ) {
        m1=   margin.style.marginLeft="0vw"
        console.log('slid 1');
    } else if(m2==m2){
        m2=m3
    }else if(m3==m3){
        m3=m4
    }else if(m4==m4){
        m4=m1
    }
},2000) */
setInterval(() => {
   let m1 = margin.style.marginLeft="0vw"
    console.log('slide 1');
}, 4000+setInterval(4000));
setInterval(() => {
    let m2 = margin.style.marginLeft="-100vw"
     console.log('slide 2');
 }, 8000+setInterval(8000));
 setInterval(() => {
    let m3 = margin.style.marginLeft="-200vw"
     console.log('slide 3');
 }, 12000+setInterval(12000));
 setInterval(() => {
    let m4 = margin.style.marginLeft="-300vw"
     console.log('slide 4');
 }, 15000+setInterval(15000));
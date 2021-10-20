document.querySelector('.ham').addEventListener('click', function() {

 
    let a = document.querySelector('nav')
    if (a.style.height=="50vh") {
    document.querySelector('nav').style.height="0vh" 
        
    } else {
        document.querySelector('nav').style.height="50vh"  
    }
    
  
})
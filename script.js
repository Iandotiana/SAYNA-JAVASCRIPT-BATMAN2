window.onload =  ()=>{
    let arrow =  document.getElementsByClassName('arrow2');
    arrow[0].addEventListener('click',()=>{
         window.scrollTo(top, 'smooth');
    });
    arrow[1].addEventListener('click',()=>{
        window.scrollBy(0, window.innerHeight);
   });
};
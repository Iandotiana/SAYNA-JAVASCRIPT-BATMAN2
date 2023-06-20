window.onload =  ()=>{
    let form = document.getElementById('form');
    form.addEventListener('submit',(e)=>{ 
        let email = document.getElementById('email');
        if(email.value == ''){
            e.preventDefault();
            let invalid = document.getElementById('invalid');
            invalid.innerHTML = 'Veuillez remplir le champs avant de confirmer.';
            invalid.style.color = 'red';
        }
        else{
            e.preventDefault();
            document.getElementById('popupbox').style.display = 'block';
        }  
       
    });
}

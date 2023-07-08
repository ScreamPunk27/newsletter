const input=document.querySelector('input[type=email]');
const msgError=document.getElementById('msg-error');
const button=document.querySelector('input[type=submit]');
const dismissBtn=document.querySelector('.message button');

const validEmail=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; 

let myEmail='';

button.addEventListener('click',(e)=>{
    e.preventDefault();

    if(validEmail.test(input.value)){
        myEmail=input.value;
        msgError.style.display="none";
        input.style.border="1px solid var(--grey)";
        input.classList.remove('error');
        document.querySelector('.newsletter').style.display="none";
        document.querySelector('.message').style.display="flex";
        document.getElementById('email').textContent=myEmail;
    }else{
        msgError.style.display="block";
        input.style.border="1px solid var(--tomato)";
        input.classList.add('error');
    }
});

dismissBtn.addEventListener('click',()=>{
    location.reload();
});


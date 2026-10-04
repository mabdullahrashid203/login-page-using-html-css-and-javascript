
const button = document.querySelectorAll('.button')
const body = document.querySelector('body');

button.forEach(function(button){

button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'gray'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'black'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'aqua'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'orange'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'maroon'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'darkblue'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'green'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'darkmagenta'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'burlywood'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'cadetblue'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'chartreuse'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'navy'){
        body.style.backgroundColor = e.target.id
    }
     if(e.target.id === 'teal'){
        body.style.backgroundColor = e.target.id
    }
     if(e.target.id === 'slategray'){
        body.style.backgroundColor = e.target.id
    }
     if(e.target.id === 'violet'){
        body.style.backgroundColor = e.target.id
    }
     if(e.target.id === 'darkred'){
        body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
    }

})



})
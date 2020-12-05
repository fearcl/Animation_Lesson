// let timerId = setTimeout(func, 10000);
// clearTimeout(timeId);

// function func() {
//     console.log('Прошло 10 сек');
// };

// let timerId = setInterval(func, 3000);
// clearTimeout(timeId);

// let timerId = setTimeout( function log(){
//     console.log('hello');
//     setTimeout(log, 3000);
// });
// clearTimeout(timeId());

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box'),
    btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

function myAnimation() {
    let pos = 0;
    
    let id = setInterval(frame, 10);
    function frame() {
        if ( pos == 300 ){
            clearInterval(id);

        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        } 
    }
}

btn.addEventListener('click', myAnimation);

btnBlock.addEventListener('click', function(event){
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('hello!')
    }
})
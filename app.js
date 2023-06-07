
// My solution 
/* 
const countUp = document.getElementById('count-up');
const countDown = document.getElementById('count-down');
const reset = document.getElementById('reset')
const displayCount = document.querySelector('#value')
let count = 0;

countUp.addEventListener('click', function(){

       count += 1;
       console.log(`Count is currently: ${count}`)
       value.textContent = count;

})

countDown.addEventListener('click', function(){
    count -= 1;
    console.log(`Count is currently: ${count}`)
    value.textContent = count;
})

reset.addEventListener('click', function(){
    count = 0;
    console.log(`Count is currently: ${count}`);
    value.textContent = count;
})*/


/*************** 
Better solution
****************/

//intial count
let count = 0;
const displayCount = document.querySelector('#value');

const btns = document.querySelectorAll('btn')

btns.addEventListener('click',function(){
    
})


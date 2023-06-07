
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

const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const counter = e.currentTarget.classList;
      if(counter.contains('count-down')){
        count--;
     
      } else if (counter.contains('count-up')){
        count++;
      } else{
        count = 0;
      }
      if(count < 0){  
         displayCount.style.color = 'red';
        } else if ( count > 0){
            displayCount.style.color ='green';
        } else {
            displayCount.style.color = 'black';
        }
      displayCount.textContent = count;
   
    })     

})



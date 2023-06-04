const countUp = document.getElementById('count-up');
const countDown = document.getElementById('count-down');
const reset = document.getElementById('reset')
let count = 0;

countUp.addEventListener('click', function(){

       count += 1;
       console.log(`Count is currently: ${count}`)

})

countDown.addEventListener('click', function(){
    count -= 1;
    console.log(`Count is currently: ${count}`)
})

reset.addEventListener('click', function(){
    count = 0;
    console.log(`Count is currently: ${count}`);
})


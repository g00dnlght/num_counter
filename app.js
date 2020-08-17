// Set initial count.
let count = 0;

// Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) { // "btn" can be anything.
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = 'limegreen';
        }
        if(count < 0){
            value.style.color = 'deeppink';
        } 
        if(count === 0){
            value.style.color = 'whitesmoke';
        }
        value.textContent = count;
    });
});
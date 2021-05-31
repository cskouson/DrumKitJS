/**
 * main.js
 * Description: better version of popular drum kit project 
 * 
 * @author: Clint J Skouson (2021)
 */

// Map > big switch statement
let soundMap = new Map();
soundMap.set(0, 'sounds/crash.mp3');
soundMap.set(1, 'sounds/kick-bass.mp3');
soundMap.set(2, 'sounds/snare.mp3');
soundMap.set(3, 'sounds/tom-1.mp3');
soundMap.set(4, 'sounds/tom-2.mp3');
soundMap.set(5, 'sounds/tom-3.mp3');
soundMap.set(6, 'sounds/tom-4.mp3');
let keys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

//click listener and audio function
let dButtons = document.querySelectorAll('.drum');
for (let i = 0; i < dButtons.length; i++) {
    dButtons[i].addEventListener('click', () => {
        j = i + 1;
        let audio = new Audio(soundMap.get(i));
        audio.play();
        //alert('heyyy from button number: ' + j);   
    });
}

//key press listener
document.addEventListener("keydown", (e) => {
    if (keys.includes(e.key, 0)) {
        console.log(e.key);
        buttAnim(e.key);
        document.querySelector('.' + e.key).click();
    }
});


function buttAnim(key){
    let active = document.querySelector('.'+key);
    active.classList.add('pressed');
    setTimeout(() => { active.classList.remove('pressed')}, 150);
}
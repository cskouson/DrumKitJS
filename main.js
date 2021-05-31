/**
 * main.js
 * Description: 
 * 
 * @author: Clint J Skouson (2021)
 */

let soundMap = new Map();
soundMap.set(0, 'sounds/crash.mp3');
soundMap.set(1, 'sounds/kick-bass.mp3');
soundMap.set(2, 'sounds/snare.mp3');
soundMap.set(3, 'sounds/tom-1.mp3');
soundMap.set(4, 'sounds/tom-2.mp3');
soundMap.set(5, 'sounds/tom-3.mp3');
soundMap.set(6, 'sounds/tom-4.mp3');


let dButtons = document.querySelectorAll('.drum');
for(let i = 0; i < dButtons.length; i++){
    dButtons[i].addEventListener('click', () => {
        j = i + 1;
        let audio = new Audio(soundMap.get(i));
        audio.play();
        //alert('heyyy from button number: ' + j);   
    });
}



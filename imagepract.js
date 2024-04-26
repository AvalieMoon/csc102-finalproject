// I kept this because this was my original code set up, but for the life of me. I couldn't get it to run, I have no idea why it wont run. 
//would you be able to look through it and find my error. I tried looking at it with a friend and we both can;t seem to debug it.


//const image = document.getElementById('img');
// //const container = document.getElementById('container');
// const startButton = document.getElementById('startButton');
// const stopButton = document.getElementById('stopButton');


// let posistionX = 0
// let animationId 

// function animateImage(){
//     posistionX += 50;
//     image.style.left = parselnt(image.style.left) + posistionX + 'px';
//     animationId = requestAnimationFrame(animateImage);
// }

// animateImage();

// function startMoving(){
//     startButton.disable = true
//     stopButton.disable = false
//     animateImage();
// }

// function stopMoving(){
//     stopButton.disable = true
//     startButton.disable = false
//     cancelAnimationFrame(animationId);
// }


// This line gets the image element from the HTML document and assigns it to a variable called for all const.
const image = document.getElementById('img');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
//This line listens for a click on the start button. When clicked, it starts the animation 
//of the image by changing its animationPlayState style to 'running'.
  startButton.addEventListener('click', () => {
    image.style.animationPlayState = 'running';
  });
//This line listens for a click on the stop button. When clicked, 
//it pauses the animation of the image by changing its animationPlayState style to 'paused'.
  stopButton.addEventListener('click', () => {
    image.style.animationPlayState = 'paused';
  });
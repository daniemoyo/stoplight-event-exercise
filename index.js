const stopButton = document.getElementById('stopButton')
const stopLight = document.getElementById('stopLight')

const slowButton = document.getElementById('slowButton')
const slowLight = document.getElementById('slowLight')

const goButton = document.getElementById('goButton')
const goLight = document.getElementById('goLight')

// toggle off/on stop button
toggleColor(stopButton, stopLight, 'stop')
// enter stop button
stopButton.addEventListener('mouseenter', function (){
    console.log('Entered Stop button' )
})
// leave stop button
stopButton.addEventListener('mouseleave', function (){
  console.log('Left Stop button' )
})
// toggle off/on slow button
toggleColor(slowButton, slowLight, 'slow')
// enter slow button
slowButton.addEventListener('mouseenter', function (){
  console.log('Entered Stop button' )
})
// leave slow button

// toggle off/on go button and logs bulb on/off
  toggleColor(goButton, goLight, 'go');

// enter go button
goButton.addEventListener('mouseenter', function(){
  console.log("Entered Go button")
})
//leave go button
goButton.addEventListener('mouseleave', function(){
  console.log('Exited Go button')
})

function toggleColor(button, colorElement, color) {
  const buttonText = button.textContent
  button.addEventListener('click', function(){
    colorElement.classList.toggle(color);
    const className = colorElement.getAttribute('class');
    console.log(className === `bulb ${color}` ? `${buttonText} bulb on`: `${buttonText} bulb off`);
  })
}

function toggleMouseEnter(button){
  button.addEventListener("mouseenter", function() {
    console.log("Entered " + $buttonText);
  })
}


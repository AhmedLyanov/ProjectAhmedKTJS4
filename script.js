const handle = document.getElementById('customSliderHandle');
const valueDisplay = document.getElementById('customSliderValue');
handle.addEventListener('mousedown', (e) => {
   e.preventDefault(); 
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
});


function onMouseMove(e) {
   const trackWidth = 438;
   const leftOffset = 25; 
   let position = (e.clientX - leftOffset) / trackWidth * 100;
   position = Math.max(0, Math.min(100, position));
   handle.style.left = position + '%';
   valueDisplay.textContent = Math.round(position);
}
function onMouseUp() {
   document.removeEventListener('mousemove', onMouseMove);
   document.removeEventListener('mouseup', onMouseUp);
}












const handle2 = document.getElementById('customSliderHandle2');
const valueDisplay2 = document.getElementById('customSliderValue2');
handle2.addEventListener('mousedown', (e) => {
   e.preventDefault(); 
   document.addEventListener('mousemove', onMouseMove2);
   document.addEventListener('mouseup', onMouseUp2);
});


function onMouseMove2(e) {
   const trackWidth = 438;
   const leftOffset = 25; 
   let position = (e.clientX - leftOffset) / trackWidth * 100;
   position = Math.max(0, Math.min(100, position));
   handle2.style.left = position + '%';
   valueDisplay2.textContent = Math.round(position);
}
function onMouseUp2() {
   document.removeEventListener('mousemove', onMouseMove2);
   document.removeEventListener('mouseup', onMouseUp2);
}


















const handle3 = document.getElementById('customSliderHandle3');
const valueDisplay3 = document.getElementById('customSliderValue3');
handle3.addEventListener('mousedown', (e) => {
   e.preventDefault(); 
   document.addEventListener('mousemove', onMouseMove3);
   document.addEventListener('mouseup', onMouseUp3);
});


function onMouseMove3(e) {
   const trackWidth = 438;
   const leftOffset = 25; 
   let position = (e.clientX - leftOffset) / trackWidth * 100;
   position = Math.max(0, Math.min(100, position));
   handle3.style.left = position + '%';
   valueDisplay3.textContent = Math.round(position);
}
function onMouseUp3() {
   document.removeEventListener('mousemove', onMouseMove3);
   document.removeEventListener('mouseup', onMouseUp3);
}


















const handle4 = document.getElementById('customSliderHandle4');
const valueDisplay4 = document.getElementById('customSliderValue4');
handle4.addEventListener('mousedown', (e) => {
   e.preventDefault(); 
   document.addEventListener('mousemove', onMouseMove4);
   document.addEventListener('mouseup', onMouseUp4);
});


function onMouseMove4(e) {
   const trackWidth = 438;
   const leftOffset = 25; 
   let position = (e.clientX - leftOffset) / trackWidth * 100;
   position = Math.max(0, Math.min(100, position));
   handle4.style.left = position + '%';
   valueDisplay4.textContent = Math.round(position);
}
function onMouseUp4() {
   document.removeEventListener('mousemove', onMouseMove4);
   document.removeEventListener('mouseup', onMouseUp4);
}

function appendCharacter(character) {
   document.getElementById('display').value += character;
}

function clearDisplay() {
   document.getElementById('display').value = '';
}

function backspace() {
   let display = document.getElementById('display').value;
   document.getElementById('display').value = display.substring(0, display.length - 1);
}

function calculateResult() {
   let display = document.getElementById('display').value;
   try {
       let result = eval(display);
       document.getElementById('display').value = result;
   } catch (error) {
       document.getElementById('display').value = 'Error';
   }
}

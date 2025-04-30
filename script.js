

let calculation =  localStorage.getItem('calculation') || '';
displayCalultaion()
function updatecalculator(value) {
  calculation   += value;
   displayCalultaion()

   localStorage.setItem('calculation', calculation);
}

  document.body.addEventListener('keydown',(event)=> {
     if(event.key === '1') {
      updatecalculator('1')

     }else if(event.key === '2'){
      updatecalculator('2')
     
     }else if(event.key === '2'){
      updatecalculator('2')
     
     }else if(event.key === '3'){
      updatecalculator('3')
     
     }else if(event.key === '+'){
      updatecalculator('+')
     
     }else if(event.key === '4'){
      updatecalculator('4')
     
     }else if(event.key === '5'){
      updatecalculator('5')
     
     }else if(event.key === '6'){
      updatecalculator('6')
     
     }else if(event.key === '-'){
      updatecalculator('-')
     
     }else if(event.key === '7'){
      updatecalculator('7')
     
     }else if(event.key === '8'){
      updatecalculator('8')
     
     }else if(event.key === '9'){
      updatecalculator('9')
     
     }else if(event.key === '*'){
      updatecalculator('*')
     
     }else if(event.key === '0'){
      updatecalculator('0')
     
     }else if(event.key === '.'){
      updatecalculator('.')
     }
    
     else if(event.key === '/'){
      updatecalculator('/')
     }
  });

  function displayCalultaion() {
     document.querySelector('.js-calculation').innerHTML  =calculation;

  }

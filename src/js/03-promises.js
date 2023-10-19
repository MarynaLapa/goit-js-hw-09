import Notiflix from 'notiflix';

const form = document.querySelector('.form')  
// const button = form.querySelector('button')

form.addEventListener('submit', handlerClick)

function handlerClick(evt) {
  evt.preventDefault();
  const parameters = {
    delay: evt.currentTarget.elements.delay.value,
    step: evt.currentTarget.elements.step.value,
    amount: evt.currentTarget.elements.amount.value
  }
  console.log(parameters)

}



function createPromise(position, delay) {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        console.log('I\'m where')
      } else {
        console.log('титити')
      }
  }, 1000)
  
}


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });



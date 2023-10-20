import Notiflix from 'notiflix';

const form = document.querySelector('.form')  

  
form.addEventListener('submit', handlerClick)

function handlerClick(evt) {
  evt.preventDefault();
  
  const parameters = {
    delay: Number(evt.currentTarget.elements.delay.value),
    step: Number(evt.currentTarget.elements.step.value),
    amount: Number(evt.currentTarget.elements.amount.value)
  }

 let delay = parameters.delay;
  // console.log(delay)
  
  for (let position = 1; position <= parameters.amount; position += 1){
    

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
    delay += parameters.step;

    createPromise(position, delay);
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
     setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay }) 
      } else {
        rej({ position, delay })
      }
    }, delay)
  })  
}





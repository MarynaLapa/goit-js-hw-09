import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const elements = {
    picker: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}

elements.btnStart.disabled = true;
elements.hours.classList.add('value-before');
elements.minutes.classList.add('value-before');
elements.seconds.classList.add('value-before'); 

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
        
        if (selectedDates[0] < new Date()) {
            Notiflix.Notify.warning('Please choose a date in the future');
            // window.alert('Please choose a date in the future')
        } else {
            elements.btnStart.disabled = false;
        }

    },
};

const picker = flatpickr(elements.picker, options)

elements.btnStart.addEventListener('click', handlerStart);

function handlerStart() {
    elements.btnStart.disabled = true;

    const timerId = setInterval(() => {
        const currentDate = new Date();
        const timeDifference = picker.selectedDates[0] - currentDate;

        if (timeDifference <= 0) {
            clearInterval(timerId);
            return;
        }
        
        upDate(convertMs(timeDifference))
    }, 1000);    
}
    
function convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function upDate({ days, hours, minutes, seconds }) {
    elements.days.textContent = addLeadingZero(days); 
    elements.hours.textContent = addLeadingZero(hours);
    elements.minutes.textContent = addLeadingZero(minutes);
    elements.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}



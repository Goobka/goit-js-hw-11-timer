//import './refs';

// const timer = {

//     start() {
//         const targetDate = new Date('Jul 19, 2021');

//         let countdownId = setInterval(() => {
//             const time = targetDate - Date.now();
//             updateCountdown(time);
//         }, 1000);

//         if (Date.now() >= targetDate) {
//             clearInterval(countdownId);
//             return;
//         }
//     }
// }
// //timer.start()

// function updateCountdown(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     refs.daysValue.textContent = days;
//     refs.hoursValue.textContent = hours;
//     refs.minutesValue.textContent = mins;
//     refs.secondsValue.textContent = secs;
// }

// function pad(value) {
//     return String(value).padStart(2, '0');
// }

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    let countdownId = setInterval(() => {
      const time = this.targetDate - Date.now();
      this.updateCountdown(time);
    }, 1000);

    if (Date.now() >= this.targetDate) {
      clearInterval(countdownId);
      return;
    }
  }

  updateCountdown(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const minutes = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    const countdownContainer = document.querySelector(`${this.selector}`);
    const daysValue = countdownContainer.querySelector('[data-value="days"]');
    const hoursValue = countdownContainer.querySelector('[data-value="hours"]');
    const minutesValue = countdownContainer.querySelector(
      '[data-value="mins"]',
    );
    const secondsValue = countdownContainer.querySelector(
      '[data-value="secs"]',
    );

    daysValue.textContent = days;
    hoursValue.textContent = hours;
    minutesValue.textContent = minutes;
    secondsValue.textContent = seconds;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const newCountdown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

newCountdown.start();

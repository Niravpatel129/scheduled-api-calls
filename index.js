const schedule = require('node-schedule');

const arg_hour = 4;
const arg_min = 11;

console.log('initialized', new Date());

const makeAnApiCall = () => {
  console.log('called function');
  let counter = 0;
  let timerId = setInterval(() => {
    const date = new Date();
    counter += 1;

    console.log(
      'current_hour',
      date.getHours(),
      'arg_hour',
      arg_hour,
      'current_minutes',
      date.getMinutes(),
      'arg_min',
      arg_min,
    );

    if (date.getMinutes() > arg_min) {
      clearInterval(timerId);
      console.log('ran this exactly:', counter);
    }
  }, 3000);

  console.log('end of function');
};

console.log('hour', arg_hour, 'minute', arg_min);

const job = schedule.scheduleJob({ hour: arg_hour, minute: arg_min - 1, second: 40 }, function () {
  console.log('hello');
  makeAnApiCall();

  //   job.cancel();
});

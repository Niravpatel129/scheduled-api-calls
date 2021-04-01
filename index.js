const schedule = require('node-schedule');
let rule = new schedule.RecurrenceRule();

const arg_hour = 7;
const arg_min = 15;

// your timezone
rule.tz = 'Canada/Eastern';

// runs at 15:00:00
rule.second = 40;
rule.minute = arg_min - 1;
rule.hour = arg_hour;

console.log('initialized', rule);

const makeAnApiCall = () => {
  console.log('called function');
  let counter = 0;
  let timerId = setInterval(() => {
    const date = new Date();
    const hour = date.getHours() + 1;
    const min = date.getMinutes();
    const sec = date.getSeconds();
    counter += 1;

    console.log(
      'current_hour',
      hour,
      'arg_hour',
      arg_hour,
      'current_minutes',
      min,
      'arg_min',
      arg_min,
    );

    if (min > arg_min && sec > 30) {
      clearInterval(timerId);
      console.log('ran this exactly:', counter);
    }
  }, 2000);

  console.log('end of function');
};

const job = schedule.scheduleJob(rule, function () {
  console.log('hello');
  makeAnApiCall();

  //   job.cancel();
});

const schedule = require('node-schedule');
let rule = new schedule.RecurrenceRule();

const arg_hour = 5;
const arg_min = 48;

// your timezone
rule.tz = 'Canada/Eastern';

// runs at 15:00:00
rule.second = 0;
rule.minute = arg_min - 1;
rule.hour = arg_hour;

console.log('initialized', rule);

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

const job = schedule.scheduleJob(rule, function () {
  console.log('hello');
  makeAnApiCall();

  //   job.cancel();
});

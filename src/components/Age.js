import { DateTime } from 'luxon';

function whatsMyAgeAgain() {
  const diffYears = DateTime.fromISO('1991-12-05')
    .diffNow('years')
    .toObject().years;
  return Math.floor(Math.abs(diffYears));
}

const Age = () => <>{whatsMyAgeAgain()}</>;

export default Age;

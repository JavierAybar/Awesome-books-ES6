import { DateTime } from '../node_modules/luxon/src/luxon.js';

const getTime = () => {
  const currentTime = DateTime.now().setZone('America/Argentina/Buenos_Aires');

  const formatedTime = currentTime.toFormat("MMMM d yyyy',' hh:mm:ss a");

  const elementTime = document.getElementById('current__time');
  elementTime.innerText = formatedTime;
};

export default getTime;
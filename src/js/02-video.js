import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
player.on('timeupdate', throttle(onPlay, 1000));
console.log(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

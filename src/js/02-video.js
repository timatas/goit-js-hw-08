import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
const saveCurrentTime = localStorage.getItem('videoplayer-current-time') || 0;

player.setCurrentTime(saveCurrentTime);

player.on('timeupdate', throttle(currentTime, 1000));

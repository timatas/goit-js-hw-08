import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveCurrentTime =
  localStorage.getItem('videoplayer-current-time') ?? null;

player.setCurrentTime(saveCurrentTime);

const currentTime = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(currentTime, 1000));

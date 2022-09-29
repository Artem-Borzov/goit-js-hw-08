import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(
    function (time) {
      console.log('current video time', time);
      localStorage.setItem('videoplayer-current-time', time.seconds);
    },
    [(wait = 1001)],
    [(options = {})]
  )
);

const savedVideoStorage = localStorage.getItem('videoplayer-current-time');
if (savedVideoStorage) {
  player.setCurrentTime(savedVideoStorage);
}

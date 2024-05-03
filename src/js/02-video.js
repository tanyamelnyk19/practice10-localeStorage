import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_VIDEO_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = getSavedTime();
player.setCurrentTime(savedTime);

const onPlay = function (data) {
  const time = data.seconds;
  const stringifiedTime = JSON.stringify(time);
  localStorage.setItem(STORAGE_VIDEO_KEY, stringifiedTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

function getSavedTime() {
  const savedTime = localStorage.getItem(STORAGE_VIDEO_KEY);
  return savedTime ? JSON.parse(savedTime) : 0;
};

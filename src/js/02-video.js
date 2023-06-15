import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const KEY_VIDEOTIME = 'videoplayer-current-time';
const currentTime = JSON.parse(localStorage.getItem(KEY_VIDEOTIME));
const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('timeupdate', throttle(onUpdateTime, 1000));

function onUpdateTime({ seconds }) {
    localStorage.setItem(KEY_VIDEOTIME, JSON.stringify(seconds))
};

player.setCurrentTime(currentTime).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':    
            break;
        default:  
            break;
    }
});


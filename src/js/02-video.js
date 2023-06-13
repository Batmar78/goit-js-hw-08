import Player from '@vimeo/player';

const KEY_VIDEOTIME = 'videoplayer-current-time';
const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

const onPlay = function({seconds}) {
    // data is an object containing properties specific to that event
    
   localStorage.setItem(KEY_VIDEOTIME, JSON.stringify(seconds));
//     player.getCurrentTime().then(function(seconds) {
//     // seconds = the current playback position
//         // console.log(currentTime)
//         localStorage.setItem(KEY_VIDEOTIME, JSON.stringify(seconds));
// }).catch(function(error) {
//     // an error occurred
// });
    const time = JSON.parse(localStorage.getItem(KEY_VIDEOTIME));
    player.setCurrentTime(time).then(function(seconds) {
    // seconds = the actual time that the player seeked to
        
        console.log(time);

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
};
player.on('play', onPlay);




// console.log(player);
// player.off('play', onPlay);


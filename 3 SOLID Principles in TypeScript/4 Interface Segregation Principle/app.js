/* Interface Segregation Principle (ISP) */
/* It is better to have smaller, focused interfaces rather than large, monolithic ones. */
/* Instead of having single interface for MediaPlayer have individual interfaces for each.*/
/* That is if a class only needs to play audio, it shouldn’t be forced to implement the ‘playVideo()’ and ‘showLyrics()’ methods. We can split the interface into smaller ones.*/
var AudioPlay = /** @class */ (function () {
    function AudioPlay() {
    }
    AudioPlay.prototype.playAudio = function () {
        console.log('Playing Audio');
    };
    return AudioPlay;
}());
var PlayVideo = /** @class */ (function () {
    function PlayVideo() {
    }
    PlayVideo.prototype.playVideo = function () {
        console.log('Playing Video');
    };
    return PlayVideo;
}());
var Lyrics = /** @class */ (function () {
    function Lyrics() {
    }
    Lyrics.prototype.showLyrics = function () {
        console.log('Displaying Lyrics');
    };
    return Lyrics;
}());
var a1 = new AudioPlay();
var v1 = new PlayVideo();
var l1 = new Lyrics();
a1.playAudio();
v1.playVideo();
l1.showLyrics();

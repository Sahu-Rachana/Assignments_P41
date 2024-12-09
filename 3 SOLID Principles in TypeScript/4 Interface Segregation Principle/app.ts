/* Interface Segregation Principle (ISP) */
/* It is better to have smaller, focused interfaces rather than large, monolithic ones. */
/* Instead of having single interface for MediaPlayer have individual interfaces for each.*/
/* That is if a class only needs to play audio, it shouldn’t be forced to implement the ‘playVideo()’ and ‘showLyrics()’ methods. We can split the interface into smaller ones.*/

interface AudioPlayer{
    playAudio():void;
}

interface VideoPlayer{
    playVideo():void;
}

interface LyricsDisplay{
    showLyrics():void;
}

class AudioPlay implements AudioPlayer{
    playAudio(): void {
        console.log('Playing Audio');
    }
}

class PlayVideo implements VideoPlayer {
    playVideo(): void {
        console.log('Playing Video');
    }
}

class Lyrics implements LyricsDisplay {
    showLyrics(): void {
        console.log('Displaying Lyrics');
    }
}

let a1 = new AudioPlay();
let v1 = new PlayVideo();
let l1 = new Lyrics();
a1.playAudio();
v1.playVideo();
l1.showLyrics();
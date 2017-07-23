import Expo from 'expo';
let audioObject = null;

const playAudio = async () => {

    console.log('play audio');

    audioObject = new Expo.Audio.Sound();

    try {
        await audioObject.loadAsync(require('./curseMusic.mp3'));
        await audioObject.playAsync();
        await audioObject.setVolumeAsync(0.3);
        await audioObject.setIsLoopingAsync(true);
        // Your sound is playing!
    } catch (error) {
        console.log(error);// An error occurred!
    }
};

const stopAudio = async () => {

    console.log('stop audio');

    audioObject.stopAsync();
}

export {playAudio, stopAudio};

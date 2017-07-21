const birdSprite = {
  name:"bird",
  size: {width: 50, height: 50},
  animationTypes: ['IDLE', 'WALK', 'EAT', 'CELEBRATE', 'DISGUST', 'ALL'],
  frames: [
    require('./Frame-1.png'),
    require('./frame-2.png'),
    require('./frame-3.png'),
    require('./frame-4.png'),
  ],
  animationIndex: function getAnimationIndex (animationType) {
    switch (animationType) {
      case 'IDLE':
        return [0];
      case 'WALK':
        return [1,2,3,0];
      case 'EAT':
        return [4,5,4,0];
      case 'CELEBRATE':
        return [6,7,6,0,6,7,6,0];
      case 'DISGUST':
        return [0,8,8,8,8,0];
      case 'ALL':
        return [0,1,2,3,4,5,6,7,8];
    }
  },
};

export {birdSprite};
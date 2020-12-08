//PILOTE
function Pilote(name) {
  this.name = name;
  const props = {};
  let prevProps = {};

  this.receiveData = function (data) {
    prevProps = Object.assign({}, props);
    // prevProps = {...props}
    props.state =  data.state;
    props.position =  data.position;
    props.origin =  data.origin;
  };

  this.getState = function() {
    return props.state;
  };
  
  this.speak = function() {
    switch (props.state) {
      case 'ready':
        return `Here we go! I'm ${name}`;
      case 'happy':
        return 'Let\'s have some fun!';
      case 'sad':
        return `Outch!!! Damn ${props.origin}`;
      case 'normal':
        return '';
      case 'finish':
        switch (props.position) {
          case 1:
            return 'I\'m the best';
          case 2:
            return 'Could be the best';
          default:
            return 'Will be better next time';
        }
    }
  };

  this.needUpdate = function() {
    return JSON.stringify(prevProps) !== JSON.stringify(props);
  }
}

const pilote = new Pilote("Mario");
pilote.receiveData({ state: "ready" });
if (pilote.needUpdate()) console.log("Speak ready", pilote.speak());
pilote.receiveData({ state: "normal" });
if (pilote.needUpdate()) console.log("Speak normal", pilote.speak());
pilote.receiveData({ state: "normal" });
if (pilote.needUpdate()) console.log("Speak normal", pilote.speak());
pilote.receiveData({ state: "happy" });
if (pilote.needUpdate()) console.log("Speak happy", pilote.speak());
pilote.receiveData({ state: "sad", origin: "Luigi" });
if (pilote.needUpdate()) console.log("Speak sad", pilote.speak());
pilote.receiveData({ state: "finish", position: 1 });
if (pilote.needUpdate()) console.log("Speak finish", pilote.speak());
pilote.receiveData({ state: "finish", position: 1 });
if (pilote.needUpdate()) console.log("Speak finish", pilote.speak());


//VEHICULE
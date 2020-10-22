const ucfirst = (chaine) => {
  if (typeof chaine !== 'string' || chaine === '') return '';
  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
};

const capitalize = (chaine) => {
  if (typeof chaine !== 'string' || chaine === '') return '';
  return chaine.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const camelCase = (chaine) => {
  if (typeof chaine !== 'string' || chaine === '') return '';
  return chaine.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
};

const snake_case = (chaine) => {
  if (typeof chaine !== 'string' || chaine === '') return '';
  return chaine.toLowerCase().split(' ').join('_');
};

const leet = (chaine) => {
  const correspondance = {a: '4', e: '3', i: '1', o: '0', u: '(_)', y: '7'};
  if (typeof chaine !== 'string' || chaine === '') return '';
  for (const key in correspondance) { chaine = chaine.split(key).join(correspondance[key]);}
  return chaine;
};

const pro_access = (object, chemin) => {
  if (typeof object !== 'object' || object === null) return 'Is not a object';
  if (typeof chemin !== 'string' || chemin === '') return object;
  let error = '';
  chemin.split('.').map(child => typeof object[child] === 'undefined' && error === '' ? error = chemin.split(child)[0] + child + ' not exist' : object = object[child]);
  return error ? error : object;
};

function verlan(chaine) {
  if (typeof chaine !== 'string' || chaine === '') return '';
  let result = '';
  chaine.split(' ').map(word => word.split('.').map(letter => result += letter.split('').reverse().join('') + ' ').join(' '));
  return result;
}

function yoda(chaine) {
  if (typeof chaine !== 'string' || chaine === '') return '';
  return chaine.split(' ').reverse().join(' ');
}

const chaine = 'bonjour le portugal';

console.log('ucfirst : ', ucfirst(chaine));

console.log('capitalize : ', capitalize(chaine));

console.log('camelCase : ', camelCase(chaine));

console.log('snake_case : ', snake_case(chaine));

console.log('leet : ', leet(chaine));

const prairie = {animal:{type: {name: 'chien'}}};
console.log('pro_access : ', pro_access(prairie, 'animal.typee'));

console.log('verlan : ', verlan(chaine));

console.log('yoda : ', yoda(chaine));

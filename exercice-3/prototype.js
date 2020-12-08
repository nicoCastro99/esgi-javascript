String.prototype.ucfirst = function () {
  if (this === "") return "";
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.capitalize = function () {
  if (this === '') return '';
  return this.split(" ").map((word) => word.toLowerCase().ucfirst()).join(" ");
};

String.prototype.camelCase = function () {
  if (this === '') return '';
  return this.replace(/[_-]/g, ' ').capitalize().replace(/[\s+]/g, '');
};

String.prototype.snake_case = function () {
  if (this === '') return '';
  return this.toLowerCase().split(' ').join('_');
};

String.prototype.leet = function () {
  const correspondance = {a: '4', e: '3', i: '1', o: '0', u: '(_)', y: '7'};
  if (this === '') return '';
  let chaine = this;
  for (const key in correspondance) { chaine = chaine.split(key).join(correspondance[key]);}
  return chaine;
};

String.prototype.verlan = function () {
  if (this === '') return '';
  return this.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
};

String.prototype.yoda = function () {
  if (this === '') return '';
  return this.split(' ').reverse().join(' ');
};

Object.prototype.pro_access = function (obj) {
  if (typeof obj !== 'object' || obj === null) return this + ' not exist';
  if (this === '') return obj;

  for (let child of this.split('.')) {
    if (typeof obj[child] === 'undefined') {
      return this.split(child)[0] + child + ' not exist';
    }
    obj = obj[child];
  }
  return obj;
};
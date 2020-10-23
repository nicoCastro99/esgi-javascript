function type_check_v1(variable, type) {
  if ('object' === typeof variable) {
    if ('null' === type) {
      return variable === null;
    }

    if ('array' === type) {
      return Array.isArray(variable);
    }

    if ('object' === type) {
      return variable !== null && Array.isArray(variable) === false;
    }

    return false;
  }

  return type === typeof variable;
}

// console.log(type_check_v1(2, 'number'));
// console.log(type_check_v1('test', 'string'));
// console.log(type_check_v1({}, 'object'));
// console.log(type_check_v1({}, 'number'));
// console.log(type_check_v1(null, 'object'));

function type_check_v2(variable, config) {
  if (typeof(config) !== 'object' || Array.isArray(config) || config === null) {
    return false;
  }

  for(const key in config) {
    switch(key) {
      case 'type':
        if(!type_check_v1(variable, config['type'])) return false;
        break;
      case 'value':
        if (JSON.stringify(config['value']) !== JSON.stringify(variable)) return false;
        break;
      case 'enum':
        if (!Array.isArray(config['enum'])) return false;
        for (const element of config['enum']) {
          if (JSON.stringify(element) === JSON.stringify(variable)) {
            return true;
          }
        }
        return false;
    }
  }
  return true;
}
// console.log(type_check_v2({prop1: 1}, {type: 'object'}));
// console.log(type_check_v2('foo', {type: 'string', value: 'foo'}));
// console.log(type_check_v2('bar', {type: 'string', value: 'foo'}));
// console.log(type_check_v2(3, {enum: ['foo', 'bar', 3]}));

function type_check(variable, types) {
  if (!types.properties) return type_check_v2(variable, types);
  for (const props in types.properties) {
    if (!type_check(type_check_v1(arg, 'object') ? variable[props] : variable, types.properties[props])) return false;
  }
  return true;
}

// console.log(type_check(
//   {
//     id: 28,
//     name: 'nicolas',
//     detail: {
//       age: 21
//     },
//     sport: ['foot', 'tennis'],
//   },
//   {
//     type: 'object',
//     properties: {
//         id: { type: 'number' },
//         name: { type: 'string', enum: ['robert', 'nicolas', 'michel'] },
//         detail: {
//             type: 'object',
//             properties: {
//               age: {
//                 type: 'number'
//               }
//             }
//           },
//         sport: {
//             type: 'array',
//             enum: [['foot', 'basket'], ['foot', 'tennis']],
//         }
//     }
//   }
// ));
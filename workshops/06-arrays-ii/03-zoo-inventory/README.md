### Zoo Inventory

Define a function, `zooInventory`, that accepts a multi-dimensional array of
animal facts.

`zooInventory` should return a new, flat array. Each element in the new array
should be a sentence about each of the animals in the zoo.

```javascript
let myZoo = [
  ['King Kong', ['gorilla', 42]],
  ['Nemo', ['fish', 5]],
  ['Punxsutawney Phil', ['groundhog', 11]]
];

zooInventory(myZoo);
/* => ['King Kong the gorilla is 42.',
       'Nemo the fish is 5.'
       'Punxsutawney Phil the groundhog is 11.']
*/
```

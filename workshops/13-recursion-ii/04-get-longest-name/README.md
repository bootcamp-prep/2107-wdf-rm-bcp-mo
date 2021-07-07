### Get Longest Name

Write a function, getLongestName, that takes an object. The object represents
a family tree. Return the longest name in the family.


```javascript
let family = {
  'Beverly Marquez': {
    'Nina Rhone': {
      'William Rhodes': null,
      'Paul Nell': null,
      'Sir Paddington the Fourth, of the county Wilstonshire': null
    }
  }
};

getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'
```

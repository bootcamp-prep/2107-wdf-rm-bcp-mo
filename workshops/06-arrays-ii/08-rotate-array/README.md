### Rotate Array

Define a function, `rotateArray`, that accepts two arguments:
  1. originalArray (array)
  2. rotateNum (number)


If the rotateNum is positive, `rotate` should return a copy of the original
array rotated to the right by the rotateNum of indices.

```javascript
rotate([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]
```

If the rotateNum is negative, `rotate` should return a copy of the original
array rotated to the left by the rotateNum of indices.

```javascript
rotate([1, 2, 3, 4, 5], -1) // => [2, 3, 4, 5, 1]
```

If the rotateNum is 0, `rotate` should return a copy of the original array
without rotating it.

```javascript
rotate([1, 2, 3, 4, 5], 0) // => [1, 2, 3, 4, 5]
```

You can assume the absolute value of rotateNum will be less than the length
of the original array.

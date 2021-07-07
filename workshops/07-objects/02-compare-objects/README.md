### Compare Objects

Define a function, `compareObjects`, that accepts two objects as arguments.

`compareObjects` should return true if both objects have exactly the same
key/value pairs. Otherwise, `compareObjects` should return false. Assume the
objects are not nested.

```javascript
compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true

compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
```

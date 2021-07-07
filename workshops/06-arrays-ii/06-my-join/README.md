### My Join

Define a function, `myJoin`, that accepts up to two arguments:
  1. array
  2. separator (string, optional)

`myJoin` should return a string with all of the elements from the array joined
togther. The separator should separate the joined elements:

```javascript
myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"
```

If separator is undefined, use ',' as the default separator.

```javascript
myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"
```

If any elements in the array are undefined or null, they should be replaced with
an empty string in the returned string.

```javascript
myJoin(['hello', undefined, 'world'], '-'); // => "hello--world"
```

Do not use the built-in [`.join` array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/joins) in your answer. Feel free to
use it in all future problems though!

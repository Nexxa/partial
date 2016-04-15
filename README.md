# partial

Partial application of arguments to function.

## API

### `partial(fn[, arg1[, arg2[, ...]]])`

#### Parameters

* **fn** - *{Function}*
  <br/> The function

* **arg1, arg2, ...** - _{\*}_
  <br/> Partially applied arguments

#### Returns

*{Function}* - The function with supplied arguments partially applied

#### Example

```javascript
function sum(x, y) {
  return x + y;
}

const sum1 = partial(sum, 1);

sum(1, 2); // 3
sum1(2);   // 3
sum1(4);   // 5
```

## Contribution

Fork the repo and send pull requests.

`npm test` to run tests, `npm run lint` to run eslint

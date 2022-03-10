# js-element-spy

Detects your element in viewport and allows you to add a callback function.

## Installation

Use npm to install js-element-spy.

```
npm install js-element-spy --save
```

## Usage

```js
import { elementSpy } from 'js-element-spy';

elementSpy(
  '.my-element',
  () => {
    // Set your logic here
  },
  'scroll'
);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

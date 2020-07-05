# easy-regexp_lib
<img src="https://img.shields.io/npm/l/vue.svg?sanitize=true" alt="License">
it is a library to use regular expression in javascript easier.
</br>


## Install
```js
npm i easy-regexp_lib
```

## Usage
```js
import regExpLib from "easy-regexp_lib";

let test = regExpLib('a').then(['a',"b","c"],1).test();  //array['a',"b","c"] has element "a",so return true;
let test2 = regExpLib('a').then(['v',"d","e"],1).test();  //['v',"d","e"] doesn't include element "a",so return false;
```

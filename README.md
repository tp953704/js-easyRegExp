# easy-regexp_lib
<img src="https://img.shields.io/npm/v/easy-regexp_lib" alt="version">    <img src="https://img.shields.io/npm/l/vue.svg?sanitize=true" alt="License">     <img src="https://img.shields.io/npm/dm/easy-regexp_lib" alt="License">   <img src="https://img.shields.io/github/size/tp953704/js-easyRegExp/dist/index-es.min.js" alt="size">
   [![Build Status](https://travis-ci.org/tp953704/js-easyRegExp.svg?branch=master)](https://travis-ci.org/tp953704/js-easyRegExp)


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
## Event
### 1. then(array,int)  
to set the conditions for regular expressions  
```js
regExpLib(inputString).then(conditionArray1,1).then(conditionArray2,2);//The first character have to include 
//conditionArray1, the second and third characters have to include conditionArray2
```
### 2. test()  
retrun whether the inputStr correspond the condition(true or false)
```js
regExpLib("1234").then([1],1).then([2,3,4],3).test();//return true;
```
### 3. replace(string)
Turn the non-correspond part into string
```js
regExpLib("1234").then([1],1).then([2,3],3).replace(0);//return "1230"
```

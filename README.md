# Selekt
A super basic element grabber

## Install
```
npm install selekt
```

## Usage
```javascript
const selekt = require("selekt");

or

import { getClass, getId } from "selekt";


const el = getClass("test-class");
const el = getClass(".test-class");

const el = getId("test-id");
const el = getId("#test-id");
```

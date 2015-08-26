# plott-rssi-quality

[![build status](https://secure.travis-ci.org/Plott/plott-rssi-quality.png)](http://travis-ci.org/Plott/plott-rssi-quality)

Converts RSSI in dBm to quality percentage.


### `plott.rssiQuality(dBm)`

Converts RSSI dBm to WiFi signal strength percentage (quality).

### Parameters

| parameter | type    | description |
| --------- | ------- | ----------- |
| `dBm`     | Integer | RSSI dBm    |


### Example

```js
var quality = plott.rssiQuality(-75);

//=quality
```


**Returns** `Number`, WiFi signal quality

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install plott-rssi-quality
```

## Tests

```sh
$ npm test
```



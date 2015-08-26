/**
 * Converts RSSI dBm to WiFi signal strength percentage (quality).
 *
 * @module plott/rssiQuality
 * @category helper
 * @param {Integer} dBm RSSI dBm
 * @return {Number} WiFi signal quality
 * @example
 * var quality = plott.rssiQuality(-75);
 *
 * //=quality
 */
var getQuality = function (dBm) {
  return parseFloat(((2 * (dBm + 100)) / 100).toFixed(2));
}

module.exports = function (dBm) {
  if (!Number.isInteger(dBm)) throw new Error ('dBm must be an integer');
  var quality = dBm <= -100 ? 0 : dBm >= -50 ? 100 : getQuality(dBm);
  return quality;
};

class Utils {

  /**
 * @param {Number} val - Adds zero if val is less then 10
 */
  static pad = (val) => {
    if (val < 10) {
      return '0' + val
    }
    return val
  }

  static clamp = (val, min, max) => {
    if (val < min) {
      return min
    }
    else if (val > max) {
      return max
    }
    else {
      return val
    }
  }

  static map = (x, in_min, in_max, out_min, out_max) => {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }


  static flatMatrix = (arr, d = 1) => {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? this.flatMatrix(val, d - 1) : val), [])
      : arr.slice();
  };


  static getWaterInfo = (value, depth = 45) => {
    let _waterType = ''
    let _waterDepth = 0
    let _salinity = 0
    let _salinity_percent = 0
    let _rate = 0
    let _wet_dirt = false

    if (value < 6) {
      _waterType = 'not_connected'
      _waterDepth = 0
    }
    else if (value > 220 && value <= 285) {
      _waterType = 'no_water'
      _wet_dirt = true
    }
    else if (value > 285 && value <= 340) {
      _waterType = 'high_fresh_water'
      _waterDepth = Math.round((value / 2)) + depth
      _rate = Math.trunc(this.map(value, 285, 340, 0, 75))

    }
    else if (value > 340 && value <= 380) {
      _waterType = 'fresh_water'
      _waterDepth = Math.round((value / 2) - 20) + depth
      _rate = Math.trunc(this.map(value, 340, 380, 0, 75))

    }
    else if (value > 380 && value <= 420) {
      _waterType = 'mineral_water'
      _waterDepth = Math.round((value / 2) - 25) + depth
      _rate = Math.trunc(this.map(value, 380, 420, 0, 75))

    }
    else if (value > 420 && value <= 460) {
      _waterType = 'high_mineral_water'
      _waterDepth = Math.round((value / 2) - 30) + depth
      _rate = Math.trunc(this.map(value, 420, 460, 0, 75))

    }
    else if (value > 460 && value <= 500) {
      _waterType = 'salty_water'
      _waterDepth = Math.round((value / 2) - 35) + depth
      _rate = Math.trunc(this.map(value, 460, 500, 0, 75))

    }
    else if (value > 500 && value <= 540) {
      _waterType = 'very_salty_water'
      _waterDepth = Math.round((value / 2) - 45) + depth
      _rate = Math.trunc(this.map(value, 500, 540, 0, 75))

    }
    else if (value > 1000) {
      _waterType = 'short_circuit'
      _waterDepth = 0
    }
    else {
      _waterType = 'no_water'
      _waterDepth = 0

    }

    if (value >= 285 && value <= 540) {
      _salinity = Math.trunc(this.map(value, 285, 540, 600, 1200))
      _salinity_percent = Math.trunc(this.map(value, 285, 540, 0, 100))
    }

    const result = {
      water_type: _waterType,
      water_depth: _waterDepth !== 0 ? _waterDepth + ' - ' + (_waterDepth + 40) : 0,
      sensor_value: value,
      salinity: _salinity,
      salinity_percent: _salinity_percent,
      rate: _rate,
      wet_dirt: _wet_dirt
    }

    return result
  }

}

export default Utils
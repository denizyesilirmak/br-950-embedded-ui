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

}

export default Utils
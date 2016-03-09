import getBox from './utilities/get-box';
import getDistance from './methods/get-distance';
import getOverlap from './methods/get-overlap';
import detectOverlap from './methods/detect-overlap';
import getPivotAngle from './methods/get-pivot-angle';
import moveInside from './methods/move-inside';
import contains from './methods/contains';
import canContain from './methods/can-contain';
import canCoexist from './methods/can-coexist';
import canFitAround from './methods/can-fit-around';
import findClosest from './methods/find-closest';
import fitAround from './methods/fit-around';
import shrinkToFit from './methods/shrink-to-fit';


module.exports = {
  getBox: getBox,
  getDistance: getDistance,
  getOverlap: getOverlap,
  detectOverlap: detectOverlap,
  getPivotAngle: getPivotAngle,
  moveInside: moveInside,
  contains: contains,
  canContain: canContain,
  canCoexist: canCoexist,
  canFitAround: canFitAround,
  findClosest: findClosest,
  fitAround: fitAround,
  shrinkToFit: shrinkToFit
};

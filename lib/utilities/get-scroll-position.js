'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // modern browsers
  if (typeof window.pageXOffset !== 'undefined' && typeof window.pageYOffset !== 'undefined') {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    };
  }

  // obsolete browsers
  if (typeof document_root.scrollLeft !== 'undefined' && typeof document_root.scrollTop !== 'undefined') {
    return {
      left: document_root.scrollLeft,
      top: document_root.scrollTop
    };
  }

  return { left: 0, top: 0 };
};

/**
 * Cross-browser reference to the root document node.
 * @type {Element|Node|HTMLElement}
 */
var document_root = exports.document_root = document.documentElement || document.body.parentNode || document.body;

/**
 * Cross-browser function to get left and top position of viewport relative to
 * the document.
 * @returns {*}
 */
// Module pattern applied to js
// reference: http://www.theroadtosiliconvalley.com/technology/javascript-module-pattern/

var MYCOMPANY = MYCOMPANY || {};

// note the use of namespacing - similar to jQuery.
MYCOMPANY.Page = (function () {
    'use strict';

    // [ private properties ]
    // note the chaining of var declarations vs a var on each line
    var pageTitle    = "blank",
        isEnabled    = false,
        array_string = "[object Array]",
        ops          = Object.prototype.toString,
        MAX_NUM      = 123; // constants always are in capital case
    // end var

    // [ private methods ]
    // note the use of literal patterns vs constructor functions
    function inArray(haystack, needle) {
        var i   = 0,
            max = 0;
        for (max = haystack.length; i < max; i += 1) {
            if (haystack[i] === needle) {
                return i;
            }
        }
        return -1;
    }

    function isArray(a) {
        return ops.call(a) === array_string; // end var
    }

    // [ public methods ]
    return {
        init: function (title, enabled) {
            pageTitle = title;
            isEnabled = enabled;
        },
        isArray: isArray,
        indexOf: inArray
    };
}());
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getClass(className) {
    var cls = className.replace(".", String());
    var els = document.getElementsByClassName(cls);
    els.first = function first() {
        return els[0] || null;
    };
    els.nth = function nth(index) {
        return els[index] || null;
    };
    return els;
}
exports.getClass = getClass;

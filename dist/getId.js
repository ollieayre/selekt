"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getId(id) {
    var i = id.replace("#", String());
    var el = document.getElementById(i);
    return el;
}
exports.getId = getId;

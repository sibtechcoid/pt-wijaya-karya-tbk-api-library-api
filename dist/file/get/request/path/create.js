"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../../path/create");
function Create(path) {
    return new create_1.default('/file' + path);
}
exports.default = Create;

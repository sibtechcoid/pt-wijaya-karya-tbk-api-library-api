"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./path/create");
const create_2 = require("../../../../body/create");
const update_create_1 = require("../../../../method/update-create");
function Create(text) {
    return Object.assign(update_create_1.default(), create_1.default(), new create_2.default(text));
}
exports.default = Create;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../update/request/path/create");
const create_create_1 = require("../../../../method/create-create");
const create_2 = require("../../../../route/create");
const type_1 = require("../request/body/boolean/type");
const type_2 = require("../../../../id/boolean/type");
function Create() {
    return create_2.default(create_create_1.default(), create_1.default(), (akses) => type_1.default(akses) && type_2.default(akses));
}
exports.default = Create;

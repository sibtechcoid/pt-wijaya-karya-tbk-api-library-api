"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_create_1 = require("../../../method/create-create");
const type_1 = require("../request/body/boolean/type");
const create_1 = require("../request/path/create");
const create_2 = require("../../../route/create");
function Create() {
    return create_2.default(create_create_1.default(), create_1.default(), type_1.default);
}
exports.default = Create;

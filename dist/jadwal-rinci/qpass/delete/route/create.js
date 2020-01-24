"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../create/request/path/create");
const create_2 = require("../../../../route/create");
const delete_create_1 = require("../../../../method/delete-create");
const type_1 = require("../../../../id/boolean/type");
function Create() {
    return create_2.default(delete_create_1.default(), create_1.default(), type_1.default);
}
exports.default = Create;

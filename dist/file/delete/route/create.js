"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delete_create_1 = require("../../../method/delete-create");
const create_1 = require("../../../route/create");
const create_2 = require("../../create/request/path/create");
const type_1 = require("../../../deactivate/update/request/body/boolean/type");
function Create() {
    return create_1.default(delete_create_1.default(), create_2.default(), type_1.default);
}
exports.default = Create;

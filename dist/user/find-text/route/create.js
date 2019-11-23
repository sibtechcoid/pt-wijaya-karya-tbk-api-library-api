"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_create_1 = require("../../../method/read-create");
const create_1 = require("../../../validator/create");
const type_1 = require("../../../text/boolean/type");
const create_2 = require("../request/path/create");
function Create() {
    return Object.assign(read_create_1.default(), create_2.default(), new create_1.default(type_1.default));
}
exports.default = Create;
//# sourceMappingURL=create.js.map
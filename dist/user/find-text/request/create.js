"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_create_1 = require("../../../method/read-create");
const create_1 = require("../../../body/create");
const create_2 = require("./path/create");
function Create(text) {
    return Object.assign(read_create_1.default(), create_2.default(), new create_1.default(text));
}
exports.default = Create;
//# sourceMappingURL=create.js.map
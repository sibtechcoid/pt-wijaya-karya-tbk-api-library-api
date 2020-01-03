"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../../body/create");
const create_2 = require("../path/create");
const read_create_1 = require("../../../../method/read-create");
function Create(id) {
    return Object.assign(read_create_1.default(), create_2.default(), new create_1.default(id));
}
exports.default = Create;
//# sourceMappingURL=create.js.map
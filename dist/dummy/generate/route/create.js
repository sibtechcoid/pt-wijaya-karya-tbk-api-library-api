"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../route/create");
const create_2 = require("../request/path/create");
const standard_1 = require("../../../method/standard");
const type_1 = require("../../../method/type/type");
function Create() {
    return create_1.default(new standard_1.default(type_1.default.GET), create_2.default(), (v) => true);
}
exports.default = Create;
//# sourceMappingURL=create.js.map
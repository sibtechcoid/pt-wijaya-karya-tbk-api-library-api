"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../request/path/create");
const create_2 = require("../../../../route/create");
const standard_1 = require("../../../../method/standard");
const type_1 = require("../../../../method/type/type");
const type_2 = require("../request/body/boolean/type");
function Create() {
    return create_2.default(new standard_1.default(type_1.default.GET), create_1.default(), type_2.default);
}
exports.default = Create;
//# sourceMappingURL=create.js.map
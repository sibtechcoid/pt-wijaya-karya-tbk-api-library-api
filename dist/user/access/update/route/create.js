"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../update/request/path/create");
const update_create_1 = require("../../../../method/update-create");
const create_2 = require("../../../../route/create");
const type_1 = require("../request/body/boolean/type");
function Create() {
    return create_2.default(update_create_1.default(), create_1.default(), type_1.default);
}
exports.default = Create;
//# sourceMappingURL=create.js.map
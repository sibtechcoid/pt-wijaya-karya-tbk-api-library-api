"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../request/path/create");
const create_2 = require("../../../../route/create");
const update_create_1 = require("../../../../method/update-create");
function Create() {
    return create_2.default(update_create_1.default(), create_1.default(), (value) => true);
}
exports.default = Create;
//# sourceMappingURL=create.js.map
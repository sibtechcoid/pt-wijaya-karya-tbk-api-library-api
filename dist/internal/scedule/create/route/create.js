"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_create_1 = require("../../../../method/create-create");
const schedule_1 = require("../request/schedule/boolean/schedule");
const create_1 = require("../../../../route/create");
const create_2 = require("../request/path/create");
function Create() {
    return create_1.default(create_create_1.default(), create_2.default(), schedule_1.default);
}
exports.default = Create;
//# sourceMappingURL=create.js.map
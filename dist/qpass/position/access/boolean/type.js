"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-enum/boolean/type");
const access_1 = require("../access");
function Type(value) {
    return type_1.default(value, access_1.default);
}
exports.default = Type;
//# sourceMappingURL=type.js.map
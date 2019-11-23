"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../../../qpass/place/level/read/response/type/create");
class Create extends create_1.default {
    constructor(id, created, updated, name, abbreviation, access, deactivated) {
        super(id, created, updated, name, abbreviation, deactivated);
        this.access = access;
    }
}
exports.default = Create;
//# sourceMappingURL=create.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../../../internal/position/update/request/position/create");
class Create extends create_1.default {
    constructor(id, created, updated, name, abbreviation, access, group) {
        super(id, name, abbreviation, access, group);
        this.created = created;
        this.updated = updated;
    }
}
exports.default = Create;
//# sourceMappingURL=create.js.map
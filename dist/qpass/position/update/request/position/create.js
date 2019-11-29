"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../create/request/body/create");
class Create extends create_1.default {
    constructor(id, name, abbreviation, access, group) {
        super(name, abbreviation, access, group);
        this.id = id;
    }
}
exports.default = Create;
//# sourceMappingURL=create.js.map
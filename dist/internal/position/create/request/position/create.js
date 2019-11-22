"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../../../qpass/place/business/create/request/business/create");
class Create extends create_1.default {
    constructor(name, abbreviation, access, group) {
        super(name, abbreviation);
        this.access = access;
        this.group = group;
    }
}
exports.default = Create;
//# sourceMappingURL=create.js.map
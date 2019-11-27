"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnprocessableEntityCreate {
    constructor(body) {
        this.body = body;
        this.code = 422;
        this.message = 'Unprocessable Entity';
    }
}
exports.default = UnprocessableEntityCreate;
//# sourceMappingURL=unprocessable-entity-create.js.map
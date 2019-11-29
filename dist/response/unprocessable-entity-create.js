"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnprocessableEntityCreate {
    constructor(message = 'Unprocessable Entity', body) {
        this.message = message;
        this.body = body;
        this.code = 422;
    }
}
exports.default = UnprocessableEntityCreate;
//# sourceMappingURL=unprocessable-entity-create.js.map
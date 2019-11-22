"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InternalServerErrorCreate {
    constructor(body) {
        this.body = body;
        this.code = 500;
        this.message = 'Internal Server Error';
    }
}
exports.default = InternalServerErrorCreate;
//# sourceMappingURL=internal-server-error-create.js.map
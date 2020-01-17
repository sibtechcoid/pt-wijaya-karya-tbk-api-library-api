"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConflictCreate {
    constructor(body) {
        this.body = body;
        this.code = 409;
        this.message = 'Conflict';
    }
}
exports.default = ConflictCreate;

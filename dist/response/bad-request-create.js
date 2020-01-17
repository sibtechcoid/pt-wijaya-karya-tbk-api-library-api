"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConflictCreate {
    constructor(message = 'Bad Request', body) {
        this.message = message;
        this.body = body;
        this.code = 400;
    }
}
exports.default = ConflictCreate;

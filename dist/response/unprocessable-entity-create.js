"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnprocessableEntityCreate {
    constructor(body, message = 'Unprocessable Entity') {
        this.body = body;
        this.message = message;
        this.code = 422;
    }
}
exports.default = UnprocessableEntityCreate;

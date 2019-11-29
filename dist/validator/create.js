"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Create {
    constructor(validator) {
        this.validator = validator;
    }
    validate(value) {
        return this.validator(value);
    }
}
exports.default = Create;
//# sourceMappingURL=create.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Akses;
(function (Akses) {
    /**
     * receive email on publishing
     */
    Akses["EMAIL_PUBLISH"] = "EMAIL_PUBLISH";
    /**
     * receive email on project approved
     */
    Akses["EMAIL_APPROVE"] = "EMAIL_APPROVE";
    /**
     * receive remainder email
     */
    Akses["EMAIL_REMINDER"] = "EMAIL_REMINDER";
    /**
     * allow approval & rejection
     * if project member does not have this akses, automatically approve
     */
    Akses["UPDATE_APPROVE"] = "UPDATE_APPROVE";
})(Akses || (Akses = {}));
exports.default = Akses;
//# sourceMappingURL=akses.js.map
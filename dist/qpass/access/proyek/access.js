"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Access;
(function (Access) {
    /**
     * receive email on publishing
     */
    Access["EMAIL_PUBLISH"] = "EMAIL_PUBLISH";
    /**
     * receive email on project approved
     */
    Access["EMAIL_APPROVE"] = "EMAIL_APPROVE";
    /**
     * receive remainder email
     */
    Access["EMAIL_REMINDER"] = "EMAIL_REMINDER";
    /**
     * allow approval & rejection
     * if project member does not have this access, automatically approve
     */
    Access["UPDATE_APPROVE"] = "UPDATE_APPROVE";
})(Access || (Access = {}));
exports.default = Access;
//# sourceMappingURL=access.js.map
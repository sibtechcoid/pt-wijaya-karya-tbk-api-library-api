"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Qpass Access Role
 */
var Qpass;
(function (Qpass) {
    /**
     * update all data master
     */
    Qpass["UPDATE"] = "UPDATE";
    /**
     * create all data master
     */
    Qpass["CREATE"] = "CREATE";
    /**
     * read all data master
     */
    Qpass["READ"] = "READ";
    /**
     * delete all data master
     */
    Qpass["DELETE"] = "DELETE";
    /**
     * publish audit plan/project
     */
    Qpass["PUBLISH"] = "PUBLISH";
    /**
     * approve audit plan/project, also receive publish email
     */
    Qpass["APPROVE"] = "APPROVE";
})(Qpass || (Qpass = {}));
exports.default = Qpass;
//# sourceMappingURL=qpass.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    /**
     * draft perencanaan
     */
    Status["DRAFT"] = "DRAFT";
    /**
     * perencanaan di submit
     */
    Status["SUBMIT"] = "SUBMIT";
    /**
     * perencanaan di publish menjadi proyek
     */
    Status["PUBLISH"] = "PUBLISH";
    // /** deprecated **/
    // REJECT = "REJECT",
    // /** deprecated **/
    // APPROVE = "APPROVE",
    Status["audit_REJECT"] = "audit_REJECT";
    Status["MEMBER_REJECT"] = "MEMBER_REJECT";
    Status["audit_WAITING"] = "audit_WAITING";
    Status["MEMBER_WAITING"] = "MEMBER_WAITING";
    Status["FINISH"] = "FINISH";
})(Status || (Status = {}));
exports.default = Status;
//# sourceMappingURL=status.js.map
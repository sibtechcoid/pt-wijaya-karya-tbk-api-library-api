"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    /**
     * proses awal
     */
    Status["DRAFT"] = "DRAFT";
    Status["SUBMIT"] = "SUBMIT";
    Status["PUBLISH"] = "PUBLISH";
    // /** deprecated **/
    // REJECT = "REJECT",
    // /** deprecated **/
    // APPROVE = "APPROVE",
    Status["PROJECT_REJECT"] = "PROJECT_REJECT";
    Status["MEMBER_REJECT"] = "MEMBER_REJECT";
    Status["PROJECT_WAITING"] = "PROJECT_WAITING";
    Status["MEMBER_WAITING"] = "MEMBER_WAITING";
    Status["FINISH"] = "FINISH";
})(Status || (Status = {}));
exports.default = Status;
//# sourceMappingURL=status.js.map
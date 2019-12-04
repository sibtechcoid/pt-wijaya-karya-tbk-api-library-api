"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    // not used
    Status["WAITING"] = "WAITING";
    Status["REJECTED"] = "REJECTED";
    /**
     * publish state, after draft
     */
    Status["PUBLISH"] = "PUBLISH";
    /**
     * awal insert
     */
    Status["SUBMITTED"] = "SUBMITTED";
    /**
     * awal insert
     */
    Status["DRAFT"] = "DRAFT";
})(Status || (Status = {}));
exports.default = Status;
//# sourceMappingURL=status.js.map
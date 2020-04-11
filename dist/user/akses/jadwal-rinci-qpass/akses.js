"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Akses;
(function (Akses) {
    Akses["CREATE"] = "CREATE";
    Akses["UPDATE"] = "UPDATE";
    Akses["DELETE"] = "DELETE";
    Akses["READ"] = "READ";
    Akses["SUBMIT"] = "SUBMIT";
    /**
     * allow to update user, schedule
     */
    Akses["UPDATE_USER_SCHEDULE"] = "UPDATE";
    /**
     * allow to update any data other than user, schedule
     */
    Akses["UPDATE_DATA"] = "UPDATE_DATA";
    Akses["SUBMIT_EMAIL_NOTIFICATION"] = "EMAIL_NOTIFICATION";
})(Akses || (Akses = {}));
exports.default = Akses;

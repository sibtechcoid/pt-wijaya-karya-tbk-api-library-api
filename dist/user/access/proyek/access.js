"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Access;
(function (Access) {
    /**
     * - membuat langsung proyek (melewati rencana)
     */
    Access["CREATE"] = "CREATE";
    /**
     * - merubah data (tanggal, member proyek)
     */
    Access["UPDATE_DATA"] = "UPDATE_DATA";
    /**
     * - dapat menyetujui (APPROVE) proyek
     * - menerima notifikasi saat proyek dapat di setujui (PROJECT WAITING)
     */
    Access["UPDATE_APPROVE"] = "UPDATE_APPROVE";
    /**
     * - menonaktifkan (soft delete) / mengaktifkan proyek
     */
    Access["DELETE"] = "DELETE";
    /**
     * - membaca semua project
     */
    Access["READ"] = "READ";
    /**
     * - dapat mem-publish proyek (proses dari SUBMIT)
     */
    Access["UPDATE_PUBLISH"] = "UPDATE_PUBLISH";
    /**
     * - menerima email saat proyek di apporve
     */
    Access["EMAIL_APPROVE"] = "EMAIL_APPROVE";
})(Access || (Access = {}));
exports.default = Access;
//# sourceMappingURL=access.js.map
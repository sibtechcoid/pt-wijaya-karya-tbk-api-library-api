"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Akses;
(function (Akses) {
    /**
     * - membuat langsung proyek (melewati rencana)
     */
    Akses["CREATE"] = "CREATE";
    /**
     * - merubah data (tanggal, member proyek)
     */
    Akses["UPDATE_DATA"] = "UPDATE_DATA";
    /**
     * - dapat menyetujui (APPROVE) proyek
     * - menerima notifikasi saat proyek dapat di setujui (PROJECT WAITING)
     */
    Akses["APPROVE_PROJECT"] = "APPROVE_PROJECT";
    /**
     * - menonaktifkan (soft delete) / mengaktifkan proyek
     */
    Akses["DELETE"] = "DELETE";
    /**
     * - membaca semua project
     */
    Akses["READ"] = "READ";
    /**
     * - dapat mem-publish proyek (proses dari SUBMIT)
     */
    Akses["PUBLISH"] = "PUBLISH";
    /**
     * - menerima email saat proyek di apporve
     */
    Akses["EMAIL_APPROVE"] = "EMAIL_APPROVE";
    /**
     * receive email on publishing
     */
    Akses["EMAIL_PUBLISH"] = "EMAIL_PUBLISH";
    // /**
    //  * receive email on project approved
    //  */
    // EMAIL_APPROVE = 'EMAIL_APPROVE',
    /**
     * receive remainder email
     */
    Akses["EMAIL_REMINDER"] = "EMAIL_REMINDER";
    /**
     * allow approval & rejection
     * if project member does not have this akses, automatically approve
     */
    Akses["APPROVE"] = "APPROVE";
})(Akses || (Akses = {}));
exports.default = Akses;

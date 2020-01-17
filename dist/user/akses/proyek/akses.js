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
    Akses["UPDATE_APPROVE"] = "UPDATE_APPROVE";
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
    Akses["UPDATE_PUBLISH"] = "UPDATE_PUBLISH";
    /**
     * - menerima email saat proyek di apporve
     */
    Akses["EMAIL_APPROVE"] = "EMAIL_APPROVE";
})(Akses || (Akses = {}));
exports.default = Akses;

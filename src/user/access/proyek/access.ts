enum Access  {

    /**
     * - membuat langsung proyek (melewati rencana)
     */
    CREATE = 'CREATE',

    /**
     * - merubah data (tanggal, member proyek)
     */
    UPDATE_DATA = 'UPDATE_DATA',

    /**
     * - dapat menyetujui (APPROVE) proyek
     * - menerima notifikasi saat proyek dapat di setujui (PROJECT WAITING)
     */
    UPDATE_APPROVE = 'UPDATE_APPROVE',

    /**
     * - menonaktifkan (soft delete) / mengaktifkan proyek
     */
    DELETE  = 'DELETE',

    /**
     * - membaca semua project
     */
    READ  = 'READ',
    /**
     * - dapat mem-publish proyek (proses dari SUBMIT)
     */
    UPDATE_PUBLISH = 'UPDATE_PUBLISH',
    /**
     * - menerima email saat proyek di apporve
     */
    EMAIL_APPROVE = 'EMAIL_APPROVE',

}

export default  Access;

enum Akses  {

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
    APPROVE_PROJECT = 'APPROVE_PROJECT',

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
    PUBLISH = 'PUBLISH',
    /**
     * - menerima email saat proyek di apporve
     */
    EMAIL_APPROVE = 'EMAIL_APPROVE',

    /**
     * receive email on publishing
     */
    EMAIL_PUBLISH = 'EMAIL_PUBLISH',
    // /**
    //  * receive email on project approved
    //  */
    // EMAIL_APPROVE = 'EMAIL_APPROVE',
    /**
     * receive remainder email
     */
    EMAIL_REMINDER = 'EMAIL_REMINDER',
    /**
     * allow approval & rejection
     * if project member does not have this akses, automatically approve
     */
    APPROVE = 'APPROVE',

}

export default  Akses;

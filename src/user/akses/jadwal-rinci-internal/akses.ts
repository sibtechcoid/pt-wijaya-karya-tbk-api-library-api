enum Akses {
    /**
     * allow to create any data other than user, schedule
     * allowed at jadwal rinci
     */
    CREATE = "CREATE",
    /**
     * allow to create any data
     * allowed at hasil temuan
     */
    CREATE_EXECUTION = "CREATE_EXECUTION",
    /**
     * allow to update any data
     * allowed at hasil temuan
     */
    UPDATE_EXECUTION = "UPDATE_EXECUTION",
    DELETE = "DELETE",
    READ = "READ",
    SUBMIT = "SUBMIT",
    /**
     * allow to update user, schedule at jadwal rinci
     * allowed at jadwal rinci
     */
    UPDATE_USER_SCHEDULE = "UPDATE_USER_SCHEDULE",
    /**
     * allow to update any data other than user, schedule
     * allowed at jadwal rinci
     */
    UPDATE_DATA = "UPDATE_DATA",
    SUBMIT_EMAIL_NOTIFICATION = "SUBMIT_EMAIL_NOTIFICATION"
}
export default Akses;

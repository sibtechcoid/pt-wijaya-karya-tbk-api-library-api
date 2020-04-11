declare enum Akses {
    CREATE = "CREATE",
    DELETE = "DELETE",
    READ = "READ",
    SUBMIT = "SUBMIT",
    /**
     * allow to update user, schedule
     */
    UPDATE_USER_SCHEDULE = "UPDATE",
    /**
     * allow to update any data other than user, schedule
     */
    UPDATE_DATA = "UPDATE_DATA",
    SUBMIT_EMAIL_NOTIFICATION = "EMAIL_NOTIFICATION"
}
export default Akses;

declare enum Akses {
    /**
     * receive email on publishing
     */
    EMAIL_PUBLISH = "EMAIL_PUBLISH",
    /**
     * receive email on project approved
     */
    EMAIL_APPROVE = "EMAIL_APPROVE",
    /**
     * receive remainder email
     */
    EMAIL_REMINDER = "EMAIL_REMINDER",
    /**
     * allow approval & rejection
     * if project member does not have this akses, automatically approve
     */
    UPDATE_APPROVE = "UPDATE_APPROVE"
}
export default Akses;

declare enum Status {
    /**
     * proses awal
     */
    DRAFT = "DRAFT",
    SUBMIT = "SUBMIT",
    PUBLISH = "PUBLISH",
    REJECT = "REJECT",
    APPROVE = "APPROVE",
    PROJECT_WAITING = "PROJECT_WAITING",
    MEMBER_WAITING = "MEMBER_WAITING"
}
export default Status;

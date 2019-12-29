declare enum Status {
    /**
     * proses awal
     */
    DRAFT = "DRAFT",
    SUBMIT = "SUBMIT",
    PUBLISH = "PUBLISH",
    PROJECT_REJECT = "PROJECT_REJECT",
    MEMBER_REJECT = "MEMBER_REJECT",
    PROJECT_WAITING = "PROJECT_WAITING",
    MEMBER_WAITING = "MEMBER_WAITING",
    FINISH = "FINISH"
}
export default Status;

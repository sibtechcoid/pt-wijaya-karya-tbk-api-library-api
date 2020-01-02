enum Status {
    /**
     * draft perencanaan
     */
    DRAFT = "DRAFT",

    /**
     * perencanaan di submit
     */
    SUBMIT = "SUBMIT",

    /**
     * perencanaan di publish menjadi proyek
     */
    PUBLISH = "PUBLISH",

    // /** deprecated **/
    // REJECT = "REJECT",
    // /** deprecated **/
    // APPROVE = "APPROVE",

    audit_REJECT = "audit_REJECT",
    MEMBER_REJECT = "MEMBER_REJECT",
    audit_WAITING = "audit_WAITING",
    MEMBER_WAITING = "MEMBER_WAITING",
    FINISH = "FINISH",
}

export default Status;
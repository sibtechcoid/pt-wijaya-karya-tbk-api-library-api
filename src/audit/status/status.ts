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

    PROJECT_REJECT = "PROJECT_REJECT",
    MEMBER_REJECT = "MEMBER_REJECT",
    PROJECT_WAITING = "PROJECT_WAITING",
    MEMBER_WAITING = "MEMBER_WAITING",
    FINISH = "FINISH",
}

export default Status;
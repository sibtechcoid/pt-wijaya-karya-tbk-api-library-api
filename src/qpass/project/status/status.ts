enum Status {

    /**
     * proses awal
     */
    DRAFT = 'DRAFT',
    SUBMIT = 'SUBMIT',

    PROJECT_REJECT = 'PROJECT_REJECT',
    PROJECT_WAITING = 'PROJECT_WAITING',
    PROJECT_APPROVE = 'PROJECT_APPROVE',

    MEMBER_REJECT = 'MEMBER_REJECT',
    MEMBER_WAITING = 'MEMBER_WAITING',
    MEMBER_APPROVE = 'MEMBER_APPROVE',
}

export default Status;
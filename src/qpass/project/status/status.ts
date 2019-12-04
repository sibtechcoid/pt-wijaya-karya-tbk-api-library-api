enum Status {

    // not used
    WAITING = 'WAITING',
    REJECTED = 'REJECTED',

    /**
     * publish state, after draft
     */
    PUBLISH = 'PUBLISH',
    /**
     * awal insert
     */
    SUBMITTED = 'SUBMITTED',

    /**
     * awal insert
     */
    DRAFT = 'DRAFT',
}

export default Status;
enum Akses  {
    CREATE = 'CREATE',
    UPDATE = 'UPDATE',
    DELETE  = 'DELETE',
    READ  = 'READ',
    SUBMIT  = 'SUBMIT',

    /**
     * allow to update user, schedule
     */
    UPDATE_USER_SCHEDULE = 'UPDATE_USER_SCHEDULE',

    /**
     * allow to update any data other than user, schedule
     */
    UPDATE_DATA = 'UPDATE_DATA',
    SUBMIT_EMAIL_NOTIFICATION = 'EMAIL_NOTIFICATION',
}

export default  Akses;

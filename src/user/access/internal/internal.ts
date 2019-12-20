enum Internal  {
    /**
     * update all data master
     */
    UPDATE = "UPDATE",
    /**
     * create all data master
     */
    CREATE = "CREATE",
    /**
     * read all data master
     */
    READ = "READ",
    /**
     * delete all data master
     */
    DELETE = "DELETE",

    /**
     * publish audit plan/project
     */
    PUBLISH = "PUBLISH",

    /**
     * approve audit plan/project, also receive publish email
     */
    APPROVE = "APPROVE"
}

export default  Internal;

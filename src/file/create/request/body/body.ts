import UpdateBody from "../../../update/request/body/body";

export default interface Body extends Omit<UpdateBody,'path'> {

    /**
     * angular file buffer or node buffer
     * type cannot be forced
     */
    data : File|any;

}
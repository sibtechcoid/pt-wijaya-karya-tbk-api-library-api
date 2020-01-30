/// <reference types="node" />
import UpdateBody from "../../../update/request/body/body";
export default interface Body extends Omit<UpdateBody, 'id'> {
    /**
     * angular file buffer or node buffer
     * type cannot be forced
     */
    data: File | Buffer;
}

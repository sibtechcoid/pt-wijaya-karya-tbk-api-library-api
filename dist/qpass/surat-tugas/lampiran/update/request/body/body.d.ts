import Id from "../../../../../../id/id";
export default interface Body extends Id {
    surat?: number;
    /**
     * angular file buffer or node buffer
     * type cannot be forced
     */
    data?: any;
}

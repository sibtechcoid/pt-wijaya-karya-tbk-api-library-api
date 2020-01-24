import Id from "../../../../id/id";
export default interface Body extends Id {
    path: string;
    /**
     * angular file buffer or node buffer
     * type cannot be forced
     */
    data: File;
}

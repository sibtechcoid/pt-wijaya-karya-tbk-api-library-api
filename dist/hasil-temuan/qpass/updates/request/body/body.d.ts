import Create from "../../../create/request/body/body";
import Update from "../../../update/request/body/body";
export default interface Bodyz {
    audit: number;
    hasil: (Omit<Create, 'audit'> | Omit<Update, 'audit'>)[];
}

import Id from "../../../../id/id";
export default interface Body extends Id {
    audit?: number;
    selesai?: Date | string;
    mulai?: Date | string;
    fungsi?: number[];
    prosedur?: number;
}

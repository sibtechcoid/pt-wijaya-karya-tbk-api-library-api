import Id from "../../../../../id/id";
export default interface Body extends Id {
    project?: number;
    selesai?: Date | string;
    mulai?: Date | string;
    fungsi?: number[];
    prosedur?: number[];
}

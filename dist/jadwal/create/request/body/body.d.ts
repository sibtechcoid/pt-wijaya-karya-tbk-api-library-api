import UpdateBody from "../../../update/request/body/body";
export default interface Body extends UpdateBody {
    rencana: [Date | string, Date | string];
    realisasi?: [Date | string, Date | string];
}

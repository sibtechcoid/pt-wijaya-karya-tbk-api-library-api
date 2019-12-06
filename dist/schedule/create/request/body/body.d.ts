import UpdateBody from "../../../update/request/body/body";
export default interface Body extends UpdateBody {
    plan: [Date | string, Date | string];
    realize?: [Date | string, Date | string];
}

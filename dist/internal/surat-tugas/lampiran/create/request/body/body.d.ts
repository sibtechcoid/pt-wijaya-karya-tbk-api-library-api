import UpdateBody from "../../../update/request/body/body";
export default interface Body extends Omit<UpdateBody, 'id'> {
    surat: number;
    data: any;
}

import UpdateBody from "../../../update/request/body/body";
export default interface Body extends Omit<UpdateBody, 'id'> {
    project: number[];
    nomer: string;
}

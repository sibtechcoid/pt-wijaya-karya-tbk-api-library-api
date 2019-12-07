import UpdateBody from "../../../update/request/body/body";

export default interface Body extends Omit<UpdateBody,'id'> {

    surat : number;

    // angular file buffer or node buffer
    data : any;

}
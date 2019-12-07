
import BaseObject from "../../../../../object/read/response/object/object";
import CreateBody from "../../../create/request/body/body";
import Id from "../../../../../id/id";

export default interface Body extends Id {

    // TODO fix any
    project : any;
    nomer : string;
   // type: null|Type;
}
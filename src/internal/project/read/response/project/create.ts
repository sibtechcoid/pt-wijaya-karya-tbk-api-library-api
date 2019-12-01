import Project from "./project";
import Object from "../../../../object/read/response/object/object";
import Status from "../status/status";
import Member from "../../../../member/read/response/member/member";


export default class Create implements Project {

    constructor(
        public id : number,
        public created : string,
        public updated : string,
        public deactivate : string|null,
        public plan : [string, string],
        public realize : [string, string],
        public status : Status,
        public object : Omit<Object, "type">,
        public members : Member[],
    ) {}
}
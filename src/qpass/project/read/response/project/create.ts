import Project from "./project";
import Type from "../../../type/create/request/type/type";
import Place from "../../../../place/read/response/place/place";
import Status from "../status/status";
import Member from "../../../../member/read/response/member/member";


export default class Create implements Project {

    constructor(
        public id : number,
        public created : string,
        public updated : string,
        public deactivated : string|null,
        public plan : [string, string],
        public realize : [string, string],
        public status : Status,
        public place : Omit<Place, "type">,
        public members : Member[],
    ) {}
}
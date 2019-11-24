import Project from "./project";
import Type from "../../../type/create/request/type/type";
import Place from "../../../../place/read/response/place/place";
import Status from "../status/status";
import Member from "../../../create/request/member/member";

export default class Create implements Project {

    constructor(
        public id : number,
        public created : string,
        public updated : string,
        public deactivated : string|null,
        public planned : ["2019-12-16T20:24:00.000Z", "2020-12-16T20:24:00.000Z"],
        public realized : ["0000-00-00 00:00:00","0000-00-00 00:00:00"],
        public status : Status,
        public place : Omit<Place, "type">,
        public members : Member[],
    ) {}
}
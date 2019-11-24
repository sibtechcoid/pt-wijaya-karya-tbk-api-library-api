import Project from "./project";
import Place from "../../../../place/read/response/place/place";
import Status from "../status/status";
import Member from "../../../create/request/member/member";
export default class Create implements Project {
    id: number;
    created: string;
    updated: string;
    deactivated: string | null;
    planned: ["2019-12-16T20:24:00.000Z", "2020-12-16T20:24:00.000Z"];
    realized: ["0000-00-00 00:00:00", "0000-00-00 00:00:00"];
    status: Status;
    place: Omit<Place, "type">;
    members: Member[];
    constructor(id: number, created: string, updated: string, deactivated: string | null, planned: ["2019-12-16T20:24:00.000Z", "2020-12-16T20:24:00.000Z"], realized: ["0000-00-00 00:00:00", "0000-00-00 00:00:00"], status: Status, place: Omit<Place, "type">, members: Member[]);
}

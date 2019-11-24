import Project from "./project";
import Place from "../../../../place/read/response/place/place";
import Status from "../status/status";
import Member from "../../../../member/read/response/member/member";
export default class Create implements Project {
    id: number;
    created: string;
    updated: string;
    deactivated: string | null;
    planned: [string, string];
    realized: [string, string];
    status: Status;
    place: Omit<Place, "type">;
    members: Member[];
    constructor(id: number, created: string, updated: string, deactivated: string | null, planned: [string, string], realized: [string, string], status: Status, place: Omit<Place, "type">, members: Member[]);
}

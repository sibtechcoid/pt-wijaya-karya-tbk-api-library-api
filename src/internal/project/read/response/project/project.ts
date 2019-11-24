import Type from "../../../type/create/request/type/type";
import Record from "../../../../../record/record";
import Deactivated from "../../../../../deactivated/deactivated";
import Id from "../../../../../id/id";
import Status from "../status/status";
import Place from "../../../../place/read/response/place/place";
import Member from "../../../../member/read/response/member/member";


export default interface Project extends Record, Deactivated, Id {

    planned : [string, string];
    realized : [string, string];
    status : Status;
    place : Omit<Place, "type">;
    members : Member[]
}
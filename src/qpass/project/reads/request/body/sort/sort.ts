import ReadsBody from "../../../response/body/body";
import BaseSort from "../../../../../../sort/sort";

export default interface Sort extends BaseSort<Omit<ReadsBody,'status'|'object'|'members'|'type'>> {

}

// Deactivate, Id, Schedule, Record  {
//
//     status : ProjectStatus;
//     object : Object;
//     members : Omit<Member,'access'>[]
//     type : Type;
//     //category : Category;
// }

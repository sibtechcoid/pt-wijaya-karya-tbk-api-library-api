import ReadsBody from "../../../response/body/body";
import BaseSort from "../../../../../../sort/sort";
import Mode from "../../../../../../sort/mode/mode";

export default interface Sort extends BaseSort<Omit<ReadsBody,'status'|'object'|'members'|'type'|'plan'|'realize'>> {

    plan ?: [Mode, Mode];
    realize ?: [Mode, Mode];
}

// Deactivate, Id, Schedule, Record  {
//
//     status : ProjectStatus;
//     object : Object;
//     members : Omit<Member,'access'>[]
//     type : Type;
//     //category : Category;
// }

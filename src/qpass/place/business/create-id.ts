import Business from "./business";
import Create from "./create";
import Id from "../../../id/id";

export default function CreateId(type : Business, id : Id) : Business & Id {

    return Object.assign(type, id);
}

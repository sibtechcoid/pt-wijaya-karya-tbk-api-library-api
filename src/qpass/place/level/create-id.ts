import Level from "./level";
import Id from "../../../id/id";

export default function CreateId(level : Level, id : Id) : Level & Id {

    return Object.assign(level, id);
}

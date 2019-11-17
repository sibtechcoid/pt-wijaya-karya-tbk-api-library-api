import Data from "../qpass/place/level/create/request/level/level";
import Id from "./id";

export default function CreateWith<Data>(type : Data, id : Id): Data & Id {

    return Object.assign(type, id);
}
import Create from "./create";
import Place from "./place";

export default function Null () : Place {
    return new Create('','', '', 0, 0);
}

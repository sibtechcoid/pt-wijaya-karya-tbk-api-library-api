import CreatePath from "../../../../path/create";
import Path from "./path";

export default function Create(path : string) : Path {

    return new CreatePath('/file' + path);
}

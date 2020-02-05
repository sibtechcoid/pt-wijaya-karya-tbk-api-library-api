import CreatePath from "../../../../path/create";
import Path from "./path";
import Body from "../body/body";

export default function Create(path : string) : Path {

    return new CreatePath('/file' + path);
}

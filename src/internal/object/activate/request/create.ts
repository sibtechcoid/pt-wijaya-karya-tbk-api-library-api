import Request from './request';
import CreatBody from "../../../../body/create";
import Delete from "../../../../method/delete-create";
import Path from "./path/create";
import Active from "../../../../active/active";

export default function Create(activable : Active) : Request {

    return Object.assign(Delete(), Path(), new CreatBody<Active>(activable))
}
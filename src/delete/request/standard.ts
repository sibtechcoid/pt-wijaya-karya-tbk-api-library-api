import Request from './request';
import BaseStandard from '../../request/standard';
import Id from "../../id/id";
import Method from "../../method/method";

export default class Standard<Path extends string> extends BaseStandard<Method.DELETE, Path, Id[]> implements Request<Path> {

    constructor(
        path : Path,
        body : Id[]
    ) {
        super(Method.DELETE, path, body);
    }

}
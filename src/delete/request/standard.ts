import Request from './request';
import Method from "http-method-enum";
import BaseStandard from '../../request/standard';
import Id from "../../id/id";

export default class Standard<Path extends string> extends BaseStandard<Method.DELETE, Path, Id<number>[]> implements Request<Path> {

    constructor(
        path : Path,
        body : Id<number>[]
    ) {
        super(Method.DELETE, path, body);
    }

}
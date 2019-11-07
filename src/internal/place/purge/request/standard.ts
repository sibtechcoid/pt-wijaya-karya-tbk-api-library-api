import Request from './request';
import Id from "../../../../id/id";
import DeleteStandard from '../../../../delete/request/standard';

export default class Standard extends DeleteStandard<'/internal/place'> implements Request {

    constructor(
        body : Id[]
    ) {
        super('/internal/place', body);
    }

}
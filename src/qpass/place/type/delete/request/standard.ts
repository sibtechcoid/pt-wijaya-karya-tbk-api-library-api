import Request from './request';
import Id from "../../../../../id/id";
import DeleteStandard from '../../../../../delete/request/standard';

export default class Standard extends DeleteStandard<'/qpass/place/type'> implements Request {

    constructor(
        body : Id<number>[]
    ) {
        super('/qpass/place/type', body);
    }

}
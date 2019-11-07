import Request from './request';
import Id from "../../../../../id/id";
import DeleteStandard from '../../../../../delete/request/standard';

export default class Standard extends DeleteStandard<'/qpass/place/level'> implements Request {

    constructor(
        body : Id[]
    ) {
        super('/qpass/place/level', body);
    }

}
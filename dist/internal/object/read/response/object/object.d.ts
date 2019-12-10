import Type from "../../../type/read/response/body/body";
import BaseObject from "../../../../../object/read/response/object/object";
import Business from "../../../business/read/response/body/body";
export default interface Object extends BaseObject<Omit<Type, 'business'>, Omit<Business, 'type'>> {
    name: string;
    abbreviation: string;
}

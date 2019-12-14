import Business from "../../../business/read/response/body/body";
import Level from "../../../level/read/response/body/body";
import Type from "../../../type/read/response/body/body";
import BaseObject from "../../../../../object/read/response/object/object";
export default interface Body extends BaseObject<Omit<Type, 'level' | 'business'>, Omit<Business, 'type'>> {
    level: null | Omit<Level, 'type'>;
}

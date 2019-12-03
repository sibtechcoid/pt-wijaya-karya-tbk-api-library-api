import Business from "../../../business/read/response/body/body";
import Level from "../../../level/read/response/body/body";
import BaseObject from "../../../../../object/read/response/object/object";
export default interface Body extends BaseObject<Business> {
    level: null | Omit<Level, 'type'>;
}

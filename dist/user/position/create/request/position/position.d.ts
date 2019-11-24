import BusinessData from "../../../../../qpass/place/business/create/request/business/business";
import Access from "../../../../access/update/request/access/access";
export default interface Position extends BusinessData {
    access: Access;
}

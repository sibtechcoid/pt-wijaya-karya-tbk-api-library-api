import Member from "../../../../../member/member";
import Category from "../../../category/category";
import Schedule from "../../../../../schedule/update/request/body/body";
import Id from "../../../../../id/id";
export default interface Body extends Schedule, Id {
    object?: number;
    members?: Member[];
    category?: Category;
}

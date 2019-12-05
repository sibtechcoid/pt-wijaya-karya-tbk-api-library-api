import Category from "../../../category/category";
import Project from "../../../../../project/create/request/body/body";
import Member from "../../../../../internal/member/create/request/body/body";
import Status from "../../../status/status";
export default interface Body extends Project<Member> {
    status: Status;
    category: Category;
}

import Limit from "../../../../../limit/limit";
import Sort from "./sort/sort";
import Where from "./where/where";

export default interface Body extends Limit {

    where ?: Where;
    sort ?: Sort;
}

import Data from "../../create/request/data/data";
import Success from "../../../../response/success";
import Id from "../../../../id/id";
import Place from "./place/place";

type Response = Success<Place[]>;
export default Response;
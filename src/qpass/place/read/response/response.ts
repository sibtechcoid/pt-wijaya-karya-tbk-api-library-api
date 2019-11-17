import Data from "../../create/request/place/data";
import Success from "../../../../response/success";
import Id from "../../../../id/id";
import Place from "./place/place";

type Response = Success<Place[]>;
export default Response;
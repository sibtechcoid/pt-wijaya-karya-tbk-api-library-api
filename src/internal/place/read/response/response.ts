import Place from "../../place";
import Success from "../../../../response/success";
import NotFound from "../../../../response/not-found";

type Response = NotFound<undefined>|Success<Place<number>>;
export default Response;
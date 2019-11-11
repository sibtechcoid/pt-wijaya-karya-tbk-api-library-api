import Place from "../../place";
import Success from "../../../../response/success";
import NotFound from "../../../../response/not-found";
import Id from "../../../../id/id";

type Response = NotFound<undefined>|Success<Place & Id>;
export default Response;
import User from "../../../create/request/user/user";
import Id from "../../../../id/id";

// no id, use header bearer
export default interface Body  {

    name            ?: string;
    password        ?: string;
    user            ?: string;
    abbreviation    ?: string;
    phone           ?: string;
    email           ?: string;

}
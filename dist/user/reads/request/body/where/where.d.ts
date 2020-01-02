import CreateBody from "../../../../create/request/body/body";
import Deactivate from "../../../../../deactivate/read/request/body/body";
export default interface Where extends Partial<Omit<CreateBody, 'password' | 'user'>>, Deactivate {
}

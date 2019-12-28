// no id, use header bearer
import CreateBody from "../../../create/request/body/body";

export default interface Body extends Partial<Omit<CreateBody,'position'>> {

}

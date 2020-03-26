import Id from "../../../../../id/id";
import CreateBody from "../../../create/request/body/body";
import Tinjauan from "../../../tinjauan/tinjauan";
import Keputusan from "../../../keputusan/keputusan";

export default interface Body extends Partial<Id>, Partial<Omit<CreateBody, 'ditutup'|'catatan'|'submit'>> {


    // /**
    //  * remark
    //  */
    // ditutup : boolean;
    // catatan : string

    // /**
    //  * submitted
    //  */
    // submit : boolean;
}

import Route from "../../../../../../dist/qpass/object/type/update/route/create";
import Type from "../../../../../../dist/qpass/object/type/update/request/body/body";
import Request from "../../../../../../dist/qpass/object/type/update/request/create";
import RequestRoute from "../../../../../request/request-route";


describe('qpass/object/type/update request', () => {

    RequestRoute<Type>(
        Request,
        Route(),
        {
            id : 0,
            name : 'name',
            abbreviation : 'abbreviation'
        }
    );
});

import Route from "../../../../../../dist/qpass/place/type/read/route/create";
import CreateId from "../../../../../../dist/internal/place/type/create-id";
import Type from "../../../../../../dist/internal/place/type/type";
import TypeCreate from "../../../../../../dist/internal/place/type/create";
import IdCreate from "../../../../../../dist/id/create";
import Id from "../../../../../../dist/id/id";
import Request from "../../../../../../dist/qpass/place/type/read/request/create";
import RequestRoute from "../../../../../request/request-route";
import Deactivated from "../../../../../../dist/deactivated/deactivated";

describe('qpass/place/type/read request', () => {

    RequestRoute<Deactivated>((deactivated:Deactivated) => Request(deactivated), Route(),{deactivated:true});
});

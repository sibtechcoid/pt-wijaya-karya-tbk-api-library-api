import Route from "../../../../../../dist/internal/place/type/create/route/create";
import Create from "../../../../../../dist/internal/place/type/create";
import Request from "../../../../../../dist/internal/place/type/create/request/create";
import RequestRoute from "../../../../../request/request-route";

describe('internal/place/type/create', () => {

    RequestRoute((body) => Request(body), Route(), [new Create('name', 'abbreviation')]);
});

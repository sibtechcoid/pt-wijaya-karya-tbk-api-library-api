import Route from "../../../../dist/user/login/route/create";
import Create from "../../../../dist/user/login/create";
import Request from "../../../../dist/user/login/request/create";
import RequestRoute from "../../../request/request-route";

describe('user/login request', () => {

    RequestRoute((body) => Request(body), Route(), new Create('username', 'password'));

});

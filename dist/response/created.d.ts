import Code from "../code/code";
import Body from "../body/body";
export default interface Created<B> extends Code<201>, Body<B> {
}

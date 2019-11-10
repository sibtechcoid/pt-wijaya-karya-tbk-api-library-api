import Code from "../code/code";
import Body from "../body/body";


export default interface Success<B> extends Code<200>, Body<B>  {
}
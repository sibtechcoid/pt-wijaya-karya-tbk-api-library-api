import Mode from "./mode/mode";
export default interface Sort<Entity> {
    sort?: {
        [Key in keyof Entity]?: Mode;
    };
}

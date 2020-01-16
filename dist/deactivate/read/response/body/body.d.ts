/**
 * use for response which tell when it's deactivated
 */
export default interface Body {
    /**
     * Date object compatible
     */
    deactivate: Date | string | null;
}

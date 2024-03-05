/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const ElementContextValue: core.serialization.ObjectSchema<
    serializers.ElementContextValue.Raw,
    DoptApi.ElementContextValue
> = core.serialization.object({
    position: core.serialization.lazyObject(async () => (await import("..")).ElementContextValuePosition),
    content: core.serialization.string(),
    tag: core.serialization.string(),
});

export declare namespace ElementContextValue {
    interface Raw {
        position: serializers.ElementContextValuePosition.Raw;
        content: string;
        tag: string;
    }
}
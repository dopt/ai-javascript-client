/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const ElementContext: core.serialization.ObjectSchema<serializers.ElementContext.Raw, DoptApi.ElementContext> =
    core.serialization.object({
        type: core.serialization.stringLiteral("element"),
        value: core.serialization.lazyObject(async () => (await import("..")).ElementContextValue),
    });

export declare namespace ElementContext {
    interface Raw {
        type: "element";
        value: serializers.ElementContextValue.Raw;
    }
}

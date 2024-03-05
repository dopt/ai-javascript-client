/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const AssistantRequestBodyContextVisual: core.serialization.ObjectSchema<
    serializers.AssistantRequestBodyContextVisual.Raw,
    DoptApi.AssistantRequestBodyContextVisual
> = core.serialization.object({
    type: core.serialization.stringLiteral("visual"),
    value: core.serialization.string(),
});

export declare namespace AssistantRequestBodyContextVisual {
    interface Raw {
        type: "visual";
        value: string;
    }
}

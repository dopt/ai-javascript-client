/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const AssistantSearchRequestBodyContextElementValuePosition: core.serialization.ObjectSchema<
    serializers.AssistantSearchRequestBodyContextElementValuePosition.Raw,
    DoptApi.AssistantSearchRequestBodyContextElementValuePosition
> = core.serialization.object({
    top: core.serialization.number(),
    left: core.serialization.number(),
});

export declare namespace AssistantSearchRequestBodyContextElementValuePosition {
    interface Raw {
        top: number;
        left: number;
    }
}

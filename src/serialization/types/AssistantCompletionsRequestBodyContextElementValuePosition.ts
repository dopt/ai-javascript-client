/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";

export const AssistantCompletionsRequestBodyContextElementValuePosition: core.serialization.ObjectSchema<
    serializers.AssistantCompletionsRequestBodyContextElementValuePosition.Raw,
    DoptApi.AssistantCompletionsRequestBodyContextElementValuePosition
> = core.serialization.object({
    top: core.serialization.number(),
    left: core.serialization.number(),
});

export declare namespace AssistantCompletionsRequestBodyContextElementValuePosition {
    interface Raw {
        top: number;
        left: number;
    }
}

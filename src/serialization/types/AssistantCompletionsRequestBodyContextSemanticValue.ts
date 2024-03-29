/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const AssistantCompletionsRequestBodyContextSemanticValue: core.serialization.ObjectSchema<
    serializers.AssistantCompletionsRequestBodyContextSemanticValue.Raw,
    DoptApi.AssistantCompletionsRequestBodyContextSemanticValue
> = core.serialization.object({
    semanticContent: core.serialization.string(),
    neighboringSemanticContent: core.serialization.string(),
});

export declare namespace AssistantCompletionsRequestBodyContextSemanticValue {
    interface Raw {
        semanticContent: string;
        neighboringSemanticContent: string;
    }
}

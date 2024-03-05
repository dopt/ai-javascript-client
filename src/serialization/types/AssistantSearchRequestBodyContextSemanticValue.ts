/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const AssistantSearchRequestBodyContextSemanticValue: core.serialization.ObjectSchema<
    serializers.AssistantSearchRequestBodyContextSemanticValue.Raw,
    DoptApi.AssistantSearchRequestBodyContextSemanticValue
> = core.serialization.object({
    semanticContent: core.serialization.string(),
    neighboringSemanticContent: core.serialization.string(),
});

export declare namespace AssistantSearchRequestBodyContextSemanticValue {
    interface Raw {
        semanticContent: string;
        neighboringSemanticContent: string;
    }
}
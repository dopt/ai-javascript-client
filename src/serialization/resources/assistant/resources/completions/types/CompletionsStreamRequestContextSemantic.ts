/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as DoptApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CompletionsStreamRequestContextSemanticValue } from "./CompletionsStreamRequestContextSemanticValue";

export const CompletionsStreamRequestContextSemantic: core.serialization.ObjectSchema<
    serializers.assistant.CompletionsStreamRequestContextSemantic.Raw,
    DoptApi.assistant.CompletionsStreamRequestContextSemantic
> = core.serialization.object({
    type: core.serialization.stringLiteral("semantic"),
    value: CompletionsStreamRequestContextSemanticValue,
});

export declare namespace CompletionsStreamRequestContextSemantic {
    interface Raw {
        type: "semantic";
        value: CompletionsStreamRequestContextSemanticValue.Raw;
    }
}

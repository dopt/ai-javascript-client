/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as DoptApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const CompletionsStreamRequestContextSemantic: core.serialization.ObjectSchema<
    serializers.assistant.CompletionsStreamRequestContextSemantic.Raw,
    DoptApi.assistant.CompletionsStreamRequestContextSemantic
> = core.serialization.object({
    type: core.serialization.stringLiteral("semantic"),
    value: core.serialization.lazyObject(
        async () => (await import("../../../../..")).assistant.CompletionsStreamRequestContextSemanticValue
    ),
});

export declare namespace CompletionsStreamRequestContextSemantic {
    interface Raw {
        type: "semantic";
        value: serializers.assistant.CompletionsStreamRequestContextSemanticValue.Raw;
    }
}
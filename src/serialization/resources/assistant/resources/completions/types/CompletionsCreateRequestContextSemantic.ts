/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as DoptApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const CompletionsCreateRequestContextSemantic: core.serialization.ObjectSchema<
    serializers.assistant.CompletionsCreateRequestContextSemantic.Raw,
    DoptApi.assistant.CompletionsCreateRequestContextSemantic
> = core.serialization.object({
    type: core.serialization.stringLiteral("semantic"),
    value: core.serialization.lazyObject(
        async () => (await import("../../../../..")).assistant.CompletionsCreateRequestContextSemanticValue
    ),
});

export declare namespace CompletionsCreateRequestContextSemantic {
    interface Raw {
        type: "semantic";
        value: serializers.assistant.CompletionsCreateRequestContextSemanticValue.Raw;
    }
}

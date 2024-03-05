/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as DoptApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const CompletionsStreamResponseAnswerSourcesItemChunksItem: core.serialization.ObjectSchema<
    serializers.assistant.CompletionsStreamResponseAnswerSourcesItemChunksItem.Raw,
    DoptApi.assistant.CompletionsStreamResponseAnswerSourcesItemChunksItem
> = core.serialization.object({
    chunkId: core.serialization.number(),
    text: core.serialization.string(),
    score: core.serialization.number(),
});

export declare namespace CompletionsStreamResponseAnswerSourcesItemChunksItem {
    interface Raw {
        chunkId: number;
        text: string;
        score: number;
    }
}
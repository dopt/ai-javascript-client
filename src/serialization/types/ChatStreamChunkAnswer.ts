/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const ChatStreamChunkAnswer: core.serialization.ObjectSchema<
    serializers.ChatStreamChunkAnswer.Raw,
    DoptApi.ChatStreamChunkAnswer
> = core.serialization.object({
    answer: core.serialization.string(),
    sources: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).ChatStreamChunkAnswerSourcesItem)
    ),
});

export declare namespace ChatStreamChunkAnswer {
    interface Raw {
        answer: string;
        sources: serializers.ChatStreamChunkAnswerSourcesItem.Raw[];
    }
}
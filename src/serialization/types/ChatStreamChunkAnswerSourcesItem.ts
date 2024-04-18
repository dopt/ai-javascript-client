/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";
import { ChatStreamChunkAnswerSourcesItemChunksItem } from "./ChatStreamChunkAnswerSourcesItemChunksItem";

export const ChatStreamChunkAnswerSourcesItem: core.serialization.ObjectSchema<
    serializers.ChatStreamChunkAnswerSourcesItem.Raw,
    DoptApi.ChatStreamChunkAnswerSourcesItem
> = core.serialization.object({
    id: core.serialization.number(),
    title: core.serialization.string(),
    url: core.serialization.string(),
    chunks: core.serialization.list(ChatStreamChunkAnswerSourcesItemChunksItem),
});

export declare namespace ChatStreamChunkAnswerSourcesItem {
    interface Raw {
        id: number;
        title: string;
        url: string;
        chunks: ChatStreamChunkAnswerSourcesItemChunksItem.Raw[];
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DoptApi from "..";

export type ChatStreamChunk =
    | DoptApi.ChatStreamChunk.Status
    | DoptApi.ChatStreamChunk.Content
    | DoptApi.ChatStreamChunk.Answer;

export declare namespace ChatStreamChunk {
    interface Status extends DoptApi.ChatStreamChunkStatus {
        type: "status";
    }

    interface Content extends DoptApi.ChatStreamChunkContent {
        type: "content";
    }

    interface Answer extends DoptApi.ChatStreamChunkAnswer {
        type: "answer";
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const ChatStreamChunkStatusStatus: core.serialization.Schema<
    serializers.ChatStreamChunkStatusStatus.Raw,
    DoptApi.ChatStreamChunkStatusStatus
> = core.serialization.enum_(["searching", "answering"]);

export declare namespace ChatStreamChunkStatusStatus {
    type Raw = "searching" | "answering";
}

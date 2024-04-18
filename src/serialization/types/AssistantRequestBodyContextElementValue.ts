/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";
import { AssistantRequestBodyContextElementValuePosition } from "./AssistantRequestBodyContextElementValuePosition";

export const AssistantRequestBodyContextElementValue: core.serialization.ObjectSchema<
    serializers.AssistantRequestBodyContextElementValue.Raw,
    DoptApi.AssistantRequestBodyContextElementValue
> = core.serialization.object({
    position: AssistantRequestBodyContextElementValuePosition,
    content: core.serialization.string(),
    tag: core.serialization.string(),
});

export declare namespace AssistantRequestBodyContextElementValue {
    interface Raw {
        position: AssistantRequestBodyContextElementValuePosition.Raw;
        content: string;
        tag: string;
    }
}

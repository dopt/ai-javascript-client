/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";
import { AssistantRequestBodyContext } from "./AssistantRequestBodyContext";

export const AssistantRequestBody: core.serialization.ObjectSchema<
    serializers.AssistantRequestBody.Raw,
    DoptApi.AssistantRequestBody
> = core.serialization.object({
    query: core.serialization.string().optional(),
    context: AssistantRequestBodyContext.optional(),
});

export declare namespace AssistantRequestBody {
    interface Raw {
        query?: string | null;
        context?: AssistantRequestBodyContext.Raw | null;
    }
}

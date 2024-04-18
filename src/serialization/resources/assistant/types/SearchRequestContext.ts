/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as DoptApi from "../../../../api/index";
import * as core from "../../../../core";
import { SearchRequestContextDocument } from "./SearchRequestContextDocument";
import { SearchRequestContextVisual } from "./SearchRequestContextVisual";
import { SearchRequestContextElement } from "./SearchRequestContextElement";
import { SearchRequestContextSemantic } from "./SearchRequestContextSemantic";

export const SearchRequestContext: core.serialization.ObjectSchema<
    serializers.SearchRequestContext.Raw,
    DoptApi.SearchRequestContext
> = core.serialization.object({
    document: SearchRequestContextDocument.optional(),
    visual: SearchRequestContextVisual.optional(),
    element: SearchRequestContextElement.optional(),
    semantic: SearchRequestContextSemantic.optional(),
});

export declare namespace SearchRequestContext {
    interface Raw {
        document?: SearchRequestContextDocument.Raw | null;
        visual?: SearchRequestContextVisual.Raw | null;
        element?: SearchRequestContextElement.Raw | null;
        semantic?: SearchRequestContextSemantic.Raw | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DoptApi from "../../../..";

/**
 * @example
 *     {
 *         userIdentifier: "string",
 *         context: {
 *             document: {
 *                 type: "document",
 *                 value: {
 *                     url: "string",
 *                     title: "string",
 *                     width: 1.1,
 *                     height: 1.1
 *                 }
 *             },
 *             visual: {
 *                 type: "visual",
 *                 value: "string"
 *             },
 *             element: {
 *                 type: "element",
 *                 value: {
 *                     position: {
 *                         top: 1.1,
 *                         left: 1.1
 *                     },
 *                     content: "string",
 *                     tag: "string"
 *                 }
 *             },
 *             semantic: {
 *                 type: "semantic",
 *                 value: {
 *                     semanticContent: "string",
 *                     neighboringSemanticContent: "string"
 *                 }
 *             }
 *         }
 *     }
 */
export interface SearchRequest {
    userIdentifier: string;
    groupIdentifier?: string;
    model?: string;
    query?: string;
    context?: DoptApi.SearchRequestContext;
}

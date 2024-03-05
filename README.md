# Dopt AI JavaScript client

## Overview

The Dopt AI JavaScript client is a friendly package for accessing the Dopt AI API to use AI Assistants in your product.

It is published to npm as [`@dopt/ai-javascript-client`](https://www.npmjs.com/package/@dopt/ai-javascript-client).

## Installation

Via npm:

```bash
npm install @dopt/ai-javascript-client @dopt/ai-assistant-javascript
```

Via Yarn:

```bash
yarn add @dopt/ai-javascript-client @dopt/ai-assistant-javascript
```

Via pnpm:

```bash
pnpm add @dopt/ai-javascript-client @dopt/ai-assistant-javascript
```

## Configuration

To configure the AI JavaScript client you will need

1. An AI API key (generated in Dopt)
1. An Assistant identifier (found in Dopt)

## Usage

### Initialization

```ts
import { DoptApiClient } from "@dopt/ai-javascript-client";

const client = new DoptApiClient({
    apiKey: process.env.DOPT_AI_API_KEY as string,
});
```

### Context

The AI Assistant API provides context-dependent completions, where context is information gathered from the web page the user is on.

The following types outline the context the API expects.

```ts
type DocumentContext = {
    type: "document";
    value: {
        url: string;
        title: string;
        width: number;
        height: number;
    };
};

type ElementContext = {
    type: "element";
    value: {
        position: {
            top: number;
            left: number;
        };
        content: string;
        tag: string;
    };
};

type VisualContext = {
    type: "visual";
    value: string;
};

type SemanticContext = {
    type: "semantic";
    value: {
        semanticContent: string;
        neighboringSemanticContent: string;
    };
};
```

Creating this context manually is onerous, so we've provided utilities to do so in our [@dopt/ai-assistant-javascript](https://www.npmjs.com/package/@dopt/ai-assistant-javascript) package.

Usage is as follows.

```ts
import { formAssistantContext } from '@dopt/ai-assistant-javascript';

export interface AssistantContext {
  document?: boolean | DocumentContext['value'];
  element?: Element | ElementContext['value'];
  semantic?: boolean | SemanticContext['value'];
  visual?: boolean | VisualContext['value'];
}

const context = formAssistantContext(context: AssistantContext);

```

### Completions

Stream completions for an Assistant

```ts
const events = await this.client.assistant.completions.stream(
  sid,
  request: {
    userIdentifier: userId,
    // See #Context above
    context
  }
);

let content = '';
for await (const event of events) {
  switch (event.type) {
    case 'status':
      console.log(event.status);
      break;
    case 'answer':
      console.log(event.answer);
      break;
    case 'content':
      content += event.content;
      console.log(content);
      break;
  }
}
```

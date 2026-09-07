# Day 1 — Lesson 1: How Search Systems See the Web

## Objective

Be able to explain and model the difference between crawling, indexing, ranking, retrieval, citation, and recommendation.

## Core Model

- **Crawling** = discovering and fetching resources.
- **Indexing** = processing and storing useful information about those resources.
- **Ranking** = ordering eligible results for a query.
- **Retrieval** = finding candidate information relevant to a request.
- **Citation** = identifying the source supporting an answer or claim.
- **Recommendation** = selecting an option as appropriate for a user's context or intent.

## Exercise A — Explain It

In your own words, write 1–2 sentences for:

1. Crawling
2. Indexing
3. Ranking

Then answer:

> Why can a page be crawled but still fail to rank?

Put your answers in `answers.md` in this folder.

## Exercise B — TypeScript Model

Create `search-state.ts`.

Define:

```ts
type SearchState = {
  url: string;
  crawled: boolean;
  indexed: boolean;
  rankPosition?: number;
};
```

Then write a function:

```ts
function describeSearchState(page: SearchState): string
```

Expected behavior examples:

- crawled=false → `Not discovered yet`
- crawled=true, indexed=false → `Discovered but not indexed`
- indexed=true, no rankPosition → `Indexed but not currently ranking`
- indexed=true, rankPosition=3 → `Ranking at position 3`

## Exercise C — Interview Check

Be ready to answer verbally:

> What is the difference between crawling, indexing, and ranking?

A strong answer separates discovery, storage/understanding, and query-time visibility instead of treating them as synonyms.

## Completion Gate

You are complete when:

- `answers.md` exists.
- `search-state.ts` exists.
- The TypeScript function handles all four states above.
- You can explain the concepts without reading the definitions.

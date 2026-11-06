import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "../site";

// Plain-text summary of the site for AI assistants (https://llmstxt.org).
export const GET: APIRoute = async () => {
  const books = (await getCollection("books", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.order - a.data.order,
  );

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `## About ${site.name}`,
    "",
    ...site.about.flatMap((p) => [p, ""]),
    "## Books",
    "",
    ...books.flatMap((book) => [
      `### ${book.data.title}`,
      ...(book.data.subtitle ? [`*${book.data.subtitle}*`] : []),
      ...(book.data.tagline ? [book.data.tagline] : []),
      ...(book.data.status ? [`Status: ${book.data.status}`] : []),
      ...(book.data.buyUrl ? [`Buy: ${book.data.buyUrl}`] : []),
      "",
      (book.body ?? "").trim(),
      "",
    ]),
    ...(site.email ? ["## Contact", "", site.email, ""] : []),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

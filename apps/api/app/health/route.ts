export const GET = (): Response => new Response("OK", { status: 200, headers: { "cache-control": "no-store" } });

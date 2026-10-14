export const GET = (): Response => new Response("OK", { status: 200 });

export const HEAD = (): Response => new Response(null, { status: 200 });

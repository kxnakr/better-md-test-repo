export const GET = (): Response =>
  new Response("OK", {
    status: 200,
    headers: { "Cache-Control": "no-store", "X-Health-Version": "2" },
  });

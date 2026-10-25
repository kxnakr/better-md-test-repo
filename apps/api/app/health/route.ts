export const GET = (): Response =>
  Response.json(
    { status: "ok", uptime: process.uptime(), version: process.env.APP_VERSION ?? "dev" },
    { status: 200, headers: { "Cache-Control": "no-store", "X-Api-Version": "2" } },
  );

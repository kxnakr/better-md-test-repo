export const GET = (): Response =>
  Response.json({ status: "ok", uptime: process.uptime() }, { status: 200 });

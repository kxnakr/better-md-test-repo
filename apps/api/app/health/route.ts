export const GET = (): Response =>
  Response.json(
    { status: "ok", uptimeSeconds: Math.round(process.uptime()) },
    { status: 200 }
  );

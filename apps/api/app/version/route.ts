export const GET = (): Response =>
  Response.json({
    version: process.env.npm_package_version ?? "0.0.0",
    commit: process.env.VERCEL_GIT_COMMIT_SHA ?? null,
  });

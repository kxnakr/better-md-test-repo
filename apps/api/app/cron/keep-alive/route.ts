import { database } from "@repo/database";

export const GET = async () => {
  const newPage = await database.page.create({
    data: {
      name: "cron-temp-2",
    },
  });

  await database.page.delete({
    where: {
      id: newPage.id,
    },
  });

  return new Response("OK", { status: 200 });
};

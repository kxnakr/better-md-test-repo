import { database } from "@repo/database";

const TEMP_PAGE_NAME = "cron-temp";

export const GET = async () => {
  const newPage = await database.page.create({
    data: {
      name: TEMP_PAGE_NAME,
    },
  });

  await database.page.delete({
    where: {
      id: newPage.id,
    },
  });

  return new Response("OK", { status: 200 });
};

import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}

const prismas = new PrismaClient();

export async function getUserByAccount(providerAccountId: string, providerId: string) {
  return await prismas.account.findUnique({
    where: {
      providerId_providerAccountId: {
        providerAccountId: providerAccountId,
        providerId: providerId
      }
    },
    select: {
      user: true
    }
  });
}


export let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

prisma.account.findUnique({
  where: {
    providerId_providerAccountId: {
      providerAccountId: "104130234668689561131",
      providerId: "google"
    }
  },
  select: {
    user: true
  }
})

export const db = prisma;
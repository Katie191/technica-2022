import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const test_player_1 = await prisma.players.create({
    data: {
      email: "test_player_1@example.com",
      name: "Test Player 1",
    },
  });

  const test_player_2 = await prisma.players.create({
    data: {
      email: "test_player_2@example.com",
      name: "Test Player 2",
    },
  });

  const test_player_3 = await prisma.players.create({
    data: {
      email: "test_player_3@example.com",
      name: "Test Player 3",
    },
  });

  const user_1 = await prisma.users.create({
    data: {
      name: "John Smith",
    },
  });

  console.log({ test_player_1, test_player_2, test_player_3, user_1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from '@prisma/client'


async function main () {
  const prisma = new PrismaClient()

  const existing = await prisma.user_Role.findMany()
  console.log(existing)

  const test = await prisma.user.update({
    where: { id: 1 },
    data: {
      User_Role: {
        set: [{
          roleId_userId: {
            roleId: 1,
            userId: 1
          }
        }]
      }
    }
  })

  console.log(test)
  await prisma.$disconnect()
}

main()
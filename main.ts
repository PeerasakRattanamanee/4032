import { PrismaClient } from '@prisma/client'


async function main () {
  const prisma = new PrismaClient()

  //await seed(prisma)

  const existing = await prisma.user_Role.findMany()
  console.log(existing)

  const test = await prisma.user.update({
    where: { id: 1 },
    data: {
      User_Role: {
        set: [{
          roleId_userId: {
            roleId: 2,
            userId: 1
          }
        }]
      }
    }
  })

  console.log(test)
  await prisma.$disconnect()
}

async function seed (prisma: PrismaClient): Promise<void> {
  await prisma.user.create({
    data: {
      name: 'user1'
    }
  })

  await prisma.role.create({
    data: {
      name: 'role1'
    }
  })

  await prisma.role.create({
    data: {
      name: 'role2'
    }
  })

  await prisma.user_Role.create({
    data: {
      user: { connect: { id: 1 } },
      role: { connect: { id: 1 } }
    }
  })
}

main()
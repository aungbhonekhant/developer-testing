import { PrismaClient } from '@prisma/client'
import { faker } from "@faker-js/faker"
import { parseArgs } from 'node:util';

const MAX_SEED_COUNT = 100000;
const DEFAULT_SEED_COUNT = '10000';

const options = {
    seed_count: { type: 'string', short: "c" },
} as const;

const { values: { seed_count = DEFAULT_SEED_COUNT },
} = parseArgs({options})

const getSeedCount = parseInt(seed_count);

const prisma = new PrismaClient();

async function main() {

    await prisma.property.deleteMany();
    console.log("property deleted");
    
    await prisma.gallery.deleteMany()
    console.log("gallery deleted");

    if(getSeedCount > MAX_SEED_COUNT){
        process.exit(0);
    }

    enum Type {
        SELL="SELL",
        RENT="RENT"
    }

    for (let index = 0; index < getSeedCount; index++) {
        const thumbnail = faker.image.urlLoremFlickr({ category: 'house', width: 600, height: 600});
        await prisma.property.create({
            data: {
                project: faker.lorem.words({min: 2, max: 3}),
                title: faker.lorem.words({min: 4, max: 5}),
                desc: faker.lorem.lines({min: 5, max: 10}),
                price: faker.number.int({ min: 2500, max: 500000 }),
                beds: faker.number.int({ min: 1, max: 4 }),
                baths: faker.number.int({ min: 1, max: 4 }),
                rate: faker.number.int({ min: 1, max: 5 }),
                area: faker.number.int({ min: 50, max: 300 }),
                type: faker.helpers.enumValue(Type),
                thumbnail: thumbnail,
                gallery: {
                    create: [
                        {
                            url: thumbnail
                        },
                        {
                            url: faker.image.urlLoremFlickr({ category: 'house', width: 600, height: 600})
                        },
                        {
                            url: faker.image.urlLoremFlickr({ category: 'house', width: 600, height: 600})
                        },
                        {
                            url: faker.image.urlLoremFlickr({ category: 'house', width: 600, height: 600})
                        },
                        {
                            url: faker.image.urlLoremFlickr({ category: 'house', width: 600, height: 600})
                        },
                    ]
                }
            }
        })
    }
}

main()
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    }).finally(async () => {
        console.error("Seed finished!");
        await prisma.$disconnect();
    })
import { Context } from "@/pages/api/graphql";
export const resolvers = {
    Query: {
        property : async (_parent: any, args: any, context: Context) => {
            return await context.prisma.property.findUnique({
                where: {
                    id: args.id
                },
                include: {gallery: true}
            })
        },
        properties : async (_parent: any, args: any, context: Context) => {

            const searchFilter = args.search ? {
                OR: [
                    { project: { contains: args.search } },
                    { title: { contains: args.search } },
                ],
            } : {};

            const typeFilter = args.type && (args.type !== "all") ? {                
                type: { equals: args.type.toUpperCase() },
            } : {};

            const priceFilter = (args.min_price && args.max_price) ? {
                price: {
                    gte: parseFloat(args.min_price),
                    lte: parseFloat(args.max_price),
                },
            } : {};

            const areaFilter = (args.area_from && args.area_to) ? {
                area: {
                    gte: Number(args.area_from),
                    lte: Number(args.area_to),
                },
            } : {};

            const bedsFilter = (args.beds) ? {
                beds: { equals: Number(args.beds )},
            }:{}

            const filter = {
                ...searchFilter,
                ...typeFilter,
                ...priceFilter,
                ...areaFilter,
                ...bedsFilter
            };
            console.log("===============>", filter);
            

            const { take, skip } = getPagination(args.page, args.rowsPerPage);
            
            const [properties, totalCount] = await Promise.all([
                    context.prisma.property.findMany({
                    take,
                    skip,
                    where: filter,
                    include: {gallery: true}
                }),
                context.prisma.property.count({
                    where: filter,
                }),
            ]);
            

            return getPagingData(properties, totalCount, args.page, take)
        }
    }
}

const getPagination = (page: number, rowsPerPage: number) => {
    if(page < 1){
        page = 1;
    }
        
    if(rowsPerPage <= 1){
        rowsPerPage = 60
    }
    const take = rowsPerPage;
    const skip =  (page - 1) * take; 

    return {take, skip}
}

const getPagingData = (data: any, totalItems: number, page: number, take: number) => {
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / take);
  
    return { totalItems, data, totalPages, currentPage };
  };
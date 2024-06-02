export const typeDefs = `#graphql
    type Gallery {
        id: String
        url: String
    }

    type Property {
        id: String
        project: String
        title: String
        desc: String
        price: Float
        beds: String
        baths: String
        rate: String
        area: String
        thumbnail: String
        gallery: [Gallery]
        type: type
    }
      
    type Query {
        properties(page: Int, rowsPerPage: Int, area_from: String, area_to: String, min_price: String, max_price: String, search: String, type: String, beds: String): Response
        property(id: String): Property
    }

    type Response {
        totalItems: Int
        totalPages: Int
        currentPage: Int
        data: [Property]
    }

    enum type {
        RENT
        SELL
    }
`
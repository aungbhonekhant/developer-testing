import { gql } from "@apollo/client";

export const GET_PROPERTIES = gql`
	query PROPERTIES($page: Int, $rowsPerPage: Int, $area_from: String, $area_to: String, $min_price: String, $max_price: String, $search: String, $type: String, $beds: String) {
		properties(page: $page, rowsPerPage: $rowsPerPage, area_from: $area_from, area_to: $area_to, min_price: $min_price, max_price: $max_price, search: $search, type: $type, beds: $beds) {
            totalItems
            totalPages
            currentPage
            data {
                id
                project
                title
                desc
                price
                beds
                baths
                rate
                area
                thumbnail
                type
                gallery {
                    id
                    url
                } 
            }
			
		}
	}
`;

export const GET_PROPERTY = gql`
	query PROPERTY($id: ID!) {
		property(id: $id) {
			id
            project
            title
            desc
            price
            beds
            baths
            rate
            area
            thumbnail
            type
            gallery {
                id
                url
            } 
		}
	}
`;
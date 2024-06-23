import React from 'react';
import {render, waitFor} from "@testing-library/react";
import {screen} from "@testing-library/dom"
import { GET_PROPERTIES } from '@/graphql/queries';
import { PropertyList } from '@/components/PropertyList';
import { MockedProvider } from '@apollo/client/testing';
import { ApolloError } from '@apollo/client';
import { GraphQLError } from 'graphql';


const mockData = {
    properties: {
    totalItems: 10000,
    totalPages: 334,
    currentPage: 1,
        data: [
            {
                "id": "0000a78e-982e-4cda-bb86-3c2854f66548",
                "project": "adicio cur caries",
                "title": "custodia audax terminatio aspernatur tabesco",
                "desc": "Tripudio ipsam avaritia claudeo adulescens fuga acies ab pectus.\nVos trucido angulus cuppedia cibo caecus deludo tamquam.\nArgumentum vetus odit cursim tener vesco.\nTimor tribuo cogito verbum curo terminatio aequitas facilis.\nAbsconditus incidunt canto amo torqueo vallum dicta iure.\nAurum ulciscor adhaero deleo curis desolo subnecto.\nAdvoco architecto ex tutamen.\nSuper dignissimos tumultus deludo paulatim civitas usitas victus abscido.\nDegusto quos alii reprehenderit magni ter cogo mollitia tolero.\nCaterva tantum basium utor tametsi.",
                "price": 461980,
                "beds": 3,
                "baths": 1,
                "rate": 4,
                "area": 157,
                "thumbnail": "https://loremflickr.com/600/600/house?lock=8027652799594496",
                "type": "SELL",
                "gallery": [
                    {
                        "id": "4df04415-8d23-4aee-9976-0fafb57b7cfb",
                        "url": "https://loremflickr.com/600/600/house?lock=8651143133528064",
                    },
                    {
                        "id": "60bdfb49-fcd5-49b0-9f22-17adda7fa7b5",
                        "url": "https://loremflickr.com/600/600/house?lock=8027652799594496",
                    },
                    {
                        "id": "751c09cc-5bbc-4a5c-a534-4941a8c4a220",
                        "url": "https://loremflickr.com/600/600/house?lock=5440203221106688",
                    },
                    {
                        "id": "983492d1-0b6b-4dd1-a665-96c38fb1e021",
                        "url": "https://loremflickr.com/600/600/house?lock=8055744830111744",
                    },
                    {
                        "id": "fefb8015-37b5-4773-86fe-362acdcdc2ba",
                        "url": "https://loremflickr.com/600/600/house?lock=6501960310063104",
                    }
                ],
            },
            {
                "id": "0007540d-71e7-4d23-a75c-9c43f9e912f7",
                "project": "conturbo curiositas",
                "title": "tribuo volaticus alii aptus",
                "desc": "Angustus infit error triduana.\nDefetiscor adopto verecundia esse.\nTardus ante agnitio.\nUltio aspicio conservo aggredior clarus tantillus basium.\nSpiculum caritas volaticus curatio.\nBeatae consectetur angulus.\nCaecus tempore terreo verumtamen.",
                "price": 267015,
                "beds": 3,
                "baths": 2,
                "rate": 3,
                "area": 85,
                "thumbnail": "https://loremflickr.com/600/600/house?lock=6996319365234688",
                "type": "SELL",
                "gallery": [
                    {
                        "id": "5305646c-5897-4b79-bfea-d4ff58ced838",
                        "url": "https://loremflickr.com/600/600/house?lock=6996319365234688",
                    },
                    {
                        "id": "58c6348c-f390-410b-b2ef-c566f717f380",
                        "url": "https://loremflickr.com/600/600/house?lock=7625451207917568",
                    },
                    {
                        "id": "681dc331-2a14-4023-81ba-480da2f08a08",
                        "url": "https://loremflickr.com/600/600/house?lock=5542383313747968",
                    },
                    {
                        "id": "8c81fb63-f2ff-4768-808e-5ef7d2570d98",
                        "url": "https://loremflickr.com/600/600/house?lock=5600423127810048",
                    },
                    {
                        "id": "c29a8db4-fd2e-4a4b-b610-266c7974f49d",
                        "url": "https://loremflickr.com/600/600/house?lock=4786917988106240",
                    }
                ],
            },
            {
                "id": "00087f9c-598d-4738-937c-1be18924bd7d",
                "project": "civitas allatus attonbitus",
                "title": "pel pariatur impedit terreo voluptatem",
                "desc": "Cultura ulciscor compello saepe titulus amoveo demoror bos.\nAcceptus vero voluptates speciosus currus deprimo cruciamentum versus cervus adflicto.\nDecretum creber cupiditate.\nTenetur cura tonsor suscipit.\nSolum quas caput nam celo.\nCorpus tametsi verbera ocer uterque audeo reiciendis.\nPatruus credo carus cura cras testimonium stillicidium.\nVarius commemoro amor arbor spes patria quasi pecco vereor.\nAmicitia video adstringo aurum.\nVociferor tener dolorem video tutis temeritas patrocinor.",
                "price": 246527,
                "beds": 3,
                "baths": 2,
                "rate": 4,
                "area": 212,
                "thumbnail": "https://loremflickr.com/600/600/house?lock=962777768263680",
                "type": "SELL",
                "gallery": [
                    {
                        "id": "1325c98f-eb2b-45db-9c5c-bc50e5e25e93",
                        "url": "https://loremflickr.com/600/600/house?lock=2887528132640768",
                    },
                    {
                        "id": "573fa49a-b4f7-43a4-858c-0255afacf817",
                        "url": "https://loremflickr.com/600/600/house?lock=6563097063981056",
                    },
                    {
                        "id": "70dd73db-ff05-4976-a38d-060fccad5904",
                        "url": "https://loremflickr.com/600/600/house?lock=962777768263680",
                    },
                    {
                        "id": "a2673e0c-95f6-4e7d-8f7d-cb9810cb09d3",
                        "url": "https://loremflickr.com/600/600/house?lock=509283548528640",
                    },
                    {
                        "id": "afe06f82-0202-4a23-9500-2af6806935b7",
                        "url": "https://loremflickr.com/600/600/house?lock=1023047939129344",
                    }
                ],
            },
            {
                "id": "000994ec-d67a-4b28-b56e-a36130e888cb",
                "project": "virgo vitae vicinus",
                "title": "soleo asperiores conturbo ara",
                "desc": "Tracto vilitas accendo paulatim.\nBasium toties cetera creo vociferor magnam deficio cogito.\nTabella aetas averto error bene brevis torrens.\nPerspiciatis adopto unde ter vinculum.\nDelibero adnuo talis beatae candidus clamo tumultus.\nStips adfectus conduco.\nCilicium sophismata magni thesaurus numquam dolores absconditus ocer.\nAliquid coma thymum.\nConservo vester suasoria coadunatio absum pariatur summa tutis adaugeo sordeo.\nCunae dolor crastinus vae trepide calculus quidem considero amplitudo.",
                "price": 416222,
                "beds": 2,
                "baths": 2,
                "rate": 4,
                "area": 78,
                "thumbnail": "https://loremflickr.com/600/600/house?lock=8539130073972736",
                "type": "RENT",
                "gallery": [
                    {
                        "id": "459f645b-fadb-41c2-a956-30f744946319",
                        "url": "https://loremflickr.com/600/600/house?lock=1334223258517504",
                    },
                    {
                        "id": "4d81e851-6c37-492e-9377-e762a6a30baa",
                        "url": "https://loremflickr.com/600/600/house?lock=3108845838663680",
                    },
                    {
                        "id": "bcddf8f2-fd86-4949-8c9c-dccad498684b",
                        "url": "https://loremflickr.com/600/600/house?lock=8539130073972736",
                    },
                    {
                        "id": "cc1d788e-61d5-4e24-9b0a-d80901927b5d",
                        "url": "https://loremflickr.com/600/600/house?lock=2728013412171776",
                    },
                    {
                        "id": "ed58cac0-b6db-46df-9ea7-a33a3b10172c",
                        "url": "https://loremflickr.com/600/600/house?lock=5621378027880448",
                    }
            ],
            },
        ],
    }
}

describe("Property List component", () => {
    describe("Render", () => {
        it('renders loading state initially', () => {
          const mocks = [
            {
              request: {
                query: GET_PROPERTIES,
                variables: { page: 1, rowsPerPage: 30 }
              },
              result: {
                data: {
                  properties: {
                    ...mockData.properties
                  }
                }
              }
            }
          ];
            render(
              <MockedProvider mocks={mocks} addTypename={false}>
                <PropertyList filter={{}} />
              </MockedProvider>
            );
        
            expect(screen.getByText('Loading!')).toBeInTheDocument();
            expect(screen.getByText('Please wait.')).toBeInTheDocument();
          });

          it('renders error state', async () => {
            const errorMocks = [
              {
                request: {
                  query: GET_PROPERTIES,
                  variables: { page: 1, rowsPerPage: 30 }
                },
                error: new ApolloError({
                  graphQLErrors: [new GraphQLError("An error occurred")]
                })
              }
            ];
        
            render(
              <MockedProvider mocks={errorMocks} addTypename={false}>
                <PropertyList filter={{}} />
              </MockedProvider>
            );
        
            expect(await screen.findByText('ApolloError')).toBeInTheDocument();
          });

          it('filters properties by area', async () => {
            const areaMocks = [
              {
                request: {
                  query: GET_PROPERTIES,
                  variables: { page: 1, rowsPerPage: 24, area_from: 100, area_to: 200 }
                },
                result: {
                  data: {
                    properties: {
                      ...mockData.properties,
                      data: mockData.properties.data.filter(property => property.area >= 100 && property.area <= 200),
                    }
                  }
                }
              }
            ];
        
            render(
              <MockedProvider mocks={areaMocks} addTypename={false}>
                <PropertyList filter={{ area_from: 100, area_to: 200 }} />
              </MockedProvider>
            );
        
            await waitFor(() => {
              expect(screen.getByText('Available Properties')).toBeInTheDocument();
            });
        
            expect(screen.getByText('custodia audax terminatio aspernatur tabesco')).toBeInTheDocument();
            expect(screen.queryByText('soleo asperiores conturbo ara')).not.toBeInTheDocument();
          });
    })
})
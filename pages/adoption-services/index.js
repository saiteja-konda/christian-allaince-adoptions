import React from 'react'
import Layout from '../../components/core/Layout'
import { Box, Center, Container, Heading, ListItem, Table, Tbody, Td, Text, Tr, UnorderedList } from "@chakra-ui/react"
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

function AdoptionServices() {
    return (
        <Layout>
            <Box mt="8" mb="72">
                <Container maxW='container.lg'>
                    <Row gutter={40}>
                        <Col md={8} sm={8} xs={12}>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >Adoption Programs and Services for Alabama Families</Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                For more than 35 years, CAAFK has helped find loving homes for children from the United States and around the world. Whether you are interested in adopting domestically or internationally, privately or through the state foster system, CAAFK can provide the adoption assistance you need to build your family.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                We offer adoption services for all types of families throughout Alabama. Find an overview of our Alabama adoption programs and services below.
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h5" size="sm" >
                                Alabama Waiting Child Program (Fos-Adopt)
                            </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Currently, there are nearly 50,000 children in need of permanent homes in Alabama. Through our fos-adopt program, we partner with counties throughout the state to match these children to adoptive families.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                From your first phone call through finalization, CAAFK provides all of the Alabama adoption services you need to complete this program, including:
                            </Text>

                            <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                                <UnorderedList>
                                    <ListItem>In-depth pre-adoption training</ListItem>
                                    <ListItem>Home study services</ListItem>
                                    <ListItem>Child search</ListItem>
                                    <ListItem>Post-adoption services</ListItem>
                                    <ListItem>Finalization and legal assistance</ListItem>
                                    <ListItem>General case management and oversight</ListItem>
                                </UnorderedList>
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Unlike traditional foster care programs, the Alabama Waiting Child Program focuses on low legal-risk placements, by placing children who are on track to be freed for adoption and are thus very unlikely to be reunited with their birth families.
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h5" size="sm" >
                                International Adoption Programs
                            </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                As a Hague-Accredited agency, CAAFK can provide the following international adoption services to families adopting from nearly any country:
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                                <UnorderedList>
                                    <ListItem>Pre-adoption education</ListItem>
                                    <ListItem>Adoption home study services</ListItem>
                                    <ListItem>Post-adoption services</ListItem>
                                    <ListItem>Dossier assistance</ListItem>
                                    <ListItem>Finalization or re-adoption services</ListItem>
                                </UnorderedList>
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                In addition, CAAFK has a direct placement program for special needs children in Hong Kong. Families interested in adopting from Hong Kong may work directly with CAAFK throughout the entire adoption process, including all of the services listed above, plus child referrals, assistance with travel arrangements, and more.
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h5" size="sm" >
                                Domestic Adoption Program
                            </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Domestic infant adoption, also known as private agency or relinquishment adoption, involves the voluntary placement of infants by their birth parents. CAAFK provides Alabama home study and post-adoption services for families interested in domestic infant adoption.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Our agency also works with a number of expectant mothers each year who contact us to make adoption plans for their babies. Families who want to be considered for these infant adoption opportunities may submit an adoption profile after their home study has been approved. CAAFK will keep this profile on file and notify the family of any potential matches. Subject to certain restrictions, families interested in domestic infant adoption may also be enrolled simultaneously in our fos-adopt or international adoption programs.
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h5" size="sm" >
                                Independent Adoption Program
                            </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Independent adoption is another type of domestic infant adoption in which the birth parents personally select and transfer custody to the adoptive parents without agency involvement. While an agency’s matching services are not used in independent adoption, Alabama law requires the adoptive family to hire an Adoption Service Provider (ASP) to provide the following services:
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                                <UnorderedList>
                                    <ListItem>Advise the birth parents of their legal rights and options</ListItem>
                                    <ListItem>Collect background information from the placing parents</ListItem>
                                    <ListItem>Witness the signatures on the consent form and placement agreement.</ListItem>
                                </UnorderedList>
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                As a licensed agency, CAAFK can provide ASP service, ICPC services, and other adoption-related services. If the adoptive family hires another person or agency to provide ASP services, CAAFK can provide the necessary home study services and finalization assistance for families pursuing independent adoption in Alabama.
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >
                                Can CAAFK Help Us Adopt?
                            </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                If you want to know whether CAAFK can provide the adoption help you need, please contact us for a free and confidential initial consultation. Meanwhile, browse through our website to learn more about our programs and find general information about adoption in Alabama.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Please note: the purpose of this section is to describe the programs CAAFK offers, and to give some general information on other adoption topics. This is general information only and is based on Alabama law at the time it was written. The laws and regulations for different states may be quite different from what is represented here. Even the laws in Alabama change frequently, so do not rely on anything in this section as legal advice for your specific situation. Legal advice for specific cases should be obtained from an attorney with specific experience in adoption, such as the attorneys who belong to the Academy of Alabama Adoption Lawyers and the American Academy of Adoption Attorneys.
                            </Text>
                        </Col>
                        <Col md={4} sm={4} xs={12} >
                            <Table variant="simple" bgColor={"blackAlpha.50"}>
                                <Tbody>
                                    <Tr>
                                        <Td>Adopt a Waiting Foster Child</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Adopt a Child Internationally</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Adopt a Baby through Private Adoption</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Adoption without an Agency</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Guardianship Adoption</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </Box>

        </Layout>
    )
}

export default AdoptionServices

import React from 'react'
import Layout from '../components/core/Layout'
import { Box, Center, Container, Heading, ListItem, Table, Tbody, Td, Text, Tr, UnorderedList } from "@chakra-ui/react"
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

function AdoptionServices() {
    return (
        <Layout>
            <Box mt="8" mb="72">
                <Container maxW='container.lg'>
                    <Row gutter={40}>

                        <Col md={9} sm={8} xs={12}>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >
                                How to Go from Legal Guardianship to Adoption in California
                            </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                If you are the legal guardian of a child you care about, you want what is best for him or her — and in some circumstances, that may be adoption. This section will help you learn more about guardianship adoption in California and the services FCCA can offer to assist you through this process.                                </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >
                                How to Adopt as a Legal Guardian in California
                            </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                A person who is a legal guardian can apply to adopt the child under guardianship. One or both of the child’s biological parents can sign an independent adoption consent or an agency relinquishment if the parent agrees with the adoption plan.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                If one or both of the parents object to the adoption, the guardian can request that the court involuntarily terminate parental rights for abandonment, conviction of a serious felony or other good cause. In California, termination of parental rights also may be granted if the child has been out of the parents’ custody for two or more years, and the court finds that the adoption is in the best interest of the child.


                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                In every case, the guardian must obtain a home study in accordance with the type of adoption (independent or agency) being pursued.


                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                FCCA assists in many guardianship adoption cases by:


                            </Text>


                            <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                                <Box ml="38">
                                    <UnorderedList>
                                        <ListItem>
                                            providing the home study assessment
                                        </ListItem>
                                        <ListItem>
                                            accepting the relinquishment of any parent who agrees with the adoption plan
                                        </ListItem>
                                        <ListItem>
                                            applying to the court for uncontested termination of parental rights*
                                        </ListItem>
                                        <ListItem>
                                            providing post-placement services
                                        </ListItem>
                                        <ListItem>
                                            preparing the adoption finalization paperwork
                                        </ListItem>
                                        <ListItem>
                                            and more
                                        </ListItem>
                                    </UnorderedList>
                                </Box>
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" ml="48">
                                *If the non-consenting parent contests the termination, the adoptive family must hire and pay for private legal counsel to pursue the matter.
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >
                                Adoption vs. Guardianship
                            </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4" >
                                Adoption and guardianship are similar in some ways, but there are some key differences. Most importantly, adoption is permanent, while guardianship can be terminated by a court if it finds that doing so will serve the child’s best interests.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" >
                                Under guardianship, the child’s biological parents maintain their parental rights. In contrast, when a legal guardian adopts the child, the biological parents’ rights are terminated. The guardians then become the child’s legal parents. This is beneficial for a number of reasons:
                            </Text>

                            <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                                <UnorderedList ml="38">
                                    <ListItem>
                                        It gives the adoptive parents full, legal parental rights for the child
                                    </ListItem>
                                    <ListItem>
                                        It allows the child to inherit from the adoptive parents as if he or she was born to them
                                    </ListItem>
                                    <ListItem>
                                        Adoptive families are not supervised by the court, whereas legal guardians must submit regular reports and must comply with any court orders regarding visitation.
                                    </ListItem>
                                </UnorderedList>
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" >
                                Most importantly, adoption provides the child with permanency and gives the entire family a sense of stability.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" >
                                If you are ready to formally adopt a child in your care, or if you have additional questions about guardianship adoption in California, please contact us to schedule a free, confidential consultation.
                            </Text>
                        </Col>
                        <Col md={3} sm={4} xs={12} >

                        </Col>
                    </Row>
                </Container>
            </Box>

        </Layout>
    )
}

export default AdoptionServices

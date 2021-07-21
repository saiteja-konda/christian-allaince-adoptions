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
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >Alabama Waiting Child Program – Foster Care Adoption with CAAFK</Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                CAAFK was created with one goal in mind: to connect waiting children to permanent, loving families.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                At the heart of this mission is our California Waiting Child Program, also known as “fos-adopt.” Through this program, we connect hopeful adoptive parents with the children who are meant to be part of their families.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                If you are interested in adopting a child in California, CAAFK can provide all of the services you need to reach your adoption goals, including:
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                                <UnorderedList>
                                    <ListItem>
                                        Extensive pre-adoption training
                                    </ListItem>
                                    <ListItem>
                                        California home study services
                                    </ListItem>
                                    <ListItem>
                                        Matching services based on your adoption preferences
                                    </ListItem>
                                    <ListItem>
                                        Post-placement services and finalization assistance
                                    </ListItem>
                                    <ListItem>
                                        And more
                                    </ListItem>
                                </UnorderedList>
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Read on to learn more about our fos-adopt program and the California children waiting for adoption by a family like yours.
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >
                                Who are the California children for adoption?
                            </Heading>

                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Foster kids in ALcome from many different backgrounds and are all ages, from infants to teenagers. These children enter foster care for a variety of reasons, through no fault of their own.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                While many foster children are eventually reunited with their biological parents, homes are always needed for adoptable children who cannot be safely returned to their birth families. In California alone, approximately 80,000 children are in foster care, and almost 50,000 need permanent homes.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                CAAFK’s California Waiting Child Program focuses on low-legal-risk placements from California foster care, meaning that the child is very unlikely to return to the care of birth parents or be placed with another relative.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                The majority of California waiting children in this low-risk program are:
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                                <UnorderedList>
                                    <ListItem>
                                        Minority and mixed race children, ages 4 and up, especially boys
                                    </ListItem>
                                    <ListItem>
                                        Sibling groups of two, three or more children of all ages
                                    </ListItem>
                                    <ListItem>
                                        Single children of all races, ages 6 and older
                                    </ListItem>
                                    <ListItem>
                                        Children of all ages with special needs
                                    </ListItem>
                                </UnorderedList>
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                While some infants and toddlers are available for adoption in California foster care, most of those situations are higher legal risk.  Meanwhile, families interested in adopting older children are always in short supply. If you are interested in adopting a teenager or older child, contact us to learn more. Many older kids available for adoption need permanent, loving families before aging out of the foster system.
                            </Text>

                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Each month, CAAFK receives information about hundreds of ALfoster kids who are available and waiting for adoption. It is up to each family to determine the characteristics of the child they feel equipped to parent, including the child’s age, gender, racial background, medical needs, and more.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                To learn more about the ALfoster children and babies for adoption, please view the California adoption photolisting.
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >
                                Foster Care vs. Adoption from Foster Care: Why CAAFK’s Program is Different
                            </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                In most traditional foster-to-adopt programs, a family agrees to provide temporary care to children who have entered the foster system. The initial goal is for these children to be returned to their biological family members. If that doesn’t happen, and a child in the foster family’s care becomes legally available for adoption, those foster parents are usually given the first opportunity to adopt the child. However, it is uncertain when any foster child will become legally available for adoption, if ever.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                In contrast, CAAFK’s adoption-focused, low-legal-risk aspect differentiates our California Waiting Child Program from other county adoption programs and most other fos-adopt agencies. Unlike those agencies and programs,
                                <br /> <br /> <b> CAAFK will never ask you to be “just” a foster family; only the specific child you hope to adopt will be placed in your home.</b>
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Our fos-adopt program offers many of the same benefits as traditional foster care adoption programs, including low costs and minimal wait times, without the uncertainty of fostering to adopt or the likelihood of reunification.
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >
                                How to Adopt a Foster Child in California
                            </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                CAAFK can provide all of the services you need to adopt from foster care in California, and we will be with you through each step of the process. Here’s how to adopt a child in ALthrough our fos-adopt program:
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                                <UnorderedList>
                                    <ListItem mb="10"><b>Attend an information session.</b> Families who are interested in adopting a child in ALshould attend one of our free, monthly information sessions. During this session, you will learn more about adopting from foster care and the available children for adoption in CA.</ListItem>
                                    <ListItem mb="10"><b>Complete the adoption home study and foster care approval. </b>Before you can adopt a foster child in California, your home must be formally certified as a foster home or approved as a Resource Family home, and must meet all state regulations in this area. The adoption home study — which refers to both the process and the final approval document — includes training classes, paperwork, individual interviews and an in-home visit with an CAAFK social worker.</ListItem>
                                    <ListItem mb="10"><b>Search for ALwaiting children.</b> Once your home study has been approved, your social worker will begin searching through ALadoption photo-listings and gathering county information about kids for adoption in CA. They will search for waiting children who would fit well into your family, according to what you have shared with us about and what we know about you.</ListItem>
                                    <ListItem mb="10"><b>Submit an inquiry.</b> If we or you identify a child who might be a good fit for your family, CAAFK will submit your home study to the county social worker. That worker will decide whether your family might be a good fit for that particular child. This process may include a disclosure meeting to learn facts about the child, as well as in-person meetings and visits with the child before a decision is made.</ListItem>
                                    <ListItem mb="10"><b>Receive placement of the child.</b> Once a child is placed in your home, the CAAFK worker and the county social worker will visit the child at least once each month in your home. The CAAFK worker is required to interview the child privately and to review the foster care certification checklist to ensure ongoing compliance with state regulations. More importantly, the social worker’s goal is to provide you with the resources you need as your family adjusts.</ListItem>
                                    <ListItem mb="10"><b>Finalize the adoption.</b> After a minimum of six months in the home, and after all parental rights have been terminated, the adoption can be finalized. Unlike most other agencies, which require you to hire and pay for an attorney, CAAFK will prepare your adoption finalization paperwork at no charge to you and file it with the court after you review and sign it. When the hearing date has been set, your job will be to appear with the child at the courthouse and celebrate the newest addition to your family!</ListItem>
                                </UnorderedList>
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Altogether, most families are able to complete the entire CA foster care adoption process within 10–22 months of joining our agency. However, FCCA’s services do not end with finalization; we will remain available to answer your questions and provide additional resources as you need them. And don’t forget to stay in touch with us — we love receiving annual Christmas photos, graduation announcements, and the like. We consider you part of our family!
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >
                                How much does it cost to adopt a foster child through FCCA?
                            </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Compared to many other types of adoption, adopting a foster child is one of the most affordable ways you can add to your family. On average, most families who adopt a child in CA foster care spend a total of about $2,000. This cost includes:
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                                <UnorderedList>
                                    <ListItem>
                                        FCCA’s home study fee*
                                    </ListItem>
                                    <ListItem>
                                        Fingerprint and medical exam costs (required for licensing purposes)                                    </ListItem>
                                    <ListItem>
                                        Mileage for the initial home visit (mileage for post-placement visits is waived)
                                    </ListItem>
                                    <ListItem>
                                        Miscellaneous costs for expedited document delivery, court filing fees – typically less than $100.
                                    </ListItem>
                                </UnorderedList>
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                *Because FCCA doesn’t have a traditional foster care program, a home study fee of $1,500 is charged to cover the costs of our work. Most families who want to adopt find that this fee is well worth the opportunity to work with an agency that is focused only on adoption, and that specializes in low-risk cases. In addition, FCCA provides finalization services at no charge; most private fos-adopt agencies require a family to pay an attorney to assist with this process, resulting in a higher net cost to adopt.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                In addition, children adopted through the California foster system qualify for Adoption Assistance Payments (AAP). This includes a monthly adoption subsidy payment, plus MediCal coverage for the child up to age 18. For more information about adoption subsidy qualifications and other adoption costs, contact FCCA for more information.
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >
                                The Pros and Cons of Adopting through Foster Care
                            </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                Over the years, FCCA has helped to create thousands of happy families through our California Waiting Child Program. For these parents, children and their extended family members, the advantages of foster care adoption are too numerous to count. A few of these benefits include:
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                                <UnorderedList>
                                    <ListItem mb="10"><b>FCCA focuses on low-risk adoptive placements.</b> While adoption can be an elusive goal in most traditional foster care programs, FCCA focuses exclusively on placing children in permanent homes. Because we select lower-legal-risk placements, your child is very unlikely to be returned to his or her birth parents.</ListItem>
                                    <ListItem mb="10"><b>Foster care adoption is inexpensive.</b> Our waiting child program does not involve the legal fees, birth parent expenses, or other costs commonly associated with other forms of adoption; most families are able to adopt for about $2,000. This small initial cost will be more than offset by the monthly foster care payments that the family receives between the time of initial placement and the time of finalization.</ListItem>
                                    <ListItem mb="10"><b>Foster child adoption involves shorter wait times.</b> With so many children waiting to be adopted in California, most adoptive parents are matched to an adoption opportunity within six months of completing the home study. Of course, some families are matched more quickly, and others wait much longer, especially if they are hoping for placement of a child under the age of four years.</ListItem>
                                    <ListItem mb="10"><b>Foster care adoption gives you more choices.</b> You will decide the types of adoption opportunities that will work for your family, including the child’s age, gender, race, medical background and more.</ListItem>
                                    <ListItem mb="10"><b>You can make a difference in a child’s life.</b> All children deserve loving families and safe, permanent homes. By adopting a child from foster care, you can help fulfill that need and provide a lifetime of opportunities that the child wouldn’t have otherwise.</ListItem>
                                </UnorderedList>
                                <Text as="p" fontSize="md" mt="4" mb="4">
                                    Adopting a foster child can be a rewarding experience that benefits adoptive parents just as much as — if not more than — their children. However, foster care adoption is not right for everyone. Before beginning the fos-adopt process, here are some considerations to keep in mind:
                                </Text>
                                <UnorderedList>
                                    <ListItem mb="10"><b>There may be fewer babies to adopt through foster care.</b> While some toddlers and babies are available for adoption through the foster system, most CA children for adoption are older. Families who are exclusively interested in adopting a baby may want to consider a domestic infant adoption program, or may choose to simultaneously enroll in both programs.</ListItem>
                                    <ListItem mb="10"><b>Some foster children have special needs.</b> Many children in the foster system are considered “special needs” because they are older or part of a sibling group. However, others have certain mental, physical, developmental or medical challenges. It is important for adoptive families to conduct thorough research and be honest about the types of needs they believe they can meet.</ListItem>
                                    <ListItem mb="10"><b>Foster children may face emotional and behavioral challenges.</b> Children who have spent time in foster care have usually experienced prior abuse, neglect or other trauma. This can create bonding, attachment and behavioral issues that parents should be prepared to manage. FCCA provides extensive pre-adoption training that addresses these challenges, as well as post-adoption support for adoptive families.</ListItem>
                                </UnorderedList>
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                While foster care and adoption can be difficult at times, the families who have been through this process firmly believe that the rewards far outweigh the challenges.
                            </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                If you are interested in adopting an older child from foster care, please contact us or attend an upcoming information session to learn more about our California foster care adoption program. We would be happy to schedule a free and confidential initial consultation to discuss your adoption goals.
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

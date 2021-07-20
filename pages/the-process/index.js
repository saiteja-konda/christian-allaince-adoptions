import React from 'react'
import Layout from '../../components/core/Layout'
import { Box, Center, Container, Heading, ListItem, Table, Tbody, Td, Text, Tr, UnorderedList } from "@chakra-ui/react"
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

function TheProcess() {
    return (
        <Layout>
            <Box mt="8" mb="72">
                <Container maxW='container.lg'>
                    <Row gutter={40}>
                        <Col md={8} sm={8} xs={12}>
                            <Heading color="blue.600" pt="4" pb="4" as="h3" size="md" >The Process</Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">Are you interested in adopting? The basic adoption process at CAAFK is outlined below. Please keep in mind that this is a very general outline of the process. If you want more specific information about your situation, please contact us at your convenience.</Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="sm" >INFORMATION SESSION:</Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">This free, informal meeting provides general information about waiting children, the agency, and how to get started with a home study. At the end of the meeting, families will be given the opportunity to fill out an application and sign up for the next stage of the process. A phone call to the office will let you know the date, time and place of the next Information Session. These dates are also listed on this site. Just click the &quot;Contact Us&quot; tab and then select the branch office in your area.</Text>
                            <Text as="p" fontSize="md" mt="4" mb="4"><u>The presence of children at the Information Session or any of the classes is inappropriate due to the subjects being discussed. In addition, seeing children can be distracting and often intensesly painful for couples experiencing infertility. So although CAAFK loves children, no child under age 16 will be permitted to remain at any of the meetings or classes. Thank you for your understanding and strict compliance with this policy.</u></Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="sm" >ADOPTION PREPARATION CLASS 1:</Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">A prerequisite to the home study, this is the first of four classes which prepare applicants for adoption of waiting children. Usually run by volunteer leaders in an adoptive family&apos;s home, this is a relaxed session where applicants have a chance to ask questions about the home study process and basic adoption information.</Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="sm" >PANEL OF ADOPTIVE PARENTS:</Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">One or more adoptive families will share their experiences and information about their adoption. This may be offered as a separate class or as part of another class such as Information Session, or Adoption Preparation Class 1 or 2.</Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="sm" >INTAKE INTERVIEW:</Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">The family meets with the Interviewer and together they determine whether CAAFK can help them find the child they would like to adopt.  If the answer is yes, the family receives fingerprint forms, a list of documents to obtain, and a list of paperwork to complete. They also sign our Adoption Services Agremeent. To view a sample of our CAAFK&apos;s International Adoption Services Agreement click here.</Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="sm" >ADOPTION PREPARATION CLASSES 2 AND 3: </Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">The Connected Child Book and Questions:  All families are required to read the book &quot;The Connected Child&quot; and turn in answers to a set of questions prior to assignment of a social worker to compelte their home study. This book takes an in-depth look at the principles of Trust-Based Relational Intervention (TBRI) to provide parents with an understanding of how their child&apos;s past trauma is affecting the child&apos;s behavior today. TBRI offers practical solutions to difficult situations and has proven to be extremely effective at teaching parents how to help their children heal.</Text>
                            <Text as="p" fontSize="md" mt="4" mb="4"><u><i>NOTE:</i></u> Intake interviews are conducted at the CAAFK branch office during regular business hours (M-F, 9-4pm).</Text>

                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="sm" >INDIVIDUAL INTERVIEWS:</Heading>
                            <Text as="b" fontSize="md" mt="4" mb="4">Our goals are to teach Investment Parenting so as to....</Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                                <UnorderedList>
                                    <ListItem>Empower families with knowledge about themselves, their families, their resources, licensing and placement regulations, the child welfare process, and waiting children,so families can decide whether to commit to Investment Parenting. </ListItem>
                                    <ListItem>Teach families how to genuinely connect with a waiting child.</ListItem>
                                    <ListItem>Teach families the best ways to connect and heal trauma-based behaviors.</ListItem>
                                </UnorderedList>
                            </Text>
                            <Text as="b" fontSize="md" mt="4" mb="4">What is Investment Parenting? You agree to: </Text>
                            <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                                <UnorderedList>
                                    <ListItem>Educate yourself about the needs of waiting children.</ListItem>
                                    <ListItem>Explore your own past diligently and address your past hurts and fears.</ListItem>
                                    <ListItem>Commit to parenting in a way that will help these children heal.</ListItem>

                                    <ListItem>Change, if ncessary, some of the ways you typically parent or think about parenting.</ListItem>
                                    <ListItem>Create time to help these children heal - this will require sacrifices.</ListItem>
                                    <ListItem>Be willing to meet your children where they are, and guide them back from trauma-induced behaviors to become permanent, healthy members of your family.</ListItem>
                                </UnorderedList>
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="sm" >HOME VISIT:</Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                The social worker will visit your home, at a time when all members of the household are present, and during regular working hours on a weekday.
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="sm" >ADOPTION PREPARATION CLASS 4:</Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4"><b>Trust-Based Relational Intervention - </b>This training class will usually be held on a Saturday, and must be completed after the home study has been approved and before a child is placed into the home.  Based on the DVD &quot;Trust Based Parenting: Creating Lasting Changes in Your Child&apos;s Behavior,&quot; this is an in-depth training for parents of children in foster care. Almost without exception, these children have trauma-based behavioral issues.  Trust-Based Relational Intervention (TBRI) is a unique model created by developmental psychologists, Dr. Karyn Purvis and Dr. David Cross.  Dr. Purvis coined the phrase &quot;children from hard places&quot; to describe children who have experienced abuse, neglect, abandonment and/or trauma in early development.  Their survival behaviors can be confusing, frustrating, and difficult to manage even for the most patient and loving parents.  The DVD demonstrates proven practical skills and strategies for applying TBRI principles to everyday life to build strong parent-child connections, which lead to better behaviors.</Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="sm" >CHILD SEARCH AND PLACEMENT:</Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                For domestic adoptions, you will work cooperatively with your social worker during the search for and placement of your child. Families adopting internationally will follow the matching and placement process established by the child referral agency selected by the family.
                            </Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="sm" >POST-PLACEMENT/POST-ADOPTION SERVICES</Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">In fos-adopt cases, CAAFK will coordinate with the placing county to complete monthly or more frequent visits for at least six months, and usually longer. For international adoptions, CAAFK will complete the number of post-placement or post-adoption visits required by your child-placing agency. For domestic relinquishment adoptions, CAAFK will complete at least four visits within six months. In all cases, CAAFK will complete written reports of all post-placement/ post-adoption visits, and will write a final report to the court to summarize the placement.</Text>
                            <Heading color="blue.600" pt="4" pb="4" as="h4" size="sm" >FINALIZATION / RE-ADOPTION SERVICES:</Heading>
                            <Text as="p" fontSize="md" mt="4" mb="4">
                                CAAFK assists families with the paperwork necessary to finalize the adoption or complete a readoption, as applicable. The service includes preparation and filing of the Adoption Request, Accounting Report, Consent to Adoption, Court Report, VS-44 form, and proposed Adoption Order. The family is responsible to pay the filing fee for the new birth certificate(s), and to show up at the courthouse with the child at the day and time set for the hearing. Don&apos;t forget to bring your camera!
                            </Text>
                        </Col>
                        <Col md={4} sm={4} xs={12} >
                            <Table variant="simple" bgColor={"blackAlpha.50"}>
                                <Tbody>
                                    <Tr>
                                        <Td>Need an Adoption Home Study?</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            Find an Adoption Opportunity
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            How Much is Adoption?
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            How Long Does It Take to Adopt?
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            What is Open Adoption?
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            Preparing for Transracial Adoption
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            Is Special Needs Adoption <br /> Right for You?
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            Termination of Parental Rights
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            Finalizing an Adoption in California
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            California Adoption Laws
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            Adoption in California
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            Adoption Tips
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            Resources
                                        </Td>
                                    </Tr>
                                </Tbody>

                            </Table>
                        </Col>
                    </Row>

                </Container>
            </Box>

        </Layout >
    )
}

export default TheProcess

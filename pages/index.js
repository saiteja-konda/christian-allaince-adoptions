import Head from 'next/head'
import Image from 'next/image'
import SplitScreen from '../components/homeSection/SplitScreen'
import WithSubnavigation from '../components/navigation/WithSubnavigation'
import SmallWithSocial from "../components/Footer/index"
import styles from '../styles/Home.module.css'
import { Box, Center, Container, Heading, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react"
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Layout from '../components/core/Layout'

export default function Home() {
  return (
    <>
      <Layout>
        <Box mt="8" mb="72">
          <Container maxW="container.lg">
            <Row gutter={40}>
              <Col md={9} sm={8} xs={12}>
                <Center><Heading as="h3" size="lg" pb="8" pt="8" color="blue.600"><u>CAAFK Response to COVID-19</u></Heading></Center>
                <Heading color="blue.600" pt="4" pb="4" as="h5" size="sm" >Family Connections Christian Adoptions</Heading>
                <Text as="p" fontSize="md" mt="4" mb="4">We are a state-licensed, Hague-accredited, full-service adoption agency with six locations throughout Alabama. CAAFK focuses on placing the waiting children of the world into loving, forever families. This includes children in foster care in Alabama; children in overseas orphanages; and children whose birth parents wish to make a voluntary adoption plan. The agency also provides assistance to many legal guardians and foster parents who wish to adopt.</Text>
                <Text as="p" fontSize="md" mt="4" mb="4">
                  Whatever your adoption dreams, plans, or hopes may be, CAAFK will provide you with a confidential and thorough explanation of the types of adoption available to you, including the cost, timeline, and risk involved.  If you are pregnant and considering adoption, all of our services to you will be free of charge, even if you decide not to make an adoption plan for your child.
                </Text>
                <Text as="p" fontSize="md" mt="4" mb="4">
                  CAAFK operates in accordance with all state and federal non-discrimination laws and regulations. In addition, as a member of the Evangelical Council on Financial Accountability (ECFA), we are committed to ethical, responsible, and transparent financial stewardship. To that end, CAAFK&apos;s latest Form 990 is available upon request.
                </Text>
                <Box color="blue.600">
                  <blockquote style={{ textAlign: "center", lineHeight: "50px", fontStyle: "oblique", }}>
                    Our underlying foundation is that our work is
                    <br />
                    an expression of our love for our Savior, Jesus Christ;
                    <br />
                    our goal is to reflect His love, grace, and truth to you
                    <br />
                    throughout your adoption journey.
                  </blockquote>
                </Box>
                <Text as="p" fontSize="md" mt="4" mb="4">
                  CAAFK Uses Trust-Based Relational Intervention (TBRI) for Parent Training. TBRI teaches families how to create strong attachments through building bonds of affection and trust, by effectively dealing with any learning or behavioral disorders, and by disciplining with love and without fear. Click Here for Flyer Information.
                </Text>
              </Col>
              <Col md={3} sm={4} xs={12} >
                {/* <Table variant="simple" bgColor={"blackAlpha.50"}>
                  <Tbody>
                    <Tr>
                      <Td>E-Heartbeat Archives</Td>
                    </Tr>
                    <Tr>
                      <Td>Annual Reports</Td>
                    </Tr>
                  </Tbody>
                </Table> */}
              </Col>
            </Row>
          </Container>
        </Box>
      </Layout>
    </>
  )
}

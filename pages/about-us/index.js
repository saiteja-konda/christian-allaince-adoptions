import React from 'react'
import Layout from '../../components/core/Layout'
import { Box, Center, Container, Heading, ListItem, Table, Tbody, Td, Text, Tr, UnorderedList } from "@chakra-ui/react"
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

function AboutUs() {
  return (
    <Layout>
      <Box mt="8" mb="72">
        <Container maxW="container.lg">
          <Row gutter={40}>
            <Col md={9} sm={8} xs={12}>
              <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >About Us</Heading>
              <Text as="p" fontSize="md" mt="4" mb="4">
                With many years of experience, CAAFK is one of the largest private agencies in Alabama, in terms of the numbers of children placed each year.  The agency had its official beginning as &quot;Family Connections&quot; on Valentine&apos;s Day, February 14, 1983.  This was an appropriate day for an agency founded on business of the heart.
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                Founder Audrey Foster had worked at a county adoption agency long enough to learn that there were many children waiting to be adopted, and that they needed advocates.  She knew that if people heard about these children and were assisted through the adoption process with respect and good humor, they would welcome waiting children into their families.
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                So, with a telephone, a secretary, and two donated rooms in the back of a church, Audrey began the work. Volunteers, mostly adoptive parents, joined the effort.  The first year, the agency placed 16 children.
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                Now, over 36 years later, the agency has placed (directly or cooperatively) over 5300 children from the United States and around the world into adoptive families.  Audrey&apos;s daughter, Alison Foster Davis, served as the second Executive Director from May 2001 through December 2016; the current Executive Director is Wayne Mott, who has been with CAAFK since 2005.
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                Six CAAFK offices are located throughout Alabama, with the main office in Modesto, and branch offices in Sacramento, Fresno, Carlsbad, Ventura, and San Luis Obispo.  The agency is licensed statewide and employs approximately 35 people, with many faithful volunteers.
              </Text>
              <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >
                Our Mission
              </Heading>
              <Text as="p" fontSize="md" mt="4" mb="4">
                Family Connections Christian Adoptions exists to assist the waiting children of the world into loving, permanent families. As a living expression of our love for Jesus Christ, we are committed to providing quality adoption services to children everywhere in need of forever homes, and to every family who welcomes them.
              </Text>
              <Heading color="blue.600" pt="4" pb="4" as="h4" size="md" >Privacy Policy</Heading>
              <Text as="p" fontSize="md" mt="4" mb="4">
                This site is operated by Family Connections Christian Adoptions. We want to make your experience online satisfying and safe. Because the site collects certain information about each visitor, we want you to fully understand our privacy policy, and the terms and conditions surrounding the collection and use of that information. This privacy statement discloses what information we gather and how we use it.
              </Text>
              <Text as="b" fontSize="md" mt="4" mb="4">
                What information do we collect?
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                We collect information from you when you fill out a form.
              </Text>
              <Text as="b" fontSize="md" mt="4" mb="4">
                How do we use your information?
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                Any of the information we collect from you may be used in one of the following ways:
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4" ml="38">
                <UnorderedList>
                  <ListItem>
                    To improve our website. We continually strive to improve our website offerings based on the information and feedback we receive from you.
                  </ListItem>
                  <ListItem>To improve customer service. Your information helps us to more effectively respond to your requests and needs.</ListItem>
                  <ListItem>To process transactions. Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the service requested.</ListItem>
                </UnorderedList>
              </Text>
              <Text as="b" fontSize="md" mt="4" mb="4">
                How do we protect your information?
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
              </Text>
              <Text as="b" fontSize="md" mt="4" mb="4">
                Do we use cookies?
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                We do use cookies for Google Analytics.
              </Text>
              <Text as="b" fontSize="md" mt="4" mb="4">
                Do we disclose any information to outside parties?
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.  This does not include trusted third parties who assist us in operating our website, conducting our business, or providing services to you, so long as those parties agree to keep this information confidential.  We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect property or safety.  Non-personally-identifiable, visitor information may be provided to other parties for marketing, advertising, or other uses.
              </Text>
              <Text as="b" fontSize="md" mt="4" mb="4">
                Alabama Online Privacy Protection Act Compliance
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                Because we value your privacy, we have taken the necessary precautions to be in compliance with the Alabama Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent.
              </Text>
              <Text as="b" fontSize="md" mt="4" mb="4">
                Children&apos;s Online Privacy Protection Act Compliance
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                We are in compliance with the requirements of Children&apos;s Online Privacy Protection Act; we do not collect any information from anyone under 13 years of age.  Our website, products and services are all directed to people who are at least 13 years old or older.
              </Text>
              <Text as="b" fontSize="md" mt="4" mb="4">
                Online Privacy Policy Only
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                This online privacy policy applies only to information collected through our website and not to information collected offline.
              </Text>
              <Text as="b" fontSize="md" mt="4" mb="4">
                Your Consent
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                By using our site, you consent to our website privacy policy.
              </Text>
              <Text as="b" fontSize="md" mt="4" mb="4">
                Changes to our Privacy Policy
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                If we decide to change our privacy policy, we will post those changes on this page.
              </Text>
              <Text as="b" fontSize="md" mt="4" mb="4">
                Contact Us
              </Text>
              <Text as="p" fontSize="md" mt="4" mb="4">
                You may contact us at +1(781) 786-4586 with any questions regarding this privacy policy.</Text>
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
  )
}

export default AboutUs

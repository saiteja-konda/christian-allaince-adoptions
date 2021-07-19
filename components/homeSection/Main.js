import React from 'react'
import { Box } from "@chakra-ui/react"
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

function Main() {
    return (

        <Row gutter={40}>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>xl-10</Col>
            <Col xs={10} sm={8} md={6} lg={4} xl={2}>xl-2</Col>
        </Row>

    )
}
export default Main

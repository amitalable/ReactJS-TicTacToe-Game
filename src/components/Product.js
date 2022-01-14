import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Card, CardBody, Col, Row } from "reactstrap";

function Product() {
  const { productList } = useContext(ThemeContext);
  return (
    <Row>
      <Col md={6} className="offset-md-3">
        {productList.map((value, index) => (
          <Card color="warning" key={index}>
            <CardBody className="box">
              <div style={{ margin: "5px" }}>{value.title}</div>
              <div>{value.price}</div>
            </CardBody>
          </Card>
        ))}
      </Col>
    </Row>
  );
}

export default Product;

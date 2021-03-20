import { useState } from "react";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function BmiCal() {
  const [weight, updateWeight] = useState();
  const [height, updateHeight] = useState();
  function calculateBmi() {
    console.log(`this is weight and height ${weight} ${height}`);
    const heightInMeter = height / 100;
    console.log(`H in meter ${heightInMeter}`);
    const finalBmi = weight / (heightInMeter * heightInMeter);
    console.log(finalBmi.toFixed(2));
    const ultiBmi = finalBmi.toFixed(2);
    let bmistatus = "";
    if (ultiBmi < 18) {
      bmistatus = "you are underweight";
    } else if (ultiBmi <= 24.9) {
      bmistatus = "Your are Normal";
    } else if (ultiBmi <= 29.9) {
      bmistatus = "Your are Overweight";
    } else if (ultiBmi >= 30) {
      bmistatus = "Your are In Obesity";
    } else {
      bmistatus = "please enter youe correct height and wieght";
    }
    alert(`Your BMI is ${ultiBmi}. ${bmistatus}`);
  }
  function onChangeHandlerWeight(e) {
    updateWeight(e.target.value);
  }
  function onChangeHandlerHeight(e) {
    updateHeight(e.target.value);
  }
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter Your Weight:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter weight in kg."
                  value={weight}
                  onChange={onChangeHandlerWeight}
                />
                <Form.Text className="text-muted">
                  We'll never share your Personal Data with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>

            <Col md>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter Your Height:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter height in cm."
                  value={height}
                  onChange={onChangeHandlerHeight}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Apply Condition" />
          </Form.Group>
          <Button variant="success" onClick={calculateBmi}>
            Calclate
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default BmiCal;

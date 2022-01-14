import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useContext, useState } from "react";
// import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
// import Product from "./components/Product";

const itemArray = new Array(9).fill("empty");

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };
  const checkIsWinner = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
  };
  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already Filled", { type: "error" });
    }
    checkIsWinner();
  };

  const checkDraw = () => {
    const arrayLength = itemArray.filter((value) => value === "empty").length;
    if (!winMessage && arrayLength === 0) {
      return true;
    }
    return false;
  };
  // const { productList } = useContext(ThemeContext);
  // console.log(productList);
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      {/*
        Learning the Context Consumer. Ignore the commented Lines
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(context) => (
            <Row>
              <Col md={6} className="offset-md-3">
                {context.productList.map((value, index) => (
                  <Card color="warning" key={index}>
                    <CardBody className="box">
                      <div style={{ margin: "5px" }}>{value.title}</div>
                      <div>{value.price}</div>
                    </CardBody>
                  </Card>
                ))}
              </Col>
            </Row>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider> */}
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="my-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the Game
              </Button>
            </div>
          ) : checkDraw() ? (
            <>
              <h1 className="text-center text-warning">Draw</h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the Game
              </Button>
            </>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card
                color={itemArray[index] !== "empty" && "warning"}
                key={index}
                onClick={() => changeItem(index)}
              >
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
      {/* 
      
      Below are the codes for context API. Ignore.
      
      <ThemeProvider>
        <Row>
          <Col md={6} className="offset-md-3">
            <Product />
          </Col>
        </Row>
      </ThemeProvider> */}
    </Container>
  );
}

export default App;

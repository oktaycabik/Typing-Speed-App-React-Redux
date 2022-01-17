import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { CopyVerbs, SetVerbs,setWordsIndex } from "./redux/fastWrite/FastWriteSlice";
import { Card, Col, Container, Row, Input, CardBody } from "reactstrap";
import randomWords from "random-words";

import "./style.css";
function App() {
  const [input, setInput] = useState("");
  const [activeVerbs, setActiveVerbs] = useState([])
  const [activeVerbs2, setActiveVerbs2] = useState([])
  const dispatch = useDispatch();
  const write = useSelector((state) => state.item.verbs);
  
  const wordsindex = useSelector((state) => state.item.wordsindex);
  const corect = useSelector((state) => state.item.corect);
 
  console.log(input);

  
  useEffect(() => {
    dispatch(SetVerbs(randomWords(20)));
  }, [dispatch]);
  const handleSubmit = ({ keyCode }) => {
    if (keyCode === 32) {
      activeVerbs.push(input)
      
      setInput("");
     
     dispatch(CopyVerbs(input))
    dispatch(setWordsIndex(wordsindex))
    
   }
    
  };  
  return (
    <Container>
      <Row className="mt-5  justify-content-center">
        <h1 className="header-h1">Typing Speed App</h1>
        <Col xs="6">
          <Card>
            <CardBody>
              <div>
                {write.map((a, key) => (
                  <span
                   
                    key={key}
                  >
                    {a.split("").map((a,key) => (
                      <span key={key}>{a}</span>
                    ))}{" "}
                  </span>
                ))}
                <h6>Bilinen Kelime Sayısı:{corect}</h6>
              </div>
            </CardBody>
            <CardBody className="cardbody-style">
            <Input
              type="text"
              value={input}
              onKeyDown={handleSubmit}
              onChange={(e) => setInput(e.target.value)}
            />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

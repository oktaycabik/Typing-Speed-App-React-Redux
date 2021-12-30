import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { CopyVerbs, SetVerbs,setWordsIndex } from "./redux/fastWrite/FastWriteSlice";
import { Card, Col, Container, Row, Input, CardBody } from "reactstrap";
import randomWords from "random-words";

import "./style.css";
function App() {
  const [input, setInput] = useState("");
  // const [wordsindex, setwordsindex] = useState(0);
  // const [corect, setcorect] = useState(0)
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
      setInput("");
     
     dispatch(CopyVerbs(input))
    dispatch(setWordsIndex(wordsindex))
   }
    
  };
 

 
  return (
    <Container>
      <Row className="mt-5  justify-content-center">
        <Col xs="6">
          <Card>
            <CardBody>
              <div>
                {write.map((a, key) => (
                  <span
                    className={input===a ? "green" : "red"}
                    key={key}
                  >
                    {a.split("").map((a) => (
                      <span>{a}</span>
                    ))}{" "}
                  </span>
                ))}
                <span>Bilinen Kelime Sayısı:{corect}</span>
              </div>
            </CardBody>
            <Input
              type="text"
              value={input}
              onKeyDown={handleSubmit}
              onChange={(e) => setInput(e.target.value)}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

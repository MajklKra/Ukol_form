import React, { useState, useEffect } from "react";
import "./App.css";
import validateFloat from "./functions/validateFloat"
import NumImp from "./components/NumImp"
import RbGroup from "./components/RbGroup"
import ChbGroup from "./components/ChbGroup"
import Select from "./components/Select"
import Range from "./components/Range"
import Clock from "./components/Clock"
import ProgressBar from "./components/ProgressBar"
import TextBox from "./components/TextBox"
import Button from "./components/Button"
import TextArea from "./components/TextArea"
import File from "./components/File"
import saveText from "./functions/saveText"

function App() {

  const [mem1, setMem1] = useState(0)
  const [additives, setAd] = useState("vanilkova")
  const creams = ["smetanova", "jogurtova", "nizkotucna"]
  const [cream, setCreams] = useState("smetanova")
  const [amount, setAmount] = useState(66)
  const [checkboxes,setCheckboxes] = useState([])
  const [scoops, setScoops] = useState(0)
  const [initialCountDown, setInitialCountDown] = useState(10)
  const [countDown, setCountDown] = useState(10)
  const [text1, setText1] = useState(10)
  const [text2, setText2] = useState(0)
  const [addition,setAddition] = useState(0)
  const [text, setText] = useState("")


  const [s, setS] = useState("nevim")
  


/*   useEffect(() => 
  {
    let temp = prompt("Zadejte cislo float", 10)
    while (!validateFloat(temp)) 
    {
      temp = prompt("Zadejte cislo float", 10)
    }
    setMem1(temp);
    setText1(temp);
  }, []) */
  
    useEffect(() => {
      if (countDown > 0) {
        const timer = setInterval(() => {
          setCountDown(countDown - 1)
        }, 1000)
        return () => clearInterval(timer)
      }
    }, [countDown])
  
    const progress =
      countDown > 0
        ? ((initialCountDown - countDown) / initialCountDown) * 100
        : 100 



       const soucet = text1.value + text2.valueů  



  const handleData = (data, source) => {
    switch (source) {
      case "rbg-creams": {
        setAd(data)
        break
      }

      case "ch-checkboxes":{
        setCheckboxes(data)
        break;
      }

      case "number-Scoops":{

        setScoops(data)
        break
      }

      case "sel-creams": {
        setCreams(data)
        break
      }

      case "rng-amount": {
        setAmount(data)
        break
      }

      case "tbx-1": {
        setText1(data)
        break
      }

      case "tbx-2": {
        setText2(data)
        break
      }

      case "txa-text": {
        setText(data)
        break
      }

      case "file-load": {
        setText(data)
        break
      }
   
      
      default:
        break
    }
  }

  
  const handleEvent = (source) => {
    switch (source) {
       case "btn-Addition":
        {
          setAddition()
          break;
        }

        case "btn-download": {
          saveText(text)
          break
        }

      default:
        break
    }
  } 

  
  return (
    
    <div className="bg-info-subtle vw-100 vh-100">
      <div className="container bg-warning-subtle">
        <div className="row p-4">
          <div className="col-6">
           
           <p>
              {additives}, {scoops} kopecky, {checkboxes}
            </p>

            <RbGroup
              label="prichut zmrzliny"
              id="rbg-creams"
              selectedValue={additives}
              handleData={handleData}
              dataIn={[
                { label: "vanilkova", value: "vanilkova" },
                { label: "cokoladova", value: "cokoladova" },
                { label: "michana", value: "michana" },
              ]}
            />

            <ChbGroup
              label="Neco navrch"
              id = "ch-checkboxes"
              dataIn ={[
                {label: "kousky orisku", value:"kousky orisku "},
                {label: "coko hoblinky", value:"coko hoblinky "},
                {label: "karamelove krupinky", value:"karamelove krupinky "},
              ]}
              selectedValue={checkboxes}
              handleData={handleData}
            />

              <div className="col-6">
                <NumImp
                  label="Pocet kopecku (max. 4)"
                  dataIn={scoops}
                  id="number-Scoops"
                  handleData={handleData} 
                />
              </div>

              <Select
              dataIn={creams}
              selectedValue={cream}
              label="Vyberte druh zmrzliny"
              id="sel-creams"
              handleData={handleData}
            ></Select>

            <Range
              id="rng-amount"
              label="Misto na disku"
              min={0}
              max={100}
              dataIn={amount}
              handleData={handleData}
            />
          
          <Clock  />  , zbyva {amount} % na disku
          </div>


          <div className="col-6">
          
            <h1>Fuck you motherfucker2</h1>

            <ProgressBar id="pgb-progress" dataIn={progress} />
            <p>Instalace probiha {countDown} s </p>

            <div className="row">
              <div className="col-3">{
                <TextBox    
                  label="scitanec 1"
                  dataIn={text1}
                  id="tbx-1" 
                  handleData={handleData}          
                />}
              </div>
              <div className="col-3">
                <TextBox    
                    label="scitanec 2"
                    dataIn={text2}
                    id="tbx-2"
                    handleData={handleData}            
                  />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <Button
                  id="btn-Addition"
                  label="Vypocitej soucet"
                  handleEvent={handleEvent} 
                ></Button>
              </div>
              <div className="col-3">
               <p>soucet je {soucet}</p> 
              </div>
            </div>

            <TextArea
              id="txa-text"
              label="Operace s textem"
              dataIn={text}
              handleData={handleData}
              height={150}
            />

            <div className="row">
              <div className="col-6">
                <File
                  id="file-load"
                  label="Nacti text ze souboru"
                  handleData={handleData}
                />
              </div>
              <div className="col-6">
                <Button
                  id="btn-download"
                  label="Stahni soubor s textem"
                  handleEvent={handleEvent}
                ></Button>
              </div>
            </div>
       
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

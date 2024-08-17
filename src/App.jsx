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
  const creams = ["smetanová", "jogurtová", "nízkotučná"]
  const [cream, setCream] = useState("smetanová")
  const [amount, setAmount] = useState(66)
  const [checkboxes,setCheckboxes] = useState([])
  const [scoops, setScoops] = useState(1)
  const [initialCountDown, setInitialCountDown] = useState(10)
  const [countDown, setCountDown] = useState(10)
  const [text1, setText1] = useState(10)
  const [text2, setText2] = useState(0)
  const [addition,setAddition] = useState(0)
  const [text, setText] = useState("")


  const [s, setS] = useState("")
  const [result, setResult] = useState(null);
  


   useEffect(() => 
  {
    let temp = prompt("Zadejte cislo float", 10)
    while (!validateFloat(temp)) 
    {
      temp = prompt("Zadejte cislo float", 10)
    }
    setMem1(temp);
    setText1(temp);
  }, []) 
  
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
        setCream(data)
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
          
          /* setAddition() */
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

  const handleSum = () => 
    {

    const num1 = parseFloat(text1);
    const num2 = parseFloat(text2);

   /*  if (isNaN(num1) || isNaN(num2)) {
      alert("Prosím zadejte platné číslo.");
      setS("Zadejte validni scitance a zmacknete tlacitko vypoctu.")
      return;
    } */

    if (!validateFloat(text1) || !validateFloat(text2)) {
      alert("Prosím zadejte platné číslo.");
      setS("Zadejte validní sčítance a zmačkněte tlačítko výpočtu.")
      return;
    }


    /* setResult(num1 + num2); */

    const sum = num1 + num2;
    /* setResult(sum); */
    setS("Součet je: " + sum.toString())
  };

  
  return (
    
    <div className="bg-info-subtle vw-100 vh-100" id="d1">
      <div className="container bg-warning-subtle" id ="d2">
        <div className="row p-4" id ="d3">
          <div className="col-6">
           
           <p>
              {additives} {checkboxes} {scoops} kopečky {cream}
            </p>

            <RbGroup
              label="přichuť zmrzliny"
              id="rbg-creams"
              selectedValue={additives}
              handleData={handleData}
              dataIn={[
                { label: "vanilková", value: "vanilková" },
                { label: "čokoladová", value: "čokoladová" },
                { label: "míchaná", value: "míchaná" },
              ]}
            />
            <br />
            <ChbGroup
              label="Něco navrch?"
              id = "ch-checkboxes"
              dataIn ={[
                {label: "kousky oříšků", value:"s kousky oříšků "},
                {label: "čoko hoblinky", value:"s čoko hoblinky "},
                {label: "karamelové křupinky", value:"s karamelové křupinky "},
              ]}
              selectedValue={checkboxes}
              handleData={handleData}
            />
            <br />
              <div className="col-12">
                <NumImp
                  label="Počet kopečků (max. 4)"
                  dataIn={scoops}
                  id="number-Scoops"
                  handleData={handleData} 
                />
              </div>
               <br /> 
              <Select
              dataIn={creams}
              selectedValue={cream}
              label="Vyberte druh zmrzliny"
              id="sel-creams"
              handleData={handleData}
            ></Select>
            <br />
            <Range
              id="rng-amount"
              label="Misto na disku"
              min={0}
              max={100}
              dataIn={amount}
              handleData={handleData}
            />
          
          <Clock  />  , zbývá {amount} % na disku
          </div>

          <div className="col-6">
          
            <ProgressBar id="pgb-progress" dataIn={progress} />
            <p>Instalace probíhá, čekejte {countDown} sekund </p>

            <div className="row">
              <div className="col-6">{
                <TextBox    
                  label="sčítanec 1"
                  dataIn={text1}
                  id="tbx-1" 
                  handleData={handleData}          
                />}
              </div>
              <div className="col-6">
                <TextBox    
                    label="sčítanec 2"
                    dataIn={text2}
                    id="tbx-2"
                    handleData={handleData}            
                  />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-6">
                {/* <Button
                  id="btn-Addition"
                  label="Vypocitej soucet"
                  handleEvent={handleEvent} 
                ></Button> */}

              <button onClick={handleSum}>Vypočítej součet</button>

              </div>
              <div className="col-6">
               <p><b> {s} </b></p> 
              </div>
            </div>
            <br />
            <TextArea
              id="txa-text"
              label="Operace s textem"
              dataIn={text}
              handleData={handleData}
              height={150}
            />
            <br />
            <div className="row">
              <div className="col-6">
                <File
                  id="file-load"
                  label="Načti text ze souboru"
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

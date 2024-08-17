import React, { useState, useEffect } from "react";
import "./App.css";
import validateFloat from "./functions/validateFloat"
import NumImp from "./components/NumImp"
import RbGroup from "./components/RbGroup"
import ChbGroup from "./components/ChbGroup"
import Select from "./components/Select"
import Range from "./components/Range"
import Clock from "./components/Clock"

function App() {

  const [mem1, setMem1] = useState(0)
  const [additives, setAd] = useState("vanilkova")
  const creams = ["smetanova", "jogurtova", "nizkotucna"]
  const [cream, setCreams] = useState("smetanova")
  const [amount, setAmount] = useState(66)
  const [checkboxes,setCheckboxes] = useState([])
  const [scoops, setScoops] = useState(0)


  useEffect(() => 
  {
    let temp = prompt("Zadejte cislo float", 10)
    while (!validateFloat(temp)) 
    {
      temp = prompt("Zadejte cislo float", 10)
    }
    setMem1(temp);
  }, [])

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
   
      
      default:
        break
    }
  }

  console.log(checkboxes)

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
          
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react/cjs/react.development";
import Input from "./Input";
import Output from "./Output";
import Images from "./Images";
import './App.css';




function App() {

  const [info,setinfo]=useState({});
  const [img,setimg]=useState({});

  const [loading,setloading]=useState(true);


  function extractinfo(specs)
  {
      setinfo(specs);
  }


  function extractimg(url)
  {
    setimg(url);
  }

  function outputimg(imglink)
  {
    console.log(imglink);
    setimg({...img,url:imglink.data.url});
  }


  function outputloading()
  {
     setloading(false);
  }

  function outputloaded()
  {
    setloading(true);
    
  }

  return (
       <>
         <header>Meme Generator</header>
         <div class="main-container">
          <div className="img-section">
            <Images getimg={extractimg} />
          </div>

          <div className="output-section">
            <Output list={info} meme={img}  loading={loading} />
          </div>

          <div className="input-section">
            <Input passinfo={extractinfo} meme={img} outputimg={outputimg} outputloading={outputloading} outputloaded={outputloaded}/>
          </div>
             
         
       </div>
       </>
       
  );
}

export default App;

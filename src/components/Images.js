import React,{useState,useEffect} from "react";
import './Images.css';


function Images(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then((result) => {
            setIsLoaded(true);
            setItems(result.data.memes);

            
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div> 
             <div className="image-section-header">
               <h1>Select Image</h1>
             </div>
             <div className="img-container">
                {items.map(item=>(
                    <div key={item.id} className="img-block" onClick={(e)=>(props.getimg(item))}> 
                        <img className="meme-img" src={item.url} />
                    </div>   
                ))}
             </div>
               
          </div>
      );
    }


  }

  export default Images;
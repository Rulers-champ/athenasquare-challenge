import { specialChars } from "@testing-library/user-event";
import React, { useState } from "react";
import './Input.css';

function Input(props)
{
    const id=props.meme.id;

    //console.log(id);

    const [spec,setspec]=useState({
        username:"PritamKhatua",
        password:"Pritam@10054",
        boxes:[]
    });

   

    function  generatememe()
    {
        
        props.outputloading();

        setTimeout(()=>{
                //console.log(spec);
            let url=`https://api.imgflip.com/caption_image?template_id=${id}&username=${spec.username}&password=${spec.password}`;
            {
                spec.boxes.map((item,idx)=>{
                url+=`&boxes[${idx}][text]=${item.text}`;
                })

            //console.log(url);
            }
            

            fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                props.outputimg(data);
            });
            
            setspec({...spec,boxes:[]});
            
            props.outputloaded();

        },5000);

        
        
       
    }



   
    return (
        <div className="input-container">
           <div className="image-section-header"><h1>Input Tab</h1></div>
           <form class="input-block">
                {[...Array(props.meme.box_count)].map((_,idx)=>(
                    <input 
                    className="input-area" 
                    type="text" 
                    onChange={(event)=>{
                        const newbox=spec.boxes;

                        newbox[idx]={text:event.target.value};

                        setspec({...spec,boxes:newbox});
                    }}    

                    
                    />                   
                    
                ))}

              
           </form>    
           <button className="btn" onClick={generatememe}>Generate Meme</button>  
        </div>
    );
}

export default Input;
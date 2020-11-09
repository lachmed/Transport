import React, {useEffect, useState,useReducer} from 'react';
import "./ColisStyle.css";

    const collect= (data,action) =>{
                const {name,value}=action;
                return {...data, [name]:value }
    }


const ColisForm = ({ elmts }) => {

        const [elmntsTab, setElmntsTab] = useState([]);
        const [data,dispatch]=useReducer(collect,{});

    useEffect(() =>{        
            setElmntsTab(Object.values(elmts));    
        },[]);

        useEffect(()=>console.log(data));

        const verifierData = () =>{
           
            
            
        }


        const handleSubmit = (e)=>{
            e.preventDefault();
            console.log('submitted')

        }
        return(
            <>
                <form key={elmntsTab} onSubmit={event =>{  handleSubmit(event) }}>
                    <fieldset>
                 
                    {  
                          
                            elmntsTab.map( (elm, index) => {
                                    if(!index)
                                    {
                                        return <legend key={index*2}> {elm} </legend> 
                                    }

                                    if(elm.label==="Fragile:")
                                    {
                                        return <>
                                         <label key={elm.label}> {elm.label} </label>
                                         <input 
                                         type={elm.input1.type} 
                                         value={elm.input1.value} 
                                         name={elm.input1.name}
                                         key={elm.input1.value}
                                         onChange={event => dispatch({ name:event.target.name, value:event.target.value })}
                                         /> {elm.input1.value}
                                         <input 
                                         type={elm.input2.type} 
                                         value={elm.input2.value} 
                                         name={elm.input2.name}
                                         key={elm.input2.value}
                                         onChange={event => dispatch({ name:event.target.name, value:event.target.value })}                                         
                                         /> {elm.input2.value}
                                          </>
                                    }

                                    if(elm.label==="Addresse:")
                                    {
                                        return <>
                                                <label key={elm.label}>{elm.label}</label>
                                                <textarea 
                                                    cols={elm.textarea.cols}
                                                    rows={elm.textarea.rows}
                                                    name={elm.textarea.name}
                                                    onChange={event => dispatch({ name:event.target.name, value:event.target.value })}
                                                key={elm.textarea.name}/>

                                        </>
                                    }

                                    return <>
                                           <label key={elm.label}>{elm.label}</label>
                                           <input 
                                            type={elm.input.type} 
                                            name={elm.input.name}                                          
                                            key={elm.input.name}
                                            onChange={event => dispatch({ name:event.target.name, value:event.target.value })}
                                            /> 
                                    </>

                        })
                    }
                    </fieldset>

                    <button onClick={()=>{ verifierData() ? console.log("testTrue") : console.log("testFalse")}}>Next</button>
                </form>
                
            </>
    );
}


export default ColisForm;
import React,{useState} from 'react';

function Form( {cities} ){

    let [filter,setFilter]=useState([]);
    let [values,setValues]=useState('');

    function search(value){
        let updatedList=[];
        value && cities.map((city)=>{
            if(city.toLowerCase().includes(value) )
                updatedList.push(city);
        });
        setValues(value);
        setFilter(updatedList);
    }

    function displauInput(value){
        setValues(value);
        setFilter([]);
    }


    return(
        <div>
            <p>Search cities of india:</p>
            <input value={values} type='text' onChange={(e)=>{search(e.target.value)}} ></input>
            <ul>
                {filter.map((city)=>{
                    return <li onClick={(e)=>{displauInput(e.target.innerText)}}>{city}</li>
                })}
            </ul>
        </div>
    )
}

export default Form;
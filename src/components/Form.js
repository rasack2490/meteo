import '../styles/content.css'
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'




const Form = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

 const HandleSearch = (e) => {
    console.log(search)
     navigate('/meteo', {state: {search}})
     e.preventDefault()
      //console.log(search)
 
 }

    return (
         <form  className="p-3">
            <div className="input-group mb-3 p-5 input-group-lg">
                <input type="text" className="form-control" placeholder='Burkina Faso / Ouagadougou / Bobo Dioulasso' aria-describedby="search" name='search' value={search} onChange={handleSearchChange} />
                <button className="btn btn-primary boutt" type="button" id="search" onClick={HandleSearch} >Recherche</button>
            </div>
        </form> 
      
     
    )
}

export default Form























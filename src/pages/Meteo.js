import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

const Meteo = () => {
    const title = <a className="navbar-brand" href={'/'}>RETOUR</a>
    const {state} = useLocation();
    const {search} = state
    const [data, setData] = useState([])
    console.log(setData)
    
    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid=3ad759fa739b2cae0f62d72cb3a23996")
        .then((res) => setData(res.data))
    }, [])
    // console.log(data.weather[0].icon)
    
    return (
        <div className='pb-5'>
            <Header Title={title} />
            <div className='text-center mt-3'>
            { /*data?.current?.weather_icons[0] && <img className='img_taille' src={data.current.weather_icons[0] } alt="" />*/}
            {data?.weather[0]?.icon && <img className='img_taille' src={data.weather[0].icon+'.jpg' } alt="" />}

            <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table> 
            </div>
            
        </div>
    )
}

export default Meteo;
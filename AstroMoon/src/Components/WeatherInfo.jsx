import { useEffect, useState, Component } from "react"
import { useParams } from "react-router-dom"
const API_KEY = import.meta.env.VITE_APP_API_KEY




const WeatherInfo = ({symbol}) => {

  const [fullDetails, setFullDetails] = useState(null)

  useEffect(() =>{
    const getCatDetail = async () => {
      const details = await fetch (
        `https://api.thecatapi.com/v1/breeds?&key=${API_KEY}`
      )
     
      const detailsJson = await details.json()
      const found = detailsJson.find((breed) => breed.id === symbol)

      setFullDetails(found)
    }
    getCatDetail().catch(console.error)
  },[symbol])

  if (!fullDetails) {
    return <div>Loading...</div>
  }

  
  
  return (
    <div>
    <h1>{fullDetails.name}</h1>
    <p><strong>Origin:</strong> {fullDetails.origin}</p>
      <p><strong>Description:</strong> {fullDetails.description}</p>
      
      <img
        src={`https://cdn2.thecatapi.com/images/${fullDetails.reference_image_id}.jpg`}
        alt={`${fullDetails.name} cat`}
        style={{ width: "300px", borderRadius: "10px", marginTop: "1rem", alignItems: "center"}}/>
<table>
  <tbody> 
    <tr>
      <th>Origin</th>
      <td>{fullDetails.origin} </td>
    </tr>
    <tr>
      <th>Intelligence</th>
      <td>{fullDetails.intelligence} </td>
    </tr>
    <tr>
      <th>Temperment</th>
      <td>{fullDetails.temperament}</td>
    </tr>
    <tr>
      <th>Lifespan</th>
      <td>{fullDetails.life_span} </td>
    </tr>
    <tr>
      <th>Child Friendly </th>
      <td>{fullDetails.child_friendly} </td>
    </tr>
    <tr>
      <th>Dog Friendly</th>
      <td>{fullDetails.dog_friendly} </td>
    </tr>
    <tr>
      <th>Social Needs </th>
      <td>{fullDetails.social_needs}</td>
    </tr>

  
    
  </tbody>
</table>

    </div>
  )
}

export default WeatherInfo

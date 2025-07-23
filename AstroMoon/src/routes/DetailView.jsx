import WeatherInfo from "../components/weatherInfo"
import { useParams } from "react-router-dom"




function DetailView() {
    const {symbol} = useParams()

return(
<div>
<WeatherInfo symbol = {symbol}/>


</div>
    )


}
export default DetailView
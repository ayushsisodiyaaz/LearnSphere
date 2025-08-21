import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function WeatherInfo({info}) {

    const Init_URL = "https://images.unsplash.com/photo-1575214997383-a3592741c334?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Hot_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SG90fGVufDB8fDB8fHww";
    const Cold_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const Rain_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div style={{ maxWidth: 400, margin: "0 auto", padding: 10 }}>
            <h2>Weather Information {info.weather}</h2>
           
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? Rain_URL : info.temp> 15 ? Hot_URL : Cold_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 80 ? <ThunderstormIcon/> : info.temp> 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
           
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
        
        <p>Temperature = {info.temp}&deg;C </p>
        <p>Humidity = {info.humidity} </p>
        <p>TemperatureMax = {info.tempMax}&deg;C </p>
        <p>TemperatureMin = {info.tempMin}&deg;C </p>
        
      </Typography>
           
      </CardContent>

    </Card>
    </div>
        
    )
}
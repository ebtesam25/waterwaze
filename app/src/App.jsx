import logo from './assets/logo.png';
import footerbg from './assets/footer.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';
import { ReactComponent as Manatee } from './assets/manatee1.svg';
import { ReactComponent as ManateeSad } from './assets/manateeSad.svg';
import { ReactComponent as ManateeBigSad } from './assets/manateeBigSad.svg';
import { ReactComponent as ManateeHappy } from './assets/manateeHappy.svg';
import { ReactComponent as ManateeVeryHappy } from './assets/manateeVeryHappy.svg';
import Manatee1 from './assets/manatee1.svg';
import { FaBeer } from 'react-icons/fa';


import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function App() {
  const defaultProps = {
    center: {
      lat: 27.9747, 
      lng: -82.8175
    },
    zoom: 20
  };

  const _getdata = () => {
  

  let basic ={"data": [
    {"timestamp": "1615669539", "temperature": "86", "watertemperature": "76", "humidity": "79", "location": {"lat": "27.974712393567174", "lon": "-82.81754788382354"}}, 
    {"timestamp": -11111111, "temperature": 83, "watertemperature": 79, "humidity": 75, "location": {"lat": 20.4587, "lon": -112.86825}},
    ]}
    ;
    let extended = {"data": [
      {"timestamp": "1638203921", "temperature": "86", "watertemperature": "76", "salinity": "16.98", "turbidity": "4.32", "tds": "517", "ph": "7.16", "humidity": "79", "location": {"lat": "27.974712393567174", "lon": "-82.81754788382354"}}, 
    {"timestamp": "1638213921", "temperature": "86", "watertemperature": "76", "salinity": "16.98", "turbidity": "4.32", "tds": "517", "ph": "7.16", "humidity": "79", "location": {"lat": "27.974712393567174", "lon": "-82.81754788382354"}}, 
    {"timestamp": "1638223921", "temperature": "86", "watertemperature": "76", "salinity": "16.98", "turbidity": "4.32", "tds": "517", "ph": "7.16", "humidity": "79", "location": {"lat": "27.974712393567174", "lon": "-82.81754788382354"}},
      {"timestamp": "1638233921", "temperature": "86", "watertemperature": "76", "salinity": "16.98", "turbidity": "4.32", "tds": "517", "ph": "7.16", "humidity": "79", "location": {"lat": "27.974712393567174", "lon": "-82.81754788382354"}}]}

    let response ={"data": [
      {"timestamp": 1615730947, "temperature": 93, "watertemperature": 82, "humidity": 97, "location": {"lat": "27.6368463548", "lon": "-82.699182990"}, "mood": "bigsad", "name":"Moe the Manatee", "hue":50, "health":5, "age":21, "link":"https://testnets.opensea.io/assets/0xee45b41d1ac24e9a620169994deb22739f64f231/909851360878274439970099961803242793892482282520577"},
      {"timestamp": 1615730591, "temperature": 63, "watertemperature": 69, "humidity": 56, "location": {"lat": "27.794510", "lon": "-82.402000"}, "mood": "sad", "name":"Mary the Manatee", "hue":50, "health":5, "age":51,"link":"https://testnets.opensea.io/assets/0xee45b41d1ac24e9a620169994deb22739f64f231/90985136087827443997009996180324279389908051646966772227565025"},
      {"timestamp": 1615730444, "temperature": 86, "watertemperature": 76, "humidity": 79, "location": {"lat": 27.974712393567174, "lon": -82.81754788382354}, "mood": "neutral", "name":"Matt the Manatee", "hue":0, "health":6, "age":35,"link":"https://testnets.opensea.io/assets/0xee45b41d1ac24e9a620169994deb22739f64f231/909851360878274439970099961803242793899080527544331209183747637249"},
      {"timestamp": 1615730343, "temperature": 74, "watertemperature": 75, "humidity": 67, "location": {"lat": 29.487830, "lon": -82.977030}, "mood": "happy", "name":"Martha the Manatee", "hue":-100, "health":9, "age":23, "link":"https://testnets.opensea.io/assets/0xee45b41d1ac24e9a620169994deb22739f64f231/90985136087827443997009996180324279389908051646966772224331210283259265025"},
      {"timestamp": 1615730167, "temperature": 91, "watertemperature": 79, "humidity": 89, "location": {"lat": 27.498259, "lon": -82.571518}, "mood": "veryhappy", "name":"Mooty the Manatee", "hue":-50, "health":10, "age":14, "link":"https://testnets.opensea.io/assets/0xee45b41d1ac24e9a620169994deb22739f64f231/90985136087827443997009996180324279389908046966772227544331212482282520577"},
      ]}
      ;
  let arrloc = [];
    for(var i=0;i<response.data.length;i++){
      arrloc.push(response.data[i].location);
    }
    console.log(arrloc);
    setLocarr(arrloc);
    setExData(extended.data);
  setData(response.data);
  // fetch('https://storage.googleapis.com/hackybucket/waterdata.json', {headers: {
  //   'Content-Type': 'application/json'}})
  // .then(response => response.json())
  // .then(data => console.log(data));

  
};
  const [hover, setHover] = useState(false);
  const [data, setData] = useState(null);
  const [exdata, setExData] = useState(null);
  const [locarr, setLocarr] = useState(null);
  const [chartin, setChartin] = useState(100);
  const AnyReactComponent = ({ text, hue, manatee }) => <div onClick={()=>setHover(!hover)}>
    {manatee === 'neutral' && <Manatee className="App-manatee" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    {manatee === 'sad' && <ManateeSad className="App-manatee" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    {manatee === 'bigsad' && <ManateeBigSad className="App-manatee" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    {manatee === 'happy' && <ManateeHappy className="App-manatee" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    {manatee === 'veryhappy' && <ManateeVeryHappy className="App-manatee" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}</div>;

  const MarkerComponent = ({index, manatee, hue, hover, name, health, age,link}) =>{
  return(
  <div className="App-manateediv" onMouseOver={()=>setChartin(index)}>
    {manatee === 'neutral' && <Manatee className="App-manatee" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    {manatee === 'sad' && <ManateeSad className="App-manatee" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    {manatee === 'bigsad' && <ManateeBigSad className="App-manatee" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    {manatee === 'happy' && <ManateeHappy className="App-manatee" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    {manatee === 'veryhappy' && <ManateeVeryHappy className="App-manatee" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    <div onClick={()=>setHover(!hover)}>X</div>
    {hover &&<div className="App-manateebar">
      <p className="manatee-healthtitle" onClick={()=>_openSea(link)}>{name}, {age}</p>
      
      <div style={{flexDirection:'row', display:'flex', alignSelf:'center', alignContent:'center', justifyContent:'center'}}>
      {manatee === 'neutral' && <Manatee className="App-manatee-big" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    {manatee === 'sad' && <ManateeSad className="App-manatee-big" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    {manatee === 'bigsad' && <ManateeBigSad className="App-manatee-big" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    {manatee === 'happy' && <ManateeHappy className="App-manatee-big" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
    {manatee === 'veryhappy' && <ManateeVeryHappy className="App-manatee-big" style={{ filter: `hue-rotate(${hue}deg) saturate(2)`}} />}
      <p className="manatee-text">Health:</p>
      <svg viewBox="0 0 10 1">
      <g fill="none" stroke="#7ebdc2" stroke-width="6" strokeLinecap="round">
      <path d={`M 0.5 0.5 L ${health*0.8} 0.5`}  stroke-width="0.25"/>
      </g>
      </svg>
      </div>
    
     
     
      
      
      
    </div>}
    </div>)};
    const _openSea = (link) => window.open(link, "_blank");
      
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{fontFamily:'Varela Round', marginLeft:'1.5%', color:'#01848c', fontWeight:'bolder'}}>WATERWAZE</h1>
      </header>
      <body className="App-body">
       
      <div style={{ height: '50vh', width: '50vw', paddingTop:'2.5%', paddingLeft:'2.5%', float:'left' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          
         
         


          {data && <MarkerComponent
            lat={data[0].location.lat}
            lng={data[0].location.lon}
            hue={data[0].hue}
            index={0}
            hover={hover}
            name={data[0].name}
            age={data[0].age}
            health={data[0].health}
            link={data[0].link}
            manatee={data[0].mood}
          />}

{data && <MarkerComponent
            lat={data[1].location.lat}
            lng={data[1].location.lon}
            hue={data[1].hue}
            index={1}
            hover={hover}
            name={data[1].name}
            age={data[1].age}
            health={data[1].health}
            link={data[1].link}
            manatee={data[1].mood}
          />}

{data && <MarkerComponent
            lat={data[2].location.lat}
            lng={data[2].location.lon}
            hue={data[2].hue}
            index={2}
            hover={hover}
            name={data[2].name}
            age={data[2].age}
            health={data[2].health}
            link={data[2].link}
            manatee={data[2].mood}
          />}
        
{data && <MarkerComponent
            lat={data[3].location.lat}
            lng={data[3].location.lon}
            hue={data[3].hue}
            index={3}
            hover={hover}
            name={data[3].name}
            age={data[3].age}
            health={data[3].health}
            link={data[3].link}
            manatee={data[3].mood}
          />}
    
{data && <MarkerComponent
            lat={data[4].location.lat}
            lng={data[4].location.lon}
            hue={data[4].hue}
            index={4}
            hover={hover}
            name={data[4].name}
            age={data[4].age}
            health={data[4].health}
            link={data[4].link}
            manatee={data[4].mood}
          />}
    {data && <AnyReactComponent
            lat={data[4].location.lat}
            lng={data[4].location.lon}
            hue={data[4].hue}
            manatee={data[4].mood}
            text="X"
          />}

{data && <AnyReactComponent
            lat={data[1].location.lat}
            lng={data[1].location.lon}
            hue={data[1].hue}
            manatee={data[1].mood}
            text="X"
          />}
           {data && <AnyReactComponent
            lat={data[2].location.lat}
            lng={data[2].location.lon}
            hue={data[2].hue}
            manatee={data[2].mood}
            text="X"
          />}
           {data && <AnyReactComponent
            lat={data[3].location.lat}
            lng={data[3].location.lon}
            hue={data[3].hue}
            manatee={data[3].mood}
            text="X"
          />}
           {data && <AnyReactComponent
            lat={data[0].location.lat}
            lng={data[0].location.lon}
            hue={data[0].hue}
            manatee={data[0].mood}
            text="X"
          />}
        </GoogleMapReact>
    
      </div>
     
          

     {hover && chartin!==100 && <div style={{height: '53vh', width: '50vw', float:'right', paddingTop:'2.5%', paddingRight:'2.5%'}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={200} height={60} data={[data[chartin]]}>
          <Bar dataKey="temperature" fill="#62cbc6" label name="Temperature"/>
          <Bar dataKey="watertemperature" fill="#01aaac" label />
          <Bar dataKey="humidity" fill="#7ebdc2" label />
          <XAxis dataKey="name"/>
          <Tooltip cursor={{fill: `rgba(224, 255, 249, 0.5)`}}/>
          <Legend/>
        </BarChart>
      </ResponsiveContainer>
      </div>}
      {!hover && <div style={{height: '53vh', width: '50vw', float:'right', paddingTop:'2.5%', paddingRight:'2.5%'}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={200} height={60} data={exdata}>
          <Bar dataKey="temperature" fill="#62cbc6"  name="Temperature"/>
          <Bar dataKey="watertemperature" fill="#01aaac"  />
          <Bar dataKey="turbidity" fill="#7ebdc2"  />
          <Bar dataKey="salinity" fill="#004d60"  />
          <Bar dataKey="ph" fill="#aae3d4"  />
          <Bar dataKey="tds" fill="#00364a"  />


          <XAxis dataKey="timestamp"/>
          <Tooltip cursor={{fill: `rgba(224, 255, 249, 0.5)`}}/>
          <Legend/>
        </BarChart>
      </ResponsiveContainer>
      </div>}
     
      
      <img src={footerbg} onClick={()=>{_getdata();setHover(hover);}} className="App-footerbg" alt="backgorund"></img>
      </body>
    </div>
  );
          }

export default App;

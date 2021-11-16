import './App.css';

const Card = (prop) => {
 return ( <> 
  <div className="card">
    
  <img src={prop.imsrc}
    alt={prop.imalt}
    />
   <div className="bottom">
     <h6>{prop.name}</h6>
     <p>{prop.about}</p>
   </div>


  </div>
  </>)
}

function App() {
 return ( <> 
 <h1>Welcome to Shubham`s Art Gallary</h1>
 <div className="align">
   <div className="col">
 <Card
 imsrc="image/mistic seeker.jpg"
 imalt="avatar" 
 name="Mystic seeker"
 about="created by Shubham"
 />
</div>
<div className="col">
 <Card 
 imsrc="image/dead pool.jpg"
 imalt="avatar" 
 name="Dead pool"
 about="created by Shubham"
 />
</div>
<div className="col">
 <Card 
 imsrc="image/wukong.jpg"
 imalt="avatar" 
 name="Wukong"
 about="created by Shubham"
 />
 </div>
<div className="col">
<Card 
 imsrc="image/cobra.jpg"
 imalt="avatar" 
 name="Cobra"
 about="created by Shubham"
 />
 </div>
<div className="col">
<Card 
 imsrc="image/crono.jpg"
 imalt="avatar" 
 name="Crono"
 about="created by Shubham"
 />
 </div>
 <div className="col">
 <Card 
 imsrc="image/profeser.JPG"
 imalt="avatar" 
 name="Professor"
 about="created by Shubham"
 />
</div>
 </div>
 
 </>);
 
}

export default App;

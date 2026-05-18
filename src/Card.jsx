import pic from './assets/aemeth.jpg'

function Card(){
  return(
   <div className="Card">
    {/* <img src="hhtps://via.placeholder.com/150" alt="Profile Picture"></img> */}
      <img className='card-image' src={pic} ailt="Profile Picture"></img>
      <h2 className='card-title'>Kamaboko Gonpachiro</h2>
      <p className='card-text'>I Play video games</p>

    </div>
  );
}
export default Card
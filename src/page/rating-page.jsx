import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

const RatingUs = ()=>{

    const [ratings, setRatings] = useState([]);
    const [user, setUser] = useState('');
    const [rating, setRating] = useState();
    const [comment, setComment] = useState('');

    useEffect(() => {
        const fetchRatings = async () => {
          const response = await axios.get( import.meta.env.VITE_SERVER_DOMAIN + '/ratings');
          setRatings(response.data);
        };
        fetchRatings();
      }, []);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRating = { user, rating, comment };
        await axios.post(import.meta.env.VITE_SERVER_DOMAIN + '/rate', newRating);
        setRatings([...ratings, newRating]);
        setUser('');
        setRating(0);
        setComment('');
      };

      let characterLimit = 500;
      const handleTitleKeyDown = (e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
        }
      };
    return(
        <>
               <h5 style={{textAlign:'center', fontWeight:'bold', marginTop:'3rem'}}>Rate Your Experience</h5>
        <div className="home4" style={{border:"5px solid green",backgroundColor:'', paddingTop:"2rem", paddingBottom:'2rem', marginLeft:'1.2rem', marginRight:"1.2rem", marginBottom:'1rem'}}>
            <div className="row">
                   
                <div className="col-12" >
                    
                      <form onSubmit={handleSubmit} className="form" style={{display:'block', margin:"0 auto"}}>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={user}
                          onChange={(e) => setUser(e.target.value)}
                          required
                          className="input-box1 mt-3"
                        />
                        <input
                          type="number"
                          placeholder="Rating (1-5)"
                          value={rating}
                          onChange={(e) => setRating(Number(e.target.value))}
                          min="1"
                          max="5"
                          required
                          className="input-box1 mt-3"
                        />
                        <textarea
                          placeholder="Your Comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          required
                          rows="4"
                          maxLength={characterLimit}
                         onKeyDown={handleTitleKeyDown}
                          className="input-box1 mt-3"
                          style={{resize:'none'}}
                        ></textarea>
                         <div className="text-end" style={{ color: 'dodgerblue' }}>{characterLimit - comment.length} characters remaining</div>
                        <button className="btn btn-outline-primary mt-2" type="submit" style={{display:'block', margin:'0 auto'}}>Submit</button>
                      </form>

                
                         <div className="card" style={{textAlign:'center', marginTop:'2rem'}}>
                               <h5 className="card-header">Rating Board</h5> 
                         </div>

                        <div className="card-body mt-2 "  style={{paddingRight:'2rem'}}>
                             <ol>
                              {ratings.map((rating, index) => {
                              const backgroundColors = ["white", "lightgray"];
                              const backgroundColor = backgroundColors[index % backgroundColors.length]; // Cycle through colors
                            return (
                                     <li key={index} style={{ backgroundColor }}>
                                       <strong style={{paddingLeft:'1rem'}}>{rating.user} </strong>
                                       <p style={{paddingLeft:'1rem'}}> Rated TransOne: {rating.rating}</p> 
                                       <p style={{paddingLeft: '1rem',wordWrap: 'break-word'}} > {rating.comment}</p>
                                     </li> 
                                 );
                              })}
                           </ol>
                       </div>



              
                  
                      

            </div>
  
          </div>
        </div>
                <Link to="/">
                   <button className="btn btn-primary mb-3" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Home</button>
                </Link>


        </>
    )
}

export default RatingUs;
import React from 'react';
import Rating from './rating';



class Movies extends React.Component{
    
    render(){
        
        return(<div className='container'>
                <div className='boxMov'>{this.props.movies.map(el => <div>
                  <img className='imagMo' src={el.image} />
                <h4>{el.name}</h4> 
                <p>{el.date}</p>
                <Rating rating={() =>{} } star={el.rating} />
                </div>)}
             </div>
             
                
             
           
       
    </div>
     )
    }

}
export default Movies
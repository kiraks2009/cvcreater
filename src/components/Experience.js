import React from 'react';
import ReactDOM from 'react-dom';

function Experience() {
     return(
      <div className="mywrapper">
        <h1>Experience</h1>
        <form>
        <fieldset>
           <label>
             <p>First Name</p>
             <input name="name" placeholder="Your first name.."/>
           </label>
          
           <label>
             <p>Last Name</p>
             <input name="name" placeholder="Your last name.."/>
           </label>
          
  
           <label>
             <p>Title</p>
             <input name="name" placeholder="Your title.." />
           </label>
           
  
           <label>
             <p>Photo</p>
             <input name="name" placeholder="Your photo.."/>
           </label>
           
  
           <label>
             <p>Address</p>
             <input name="name" placeholder="Your address.."/>
           </label>
           
  
           <label>
             <p>Phone Number</p>
             <input name="name" placeholder="Your phone number.."/>
           </label>
  
           <label>
             <p>Email</p>
             <input name="name" placeholder="Your email.."/>
           </label>
  
           <label>
             <p>Description</p>
             <input name="name" placeholder="Your description.."/>
           </label>
           <button type="submit">Submit</button>
         </fieldset>
        
        </form>
      </div>
    )
  }
    
    export default Experience;
// import React from 'react';

export const Contact = () => {
    return <div> 
        <div className="container pt-3" style={{border:0}}>
        <h3>Have any questions?</h3>
        <p style={{textAlign: "center"}}>Reach out to us</p>
        <div className="row">
            <div className="col-7">
                <img src="cont.png" style={{height: "90%", width: "90%", border:0,backgroundColor:"rgb(0,0,0,0)"}}/>
            </div>
            <div className="col-5">
                <br/>
                <form>
                    <div className="row">
                        <label className="form-label" for="name">Name</label>
                        <input className="form-control" type="text" id="name" name="name" required/>
                    </div>
                            
                    <div className="row">
                        <label className="form-label" for="email">Email</label>
                        <input className="form-control" type="email" id="email" name="email" required/>
                    </div>
                            
                    <div>
                        <label className="form-label" for="message">Message:</label>
                        <textarea className="form-control" id="message" name="message" style={{height: "100px"}} required ></textarea>
                    </div>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
        </div>
    </div>
}

// export default Contact;
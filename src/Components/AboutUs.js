// import React from 'react';
export const AboutUs = () => {
    return <div>
        {/* <nav className="navbar navbar-expand-lg sticky-top well">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
                
                <ul className="navbar-nav mb-2 mb-lg-0">

                    <li className="nav-item px-2">
                        <a className="nav-link" href="index.html">
                            <i className="fa fa-fw fa-search"></i>
                            <b>BHAVISHYA DWAR</b>
                        </a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link" href="dashboard.html">
                            <i className="fa fa-fw fa-home"></i>
                            Home
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="AllJobs.html">
                            <i className="fa fa-fw fa-list-ul"></i>
                            All Jobs
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="AboutUs.html">
                            <i className="fa fa-fw fa-info-circle"></i>
                            About Us
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="ContactUs.html">
                            <i className="fa fa-fw fa-phone"></i>
                            Contact Us
                        </a>
                    </li>
                </ul>

                <div id="rig">
                    <a className="nav-link" href="Login.html">
                        <i className="fa fa-fw fa-user"></i>
                        Log In
                    </a>
                </div>
                    
            </div>
        </div>
    </nav> */}
    <div className="container pt-3" style={{border:"0px"}}>
        
        <h1>Welcome to Bhavishya Dwar!</h1>
        

        <div className="container " style={{border: 0, textAlign:"center"}}>
            <img src="abt_edited.jpg" alt="This Photo is not loading :(" style={{width:"90%",height:"90%"}}/>
        </div>
        <br/>

        <div className="row" style={{backgroundColor: "bisque"}}>
            <br/>
            <h3>ABOUT US</h3>
            <hr/>
            <div className="col-6">
                <h5>Our Vision</h5>
                <p>Create a platform for students and the industry to find their perfect match.</p>
            </div> 
            
            <div className="col-6">
                <h5>Our Mission</h5>
                <p>We want to provide a placement and recommendation system for college students looking for work and companies searching for interns.</p>
            </div>
        </div>
    </div>
    </div>
}

// export default AboutUs;
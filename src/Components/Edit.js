// import React from 'react';

export const Edit = () => {
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
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-user"></i>
                        Log Out
                    </a>
                </div>
                    
            </div>
        </div>
    </nav> */}

    <h1>Enter your details</h1>
    <div className="container p-3" style={{border: "2px solid black",textAlign:"left"}}>
        <form>
            <div className="row pt-2">
                <div className="col-2">
                    <label className='form-label'>Upload your picture</label>
                </div>
                <div className="col-10">
                    < input className="form-control" type="file" id="pic" required />
                </div>
            </div>

            <div className="row pt-2">
                <div className="col-2">
                    <label className='form-label'>First Name</label>
                </div>
                <div className="col-10">
                    < input className="form-control" type="text" id="fname" placeholder="Enter First Name" required/>
                </div>
            </div>

            <div className="row pt-2">
                <div className="col-2"><label className='form-label'>Middle Name</label></div>
                <div className="col-10">< input className="form-control" type="text" id="mname" placeholder="Enter Middle Name"/></div>
            </div>

            <div className="row pt-2">
                <div className="col-2">
                    <label className='form-label'>Last Name</label>
                </div>
                <div className="col-10">
                    < input className="form-control" type="text" id="lname" placeholder="Enter Last Name" required />
                </div>
            </div>

            <div className="row pt-2">
                <div className="col-2"><label className='form-label'>Date of Birth</label></div>
                <div className="col-10">< input className="form-control" type="date" id="dob"required/></div>
            </div>

            <div className="row pt-2">
                <div className="col-2"><label className='form-label'>Email ID</label></div>
                <div className="col-10">< input className="form-control" type="email" id="email" placeholder="Enter Email ID" required/></div>
            </div>

            <div className="row pt-2">
                <div className="col-2"><label className='form-label'>Mobile Number</label></div>
                <div className="col-10">< input className="form-control" type="number" id="mobile" placeholder="Enter Mobile Number"required/></div>
            </div>

            <div className="row pt-2">
                <div className="col-2"><label className='form-label'>Address</label></div>
                <div className="col-10">< input className="form-control" type="text" id="address" placeholder="Enter Address"required/></div>
            </div>

            <div className="row pt-2">
                <div className="col-2"><label className='form-label'>PIN Code</label></div>
                <div className="col-10">< input className="form-control" type="number" id="pin" placeholder="Enter PIN Code"required/></div>
            </div>

            <div className="row pt-2">
                <div className="col-sm-1"></div>
                <div className="col-sm-4 mb-3 py-2" style={{border:"2px solid black"}}>
                    Select languages you know<br/>
                    <div className="container" style={{border:0}}>
                        < input className="form-check-label" type="checkbox" id="C"/><label className='form-label'>C</label><br/>
                        < input className="form-check-label" type="checkbox" id="Cpp"/><label className='form-label'>C++</label><br/>
                        < input className="form-check-label" type="checkbox" id="python"/><label className='form-label'>Python</label><br/>
                        < input className="form-check-label" type="checkbox" id="html"/><label className='form-label'>HTML</label><br/>
                        < input className="form-check-label" type="checkbox" id="JS"/><label className='form-label'>JavaScript</label><br/>
                        < input className="form-check-label" type="checkbox" id="java"/><label className='form-label'>Java</label><br/>
                        < input className="form-check-label" type="checkbox" id="kotlin"/><label className='form-label'>Kotlin</label><br/>
                    </div>
                </div>

                <div className="col-sm-2"></div>
            
                <div className="col-sm-4 mb-3 py-2" style={{border:"2px solid black"}}> 
                    Select your skills<br/>
                    <div className="container" style={{border:0}}>    
                        < input className="form-check-label" type="checkbox" id="fed"/><label className='form-label' >Front End Development</label><br/>
                        < input className="form-check-label" type="checkbox" id="bed"/><label className='form-label'>Back End Development</label><br/>
                        < input className="form-check-label" type="checkbox" id="cs"/><label className='form-label'>Cyber Security</label><br/>
                        < input className="form-check-label" type="checkbox" id="cc"/><label className='form-label'>Cloud Coumputing</label><br/>
                        < input className="form-check-label" type="checkbox" id="auto"/><label className='form-label'>Automation</label><br/>
                        < input className="form-check-label" type="checkbox" id="ai"/><label className='form-label'>Artificail Intelligence</label><br/>
                        < input className="form-check-label" type="checkbox" id="ml"/><label className='form-label'>Machine Learning</label><br/>
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>
            
    
            <div className="row">
                <div className="col-2">
                    <label className='form-label'>Upload your CV</label>
                </div>
                <div className="col-10">
                    < input className="form-control" type="file" id="CV" required />
                </div>
            </div>
            
            
            < input className="btn btn-secondary" type="submit"/>
        </form>
        
    </div>
    </div>
}

// export default Edit;
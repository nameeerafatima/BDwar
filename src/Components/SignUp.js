// import React from 'react';

export const SignUp = () => {
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

    <form className="modal-content">
        <div className="container pt-3" style={{border:0}}>
            <h2>Create a new account</h2>

            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4 px-5" style={{border: "2px solid black", backgroundColor:  "rgb(198, 171, 152)"}}>
                    
                    <div className="row pt-2 mb-2">
                        <div className="col-3"><label className='form-label'>Name</label></div>
                        <div className="col-9"><input className="form-control" type="text" placeholder="Enter name" name="name" required /></div>
                    </div>

                    <div className="row pt-2 mb-2">
                        <div className="col-3"><label className='form-label'>Email</label></div>
                        <div className="col-9"><input className="form-control" type="email" placeholder="Enter Email" name="email" required /></div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-3"><label className='form-label'>Password</label></div>
                        <div className="col-9"><input className="form-control" type="passsword" placeholder="Enter Password" name="psw" required /></div>
                    </div>
                    
                    {/* <label for="name">Name</label><br/>
                    <br/>
                    <br/>
                    <label for="email">Email</label><br/>
                    <input type="text" placeholder="Enter Email" name="email" required /><br/>
                    <br/>
                    <label for="email">Password</label><br/>
                    <input type="passsword" placeholder="Enter Password" name="psw" required /><br/>
                    <br/> */}

                    <div className="container mb-3" style={{border:0,textAlign:"center"}}>
                    <label className="form-label">
                        <input type="checkbox" name="remember"/>
                        Remember me
                    </label>

                    <div>
                        <button style={{width: "200px",backgroundColor: "rgb(140, 99, 49)"}}><b>Sign Up</b></button> 
                    </div>
                    
                    <a href="/login">Already an existing user? Click here!</a>
            
                    </div>
                </div>
                <div className="col-sm-2"></div>                              
            </div>
        </div>
    </form>
  
    </div>
}

// export default SignUp;
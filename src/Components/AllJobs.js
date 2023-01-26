// import React from 'react';
import data from "./company.json"

export const AllJobs = () => {
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

    <div className="container-fluid">
        <div className="row">
            
            <div className="col-3">
                <div className='container' style={{border:"0px"}}>
                <h5>FILTER</h5>
                Select your preferred skills<br/>
                <div className="container" style={{border:"2px solid black"}}>    
                        < input className="form-check-label" type="checkbox" id="fed"/><label className='form-label' >Front End Development</label><br/>
                        < input className="form-check-label" type="checkbox" id="bed"/><label className='form-label'>Back End Development</label><br/>
                        < input className="form-check-label" type="checkbox" id="cs"/><label className='form-label'>Cyber Security</label><br/>
                        < input className="form-check-label" type="checkbox" id="cc"/><label className='form-label'>Cloud Coumputing</label><br/>
                        < input className="form-check-label" type="checkbox" id="auto"/><label className='form-label'>Automation</label><br/>
                        < input className="form-check-label" type="checkbox" id="ai"/><label className='form-label'>Artificail Intelligence</label><br/>
                        < input className="form-check-label" type="checkbox" id="ml"/><label className='form-label'>Machine Learning</label><br/>
                    </div>
                </div>
            </div>


            <div className="container mt-2 col-9">
                <h4>Here is a list of the jobs available in all areas</h4>

                <div>
                        {data.map(data => {return (
                            <div className="card" style={{width: "18rem;"}}>
                                <div className="row">
                                    <div className="col-2 pt-4" style={{textAlign:"center"}}>
                                        <img className="card-img ms-2" src={data.pic} alt={data.cname}/> 
                                    </div>

                                    <div className="col-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{data.cname}</h5>
                                            <p className="card-text">{data.jobinfo}</p>
                                            <p className="card-text">Salary: {data.sal}</p>
                                        </div>
                                    </div>

                                    <div className="col-2" style={{textAlign: "center"}}>
                                        <p className="card-body">{data.ago} days ago</p>
                                        <button type="button" id="btn" className="btn btn-secondary mb-2">
                                            <a href={data.link} className="btn"><b>View</b></a>
                                        </button>
                                    </div>    

                                </div>
                            </div>
                        )})}

                    </div>
                
            </div>  
        </div>

    </div>
    </div>
}

// export default AllJobs;
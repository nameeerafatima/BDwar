import data from "./company.json";

export const NewDash= () => {
    return <div>
        
    <div className="container-fluid">
        <h1>Welcome back!</h1>

        <div className="row">
            <div className="col-3">
                <div className="container" style={{textAlign:"center"}}>
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0xSh-I-AgdWg86pihdCC7aIIIEmZiXTBobAivxRmmYnus2CyB" className="rounded-circle mt-2"/>
                    <h3>Nameera Fatima</h3>
                    An about line that we will ask the user to input while filling the form.<br/>
                    <button type="button" className="btn btn-secondary my-2">
                        <a href="/edit" style={{color:"black"}}>Edit Profile</a>
                    </button>
                </div>
            </div>

            <div className="col-9">
                <div className="container" style={{border: "2px solid black"}}>
                    <h4>You may be interested in these jobs</h4>

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
    </div>
}
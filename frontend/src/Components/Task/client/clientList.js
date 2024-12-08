
import React from 'react' 
export default function ClientList() {
    return ( 
            <section className="content"> 
                <div className="row">
                    <div className="col-lg-3 col-xs-6"> 
                        <a href="employeeList"><div className="small-box bg-aqua">
                            <div className="inner">
                                <h3>Employees list</h3>
                                <p>View More</p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-xs-6">
                    <a href="clientList">
                        <div className="small-box bg-green">
                            <div className="inner">
                                <h3>Client List</h3>
                                <p>View More</p>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>


            </section>
     
    )
} 
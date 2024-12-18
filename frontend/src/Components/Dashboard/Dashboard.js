import React from 'react'
import { useUserProfile } from '../../Context/UserProfileContext';
import useDashboardController from '../../Controllers/Dashboard-Controller/useDashboardController';
import SimpleGraph from '../Common/Chart/SimpleGraph';
import { Nav } from '../Common/Nav'

export const Dashboard = () => {
    const { dashboardData } = useDashboardController();
    const { userProfile } = useUserProfile();
    return (
        <div>
            <Nav />
            <div className="content-wrapper">
                <section className="content">
                    <div className="row">
                        <div className="col-lg-3 col-xs-6"> 
                            <div className="small-box bg-aqua">
                                <div className="inner">
                                    <h3>{dashboardData.myReleaseCount}</h3>
                                    <p>All Release</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag"></i>
                                </div> 
                                 </div>
                        </div>
                        <div className="col-lg-3 col-xs-6"> 
                            <div className="small-box bg-green">
                                <div className="inner">
                                    <h3>{dashboardData.myTracksCount}</h3>
                                    <p>All Tracks</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars"></i>
                                </div>
                               </div>
                        </div>
                        {/* <div className="col-lg-3 col-xs-6">

                            <div className="small-box bg-yellow">
                                <div className="inner">
                                    <h3>{dashboard.}</h3>
                                    <p>User Registrations</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add"></i>
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-3 col-xs-6">

                            <div className="small-box bg-red">
                                <div className="inner">
                                    <h3>65</h3>
                                    <p>Unique Visitors</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph"></i>
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>  */}
                    </div>


                </section>
                {userProfile?.role === "company" &&
                    <section className="content">

                        <div className="row">
                            <div className="col-lg-12 col-xs-12 border">
                                <SimpleGraph />
                            </div>
                        </div>
                    </section>
                }
            </div>
        </div>
    )
}

import React from 'react'
import useDashboardController from '../../Controllers/Dashboard-Controller/useDashboardController';
import SimpleGraph from '../Common/Chart/SimpleGraph';
import { Nav } from '../Common/Nav'

export const Dashboard = () => {
    const { dashboardData } = useDashboardController();
    return (
        <div>
            <Nav />

            <div className="content-wrapper">

                <section className="content-header">
                    <h1>
                        Dashboard

                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">Dashboard</li>
                    </ol>
                </section>


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
                                <a href="all-release" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
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
                                <a href="all-tracks" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
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

                <section className="content">

                    <div className="row">
                        <div className="col-lg-12 col-xs-12">
                            <SimpleGraph />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

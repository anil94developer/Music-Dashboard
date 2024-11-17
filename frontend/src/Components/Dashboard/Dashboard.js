import React from 'react'
import useDashboardController from '../../Controllers/Dashboard-Controller/useDashboardController';
import {Nav} from '../Common/Nav'

export const Dashboard = () => {
    const {dashboardData}= useDashboardController();
    return (
        <div>
            <Nav />

            <div class="content-wrapper">

                <section class="content-header">
                    <h1>
                        Dashboard

                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li class="active">Dashboard</li>
                    </ol>
                </section>


                <section class="content">

                    <div class="row">
                        <div class="col-lg-3 col-xs-6">

                            <div class="small-box bg-aqua">
                                <div class="inner">
                                    <h3>{dashboardData.myReleaseCount}</h3>
                                    <p>All Release</p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-bag"></i>
                                </div>
                                <a href="all-release" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                       <div class="col-lg-3 col-xs-6">

                            <div class="small-box bg-green">
                                <div class="inner">
                                    <h3>{dashboardData.myTracksCount}</h3>
                                    <p>All Tracks</p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-stats-bars"></i>
                                </div>
                                <a href="all-tracks" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div> 
                         {/* <div class="col-lg-3 col-xs-6">

                            <div class="small-box bg-yellow">
                                <div class="inner">
                                    <h3>{dashboard.}</h3>
                                    <p>User Registrations</p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-person-add"></i>
                                </div>
                                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div> */}
                        {/* <div class="col-lg-3 col-xs-6">

                            <div class="small-box bg-red">
                                <div class="inner">
                                    <h3>65</h3>
                                    <p>Unique Visitors</p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-pie-graph"></i>
                                </div>
                                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>  */}
                    </div>


                </section>
            </div>
        </div>
    )
}

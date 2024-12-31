import React,{useEffect,useState} from 'react'
import { base } from '../../Constants/Data.constant';
import { useUserProfile } from '../../Context/UserProfileContext';
import useDashboardController from '../../Controllers/Dashboard-Controller/useDashboardController';
import { getData } from '../../Services/Ops';
import MarketGraph from '../Common/Chart/MarketGraph';
import SimpleGraph from '../Common/Chart/SimpleGraph';
import { Nav } from '../Common/Nav'
import { SideBar } from '../Common/SideBar'
export const Dashboard = () => {
  const { dashboardData } = useDashboardController();
  const { userProfile } = useUserProfile();

  const [marketList, setMarketList] = useState([])
  useEffect(() => { 
    getMarket();
  }, []) 
  const getMarket = async () => {
    let result = await getData(base.getMarket)
    console.log(result)
    if (result?.status) {
      let arr = []
      result.data?.map((item, index) => {
        arr.push({ x: index, label: item.Market, y: item.Quantity })
      })
      setMarketList(arr);
    }
  }


  return (
    <div>
      <SideBar />
      <div className="main-cotent">
        <Nav />
        <div className="content-main">
          <section className="dash-main content">
            {userProfile?.role === "company" &&
              <div className="row">
                <div className="col-lg-3 col-xs-6">
                  <div className="dash-detail d-flex flex-wrap">
                    <div className="inner">
                      <p>All Release</p>
                      <h3>{dashboardData?.myReleaseCount}</h3>
                    </div>
                    <div className="icon">
                      <img className="img-fluid" src={require('../../assets/images/dash-icon1.png')} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-xs-6">
                  <div className="dash-detail d-flex flex-wrap">
                    <div className="inner">
                      <p>All Tracks</p>
                      <h3>{dashboardData?.myTracksCount}</h3>
                    </div>
                    <div className="icon">
                      <img className="img-fluid" src={require('../../assets/images/dash-icon2.png')} />
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-xs-6">
            <div className="dash-detail d-flex flex-wrap">
              <div className="inner">
                <p>All Release</p>
                <h3>{dashboardData.myReleaseCount}</h3>
              </div>
              <div className="icon">
                <img className="img-fluid" src={require('../../assets/images/dash-icon1.png')}/>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-6">
            <div className="dash-detail d-flex flex-wrap">
              <div className="inner">
                <p>All Tracks</p>
                <h3>{dashboardData.myTracksCount}</h3>
              </div>
              <div className="icon">
                <img className="img-fluid" src={require('../../assets/images/dash-icon2.png')}/>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-6">
            <div className="dash-detail d-flex flex-wrap">
              <div className="inner">
                <p>All Release</p>
                <h3>{dashboardData.myReleaseCount}</h3>
              </div>
              <div className="icon">
                <img className="img-fluid" src={require('../../assets/images/dash-icon1.png')}/>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-6">
            <div className="dash-detail d-flex flex-wrap">
              <div className="inner">
                <p>All Tracks</p>
                <h3>{dashboardData.myTracksCount}</h3>
              </div>
              <div className="icon">
                <img className="img-fluid" src={require('../../assets/images/dash-icon2.png')}/>
              </div>
            </div>
          </div> */}
                {/* 
          <div className="col-lg-3 col-xs-6">
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
          </div>
          */}
                {/* 
          <div className="col-lg-3 col-xs-6">
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
          </div>
          */}
              </div>
            }
            {userProfile?.role == "admin" &&
              <div className="row">
                <div className="col-lg-3 col-xs-6">
                  <div className="dash-detail d-flex flex-wrap">
                    <div className="inner">
                      <p>Master Account</p>
                      <h3>{dashboardData.masterAccount}</h3>
                    </div>
                    <div className="icon">
                      <img className="img-fluid" src={require('../../assets/images/dash-icon1.png')} />
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-xs-6">
            <div className="dash-detail d-flex flex-wrap">
              <div className="inner">
                <p>All Tracks</p>
                <h3>{dashboardData.myTracksCount}</h3>
              </div>
              <div className="icon">
                <img className="img-fluid" src={require('../../assets/images/dash-icon2.png')}/>
              </div>
            </div>
          </div>  */}
              </div>
            }
          </section>
          {userProfile?.role === "company" &&
            <section className="sale-graph">
              <SimpleGraph data={marketList} title={"Market"}/>
            </section>
          }
        </div>
      </div>
    </div>
  )
}
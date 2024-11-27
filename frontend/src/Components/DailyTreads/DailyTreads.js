import React,{useState} from 'react'
import ChartZoomPan from '../Common/Chart/ChartZoomPan'
import CircleGraph from '../Common/Chart/CircleGraph'
import PaiChart from '../Common/Chart/PaiChart'
import SplineChart from '../Common/Chart/SplineChart'
// import DrillDown from '../Common/Chart/DrillDown'
import { Nav } from '../Common/Nav'

export default function DailyTreads() {
  const [topStores, setTopStores]= useState([
   {
    logo:"https://static.believedigital.com/images/logos/stores/408.svg",
     stores:"Apple",
     percentage:"50%",
     audioStreamsTracks:"1022",
     download:"30000"

   },
   {
    logo:"https://static.believedigital.com/images/logos/stores/204.svg",
    stores:"Soptify",
    percentage:"30%",
    audioStreamsTracks:"322",
    download:"879"

  }
  ])
  return (
    <div>
      <Nav />
      <div className="content-wrapper">

        <section className="content-header">
          <h1>Daily Treads</h1>
        </section>


        <section className="content">
          <div class='row'>
            <div class='col-md-6'>
              <div className="box box-info">
                <div className="box-body">
                  <ChartZoomPan />
                </div>
              </div>
            </div>
            <div class='col-md-6'>
              <div className="box box-info">
                <div className="box-body">
                  <SplineChart />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div class='row'>
            <div class='col-md-6'>
              <div className="box box-info">
                <div className="box-body">
                  {/* <DrillDown /> */}

                  <PaiChart />
                </div>
              </div>
            </div>
            <div class='col-md-6'>
              <div className="box box-info">
                <div className="box-body">
                  <CircleGraph />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div class='row'>
          <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">TOP STORES</h3>
                </div>
                <div className="box-body">

                  <table id="example2" className="table table-bordered table-hover dataTable" aria-describedby="example2_info">
                    <thead>
                      <tr role="row"> 
                      <th >#</th>
                      <th >logo</th>
                        <th >Stores</th>
                        <th >%</th>
                        <th >Audio Streams	</th>
                        <th > Track downloads</th>
                      </tr>
                    </thead>

                    <tbody role="alert" aria-live="polite" aria-relevant="all">
                      {topStores.map((item,index) => ( 
                        <tr className="odd">
                          <td className="  sorting_1">{index+1}</td> 
                          <td className="  sorting_1"><img src={item.logo} height="30" width="30"/></td> 
                          <td className="  sorting_1">{item.stores}</td>
                          <td className="  ">{item.percentage}</td>
                          <td className="  ">{item.audioStreamsTracks}</td>
                          <td className="  ">{item.download}</td> 
                        </tr>
                      ))}  
                    </tbody>
                  </table>
                </div>
                {/* {isLoading && "Loading..."} */}
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

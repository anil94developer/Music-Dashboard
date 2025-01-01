import React, { useState, useEffect } from 'react'
import { stream } from 'xlsx'
import { base } from '../../Constants/Data.constant'
import { getData } from '../../Services/Ops'
import ChartZoomPan from '../Common/Chart/ChartZoomPan'
import CircleGraph from '../Common/Chart/CircleGraph'
import MarketGraph from '../Common/Chart/MarketGraph'
import PaiChart from '../Common/Chart/PaiChart'
import SimpleGraph from '../Common/Chart/SimpleGraph'
import SplineChart from '../Common/Chart/SplineChart'
// import DrillDown from '../Common/Chart/DrillDown'
import { Nav } from '../Common/Nav'
import { SideBar } from '../Common/SideBar'
export default function DailyTreads() {
const [topStores, setTopStores] = useState([])
const [marketList, setMarketList] = useState([])
const [streamList, setStreamList] = useState([])
const [trackList, setTrackList] = useState([])
useEffect(() => {
getStore();
getMarket();
getStream();
getTracks()
}, [])
const getStore = async () => {
let result = await getData(base.getStore)
console.log("getStore------------", result)
if (result?.status) {
let arr = []
result?.data?.map((item, index) => {
arr.push({ name: item.Store, y: item.Quantity })
})
setTopStores(arr)
}
}
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
const getStream = async () => {
let result = await getData(base.getStream)
console.log("result stream-------", result)
if (result?.status) {
let arr = []
result.data?.map((item, index) => {
arr.push({ x: index, label: item.dsp, y: item.streams })
})
setStreamList(arr);
}
}
const getTracks = async () => {
let result = await getData(base.getTracks)
console.log("result getTracks-------", result)
if (result?.status) {
let arr = []
result.data?.map((item, index) => {
arr.push({ x: index, label: item.Track, y: item.Quantity })
})
setTrackList(arr);
}
}
return (
<div>
  <SideBar />
  <div className="main-cotent">
    <Nav />
    <div className="content-main">
      <section className="page-heading">
        <h1>Daily Trends</h1>
      </section>
      <section className="daily-trend content">
        <div class='row'>
          {topStores.length > 0 ?
          <div class='col-lg-6 col-12'>
            <div className="dash-detail">
              <div className="box-body">
                <PaiChart data={topStores} />
              </div>
            </div>
          </div>
          :
          <>
          <h2>Top Store Data</h2>
          <img className="img-fluid" title="Dashboard" src={require('../../assets/images/nodatafound.png')} />
          </>
          }
          {marketList.length > 0 ?
          <div class='col-lg-6 col-12'>
            <div className="dash-detail">
              <div className="box-body">
                <MarketGraph charDdata={marketList} />
              </div>
            </div>
          </div>
          :
          <>
          <h2>Market Data</h2>
          <img className="img-fluid" title="Dashboard" src={require('../../assets/images/nodatafound.png')} />
          </>
          }
          {/* {topStores.length > 0 && 
          <div class='col-md-4'>
            <div className="dash-detail">
              <div className="box-body">
                <PaiChart data={topStores} />
              </div>
            </div>
          </div>
          } */}
          {/* 
          <div class='col-md-4'>
            <div className="dash-detail">
              <div className="box-body">
                <CircleGraph />
              </div>
            </div>
          </div>
          */}
          {/* {marketList.length > 0 && 
          <section className="market-list">
            <MarketGraph charDdata={marketList} />
          </section>
          } */}
        </div>
        <div className="top-store dash-detail dash-detail-two">
        {topStores.length > 0 &&
        <section className="top-store">
          <div className="store-main">
            <div className="store-heading">
              <h3 className="title">TOP STORES</h3>
            </div>
            <div className="store-table">
              <table id="example2" className="table table-bordered table-hover dataTable" aria-describedby="example2_info">
                <thead>
                  <tr role="row">
                    <th >#</th>
                    <th >Stores</th>
                    <th > Quantity</th>
                  </tr>
                </thead>
                <tbody role="alert" aria-live="polite" aria-relevant="all">
                  {topStores.length > 0 && topStores.map((item, index) => (
                  <tr className="odd">
                    <td className="  sorting_1">{index + 1}</td>
                    <td className="  sorting_1">{item.name}</td>
                    <td className="  ">{item.y}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        }
        <div className="dash-detail" style={{ marginTop: 20 }}>
        {streamList.length > 0 ? 
        <SimpleGraph data={streamList} title={"Stream"} type={'column'} />
        :
        <>
        <h2>Stream Data</h2>
        <img className="img-fluid" title="Dashboard" src={require('../../assets/images/nodatafound.png')} />
        </>
        }
    </div>
    {/* <section className="top-store">
    <div className="store-main">
    <div className="store-heading">
    <h3 className="title">STREAMS</h3>
    </div>
    <div className="store-table">
    <table id="example2" className="table table-bordered table-hover dataTable" aria-describedby="example2_info">
    <thead>
    <tr role="row">
    <th >#</th>
    <th >DSP</th>
    <th >Downloads</th>
    <th >Streams</th> 
    </tr>
    </thead>
    <tbody role="alert" aria-live="polite" aria-relevant="all">
    {streamList.length > 0 && streamList.map((item, index) => (
    <tr className="odd">
    <td className="  sorting_1">{index + 1}</td>
    <td className="  sorting_1">{item.dsp}</td>
    <td className="  ">{item.download}</td>
    <td className="  ">{item.streams}</td> 
    </tr>
    ))}
    </tbody>
    </table>
    </div> 
    </div>
    </section> */}
    <div className="dash-detail" style={{ marginTop: 20 }}>
    {trackList.length > 0 ? 
    <SimpleGraph data={trackList} title={"Tracks"} type={'pyramid'} />
    :
    <>
    <h2>Track Data</h2>
    <img className="img-fluid" title="Dashboard" src={require('../../assets/images/nodatafound.png')} />
    </>
    }
  </div>
  {/* <section className="top-store">
  <div className="store-main">
  <div className="store-heading">
  <h3 className="title">TRACKS</h3>
  </div>
  <div className="store-table">
  <table id="example2" className="table table-bordered table-hover dataTable" aria-describedby="example2_info">
  <thead>
  <tr role="row">
  <th >#</th>
  <th >NAME</th>
  <th >Quantity</th>  
  </tr>
  </thead>
  <tbody role="alert" aria-live="polite" aria-relevant="all">
  {trackList.length > 0 && trackList.map((item, index) => (
  <tr className="odd">
  <td className="  sorting_1">{index + 1}</td> 
  <td className="  ">{item.Track}</td>
  <td className="  ">{item.Quantity}</td> 
  </tr>
  ))}
  </tbody>
  </table>
  </div>  
  </div>
  </section> */}
</div>
</section>
</div>
</div>
</div>
)
}
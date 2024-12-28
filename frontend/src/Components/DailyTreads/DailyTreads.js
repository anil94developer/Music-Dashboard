import React, { useState, useEffect } from 'react'
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
useEffect(() => {
getStore();
getMarket();
}, [])
const getStore = async () => {
let result = await getData(base.getStore)
console.log(result)
if (result?.data?.status) {
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
if (result?.data?.status) {
let arr = []
result.data?.map((item, index) => {
arr.push({ x: index, label: item.Market, y: item.Quantity })
})
setMarketList(arr);
}
}
return (
<div>
  <SideBar/>
  <div className="main-cotent">
    <Nav />
    <div className="content-main">
      <section className="page-heading">
        <h1>Daily Trends</h1>
      </section>
      <section className="content">
        <div class='row'>
          <div class='col-md-4'>
            <div className="dash-detail">
              <div className="box-body">
                <ChartZoomPan />
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <div className="dash-detail">
              <div className="box-body">
                <SplineChart />
              </div>
            </div>
          </div>
          {/* {topStores.length > 0 && 
          <div class='col-md-4'>
            <div className="dash-detail">
              <div className="box-body">
                <PaiChart data={topStores} />
              </div>
            </div>
          </div>
          } */}
          <div class='col-md-4'>
            <div className="dash-detail">
              <div className="box-body">
                <CircleGraph />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {marketList.length > 0 && 
      <section className="market-list">
        <MarketGraph charDdata={marketList} />
      </section>
      } */}
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
                {/* {topStores.length > 0 && topStores.map((item, index) => (
                <tr className="odd">
                  <td className="  sorting_1">{index + 1}</td>
                  <td className="  sorting_1">{item.name}</td>
                  <td className="  ">{item.y}</td>
                </tr>
                ))} */}
              </tbody>
            </table>
          </div>
          {/* {isLoading && "Loading..."} */}
        </div>
      </section>
    </div>
  </div>
</div>
)
}
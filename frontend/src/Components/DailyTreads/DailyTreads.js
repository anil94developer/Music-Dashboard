import React from 'react'
import ChartZoomPan from '../Common/Chart/ChartZoomPan'
import CircleGraph from '../Common/Chart/CircleGraph'
import { Nav } from '../Common/Nav'

export default function DailyTreads() {
  return (
    <div>
      <Nav />
      <div className="content-wrapper">

        <section className="content-header">
          <h1>Daily Treads</h1>
        </section>


        <section className="content">
          <div class='row'>
            <div class='col-md-8'>
              <div className="box box-info">
                <div className="box-body">
                  <ChartZoomPan />
                </div>
              </div>
            </div>
            <div class='col-md-4'>
              <div className="box box-info">
                <div className="box-body">
                  <CircleGraph />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

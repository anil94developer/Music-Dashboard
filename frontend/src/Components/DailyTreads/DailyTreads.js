import React from 'react'
import ChartZoomPan from '../Common/Chart/ChartZoomPan'
import CircleGraph from '../Common/Chart/CircleGraph'
import { Nav } from '../Common/Nav'

export default function DailyTreads() {
  return (
    <div>
      <Nav />
      <div class="content-wrapper">

        <section class="content-header">
          <h1>Daily Treads</h1>
        </section>


        <section class="content">
          <div class='row'>
            <div class='col-md-8'>
              <div class="box box-info">
                <div class="box-body">
                  <ChartZoomPan />
                </div>
              </div>
            </div>
            <div class='col-md-4'>
              <div class="box box-info">
                <div class="box-body">
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

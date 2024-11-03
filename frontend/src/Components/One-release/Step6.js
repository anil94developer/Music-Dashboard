
import React, { useState } from 'react'
import Step6Controller from '../../Controllers/One-release-controller/Step6Controller';
import STEP1 from './STEP1';
import STEP2 from './STEP2';
import STEP3 from './STEP3';
import STEP4 from './STEP4';
import STEP5 from './STEP5';

export default function STEP6(props) {
    const {myRelease} =props
    const { handleSubmit } = Step6Controller();
    const [releaseDate, setReleaseDate] = useState('');

    return (
        <div>
            <div class="box box-primary">
                <div class="box-body">
                    <STEP1 releaseData={myRelease}/>
                </div>
            </div>
            <div class="box box-primary">
                <div class="box-body">
                    <STEP2 releaseData={myRelease}/>
                </div>
            </div>
            <div class="box box-primary">
                <div class="box-body">
                    <STEP3 releaseData={myRelease}/>
                </div>
            </div>
            <div class="box box-primary">
                <div class="box-body">
                    <STEP4 releaseData={myRelease}/>
                </div>
            </div>
            <div class="box box-primary">
                <div class="box-body">
                    <STEP5 releaseData={myRelease} />
                </div>
            </div>
             

        </div>
    )
}


import React from 'react'
import MainStepController from '../../Controllers/One-release-controller/MainStepController'
import { Nav } from '../Common/Nav';
import STEP1 from './STEP1';
import STEP2 from './STEP2';
import STEP3 from './STEP3';
import STEP4 from './STEP4';
import STEP5 from './STEP5';

export const MainStep = () => {
    const { step, setStep } = MainStepController();
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


                <section class="container-fluid content">

                    <div className="custom-tab"> 
                        <button className={`btn  btn-primary btn-sm ${step === 'step1' ? 'active' : ''}`} onClick={() => setStep('step1')}>Release information</button>
                        <button className={`btn  btn-primary btn-sm ${step === 'step2' ? 'active' : ''}`} onClick={() => setStep('step2')}>Upload</button>
                        <button className={`btn  btn-primary btn-sm ${step === 'step3' ? 'active' : ''}`} onClick={() => setStep('step3')}>Tracks</button>
                        <button className={`btn  btn-primary btn-sm ${step === 'step4' ? 'active' : ''}`} onClick={() => setStep('step4')}>Territories</button>
                        <button className={`btn  btn-primary btn-sm ${step === 'step5' ? 'active' : ''}`} onClick={() => setStep('step5')}>Release date</button>
                        <button className={`btn  btn-primary btn-sm ${step === 'step6' ? 'active' : ''}`} onClick={() => setStep('step6')}>Promotion</button>
                        <button className={`btn  btn-primary btn-sm ${step === 'step7' ? 'active' : ''}`} onClick={() => setStep('step7')}>Submission</button>
                    </div>
                    <section class="content">
                    {
                        step == "step1" ?
                            <STEP1 setStep={setStep}/>
                            : step == "step2" ?
                                <STEP2 />
                                : step == "step3" ?
                                    <STEP3 />
                                    : step == "step4" ?
                                        <STEP4 />
                                        : step == "step5" ?
                                            <STEP5 />
                                            :
                                            <STEP5 />
                    }
                    </section>

                </section>
            </div>
        </div>
    )
}


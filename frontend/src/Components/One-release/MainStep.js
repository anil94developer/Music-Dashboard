import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom';
import MainStepController from '../../Controllers/One-release-controller/MainStepController'
import { Nav } from '../Common/Nav';
import STEP1 from './STEP1';
import STEP2 from './STEP2';
import STEP3 from './STEP3';
import STEP4 from './STEP4';
import STEP5 from './STEP5';
import STEP6 from './Step6';

export const MainStep = () => {
    const location = useLocation();
    const releaseId = location.state?.releaseId;
    const { step, setStep, myRelease, fetchReleaseDetails, isLoading, } = MainStepController();
    const [isRefresh,setIsRefresh]= useState(new Date().getTime())
    // const [id,setId]= useState(releaseId)

    useEffect(() => { 
        fetchReleaseDetails(releaseId)
        console.log("releaseId--------",releaseId)
    }, [releaseId])
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
                        {/* <button className={`btn  btn-primary btn-sm ${step === 'step6' ? 'active' : ''}`} onClick={() => setStep('step6')}>Promotion</button> */}
                        <button className={`btn  btn-primary btn-sm ${step === 'step6' ? 'active' : ''}`} onClick={() => setStep('step6')}>Submission</button>
                    </div>
                    {isLoading && "Loading..."}
                    <section class="content" key={myRelease}>
                       {
                            step == "step1" ?
                                <STEP1 setStep={setStep} releaseData={myRelease} />
                                : step == "step2" ?
                                    <STEP2 setStep={setStep} releaseData={myRelease} />
                                    : step == "step3" ?
                                        <STEP3 setStep={setStep} releaseData={myRelease} fetchReleaseDetails={fetchReleaseDetails} />
                                        : step == "step4" ?
                                            <STEP4 setStep={setStep} releaseData={myRelease} />
                                            : step == "step5" ?
                                                <STEP5 setStep={setStep} releaseData={myRelease} />
                                                :
                                                <STEP6 releaseData={myRelease} />
                        }  
                    </section>

                </section>
            </div>
        </div>
    )
}


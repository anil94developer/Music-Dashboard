import React from 'react'
import MainStepController from '../../Controllers/One-release-controller/MainStepController'
import STEP1 from './STEP1';
import STEP2 from './STEP2';
import STEP3 from './STEP3';
import STEP4 from './STEP4';
import STEP5 from './STEP5';

export default function MainStep() {
   const {step, setStep }= MainStepController();
    return (
        <section class="container-fluid content"> 
            <div class="custom-tab ">
                <button class="tablinks custom-btn active" onclick="openCity(event, 'releaseInfo')" id="defaultOpen">Release information</button>
                <button class="tablinks custom-btn" onclick={()=>{setStep('step1')}}>Upload</button>
                <button class="tablinks custom-btn" onclick={()=>setStep("step2")}>Tracks</button>
                <button class="tablinks custom-btn" onclick={()=>setStep("step3")}>Price</button>
                <button class="tablinks custom-btn" onclick={()=>setStep("step4")}>Territories</button>
                <button class="tablinks custom-btn" onclick={()=>setStep("step5")}>Release date</button>
                <button class="tablinks custom-btn" onclick={()=>setStep("step6")}>Promotion</button>
                <button class="tablinks custom-btn" onclick={()=>setStep("step7")}>Submission</button>
            </div>

            {
                step == "step1"?
                <STEP1/>
                : step == "step2"?
                <STEP2/>
                : step == "step3"?
                <STEP3/>
                : step == "step4"?
                <STEP4/>
                : step == "step5"?
                <STEP5/>
                : 
                <STEP5/>
            }

        </section>
    )
}


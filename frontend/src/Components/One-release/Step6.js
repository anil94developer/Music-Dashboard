
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Step6Controller from '../../Controllers/One-release-controller/Step6Controller';
import STEP1 from './STEP1';
import STEP2 from './STEP2';
import STEP3 from './STEP3';
import STEP4 from './STEP4';
import STEP5 from './STEP5';

export default function STEP6(props) {
    const navigate = useNavigate()
    const { releaseData, fetchReleaseDetails } = props
    const { handleSubmit } = Step6Controller();
    const [finalStep, setFinalStep] = useState('');
    
    return (
        <div>
            <div className="box box-primary">
                <div className="box-body">
                    <STEP1 releaseData={releaseData} />
                </div>
            </div>
            <div className="box box-primary">
                <div className="box-body">
                    {/* <STEP2 releaseData={releaseData}/> */}
                </div>
            </div>
            <div className="box box-primary">
                <div className="box-body">
                    <STEP3 releaseData={releaseData} fetchReleaseDetails={fetchReleaseDetails} />
                </div>
            </div>
            <div className="box box-primary">
                <div className="box-body">
                    <STEP4 releaseData={releaseData} />
                </div>
            </div>
            <div className="box box-primary">
                <div className="box-body">
                    <STEP5 releaseData={releaseData} />
                </div>
            </div>
            <br></br>
            <div className="mt-3">
                <button type="submit" className="btn btn-primary" onClick={() => { navigate("/final-submit", { state: { releaseId:releaseData._id  } }); }}>Submit</button>
            </div>


        </div>
    )
}


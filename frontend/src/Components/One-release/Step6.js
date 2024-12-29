
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
    const [errors, setErrors] = useState({}); // State to store validation errors

    const validateFields = () => {
        const requiredFields = [
            'step1.genre',
            'step1.primaryArtist',
            'step1.labelName',
            'step1.line',
            'step1.cline',
            'step1.productionYear',
            'step1.format',
            'step5.MainReleaseDate',
        ];
    
        const newErrors = {};
    
        for (const field of requiredFields) {
            const keys = field.split('.');
            let value = releaseData;
    
            for (const key of keys) {
                if (!value || value[key] === undefined || (Array.isArray(value[key]) && value[key].length === 0)) {
                    value=null;
                    break;
                }
                value = value[key];
            }
    
            if (value === null || !value || value ==='null') {
                newErrors[field] = `Required`;
            }
        }
    
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };
    

    const handleSubmitClick = () => {
        if (validateFields()) {
            navigate("/final-submit", { state: { releaseId: releaseData._id } });
        }
    };

    
    
    return (
        <div>
            <div className="box box-primary">
                <div className="box-body">
                    <STEP1 releaseData={releaseData} errors={errors}/>
                </div>
            </div>
            <div className="box box-primary">
                <div className="box-body">
                    <STEP2 releaseData={releaseData}/>
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
                    <STEP5 releaseData={releaseData} erorrs={errors} />
                </div>
            </div>
            <br></br>
            <div className="mt-3">
                <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>Submit</button>
            </div>


        </div>
    )
}


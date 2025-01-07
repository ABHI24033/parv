'use client'

import Formstepper from '@/components/common/Formstepper';
import { Button } from '@/components/ui/button';
import { StepForm } from '../personal_loan/page';
import { useState } from 'react';
import { GoldLoan } from '@/config/GoldLoan';

const GoldLoanForm = () => {
    const [step, setStep] = useState(0);

    // state representing the formData
    const [state, setState] = useState(GoldLoan);

    // number of steps in form
    const stepLength = Object.keys(state).length;
    // const saveToLocalStorage = () => {
    //     localStorage.setItem('formData', JSON.stringify(formData));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            saveToLocalStorage();
        } catch (error) {

        }
        console.log("form submitted");
        // if (step >= 1 && step <= 4) {
        setStep((prev) => prev + 1);
        // }

    }
    return (
        <div className="border p-6 m-4">
            <div className="mb-8">
                <Formstepper step={step} keys={Object.keys(state).map(key => state[key].title)} />
            </div>
            <StepForm state={state} setState={setState} step={step} />

            <div className="py-8 flex flex-row items-center justify-end gap-4">
                {
                    step == 0 ? null : <Button type="button" variant="outline" onClick={() => setStep(state => state - 1)}>previous</Button>
                }
                {
                    step >= stepLength - 1 ? null : <Button type="button" onClick={() => setStep(state => state + 1)}>next</Button>
                }
            </div>
        </div>
    )
}

export default GoldLoanForm;
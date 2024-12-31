'use client'
import React, { useState } from "react";
import { PersoanlInfo, PersonalLoanFormDetails } from '@/config/PersoanlLoan';
import CommonForm from "@/components/common/Form";
import Stepper from '@/components/ui/stepper';

const stepper = (step, formData, setFormData, handleSubmit, prevButton) => {
    switch (step) {
        case 1: return (
            <CommonForm
                formControls={PersonalLoanFormDetails}
                formData={formData}
                setFormData={setFormData}
                buttonText={"Next"}
                onSubmit={handleSubmit}
                isBtnDisabled={false}
                step={step}
                prevButton={prevButton}
            />
        )
        case 2: return (
            <CommonForm
                formControls={PersoanlInfo}
                formData={formData}
                setFormData={setFormData}
                buttonText={"Next"}
                onSubmit={handleSubmit}
                isBtnDisabled={false}
                step={step}
                prevButton={prevButton}
            />
        )
        // case 3: return (
        //     <CommonForm
        //         formControls={PersonalLoanFormDetails}
        //         formData={formData}
        //         setFormData={setFormData}
        //         buttonText={"Next"}
        //         onSubmit={handleSubmit}
        //         isBtnDisabled={false}
        //         step={step}
        //     />
        // )
        // case 4: return (
        //     <CommonForm
        //         formControls={PersonalLoanFormDetails}
        //         formData={formData}
        //         setFormData={setFormData}
        //         buttonText={"Submit"}
        //         onSubmit={handleSubmit}
        //         isBtnDisabled={false}
        //         step={step}
        //     />
        // )

        default:
            break;
    }
}

const PersonalLoanForm = () => {
    const [step, setStep] = useState(1);
    console.log("hello");

    const [formData, setFormData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
        // if (step >= 1 && step <= 4) {
        setStep((prev) => prev + 1);
        // }

    }
    const prevButton = () => setStep((prev) => prev - 1)
    return (
        <div className="border p-6 m-4">
            {/* <Stepper /> */}
            <h1 className="text-2xl font-semibold text-slate-800 my-4">Persoanl Loan Form</h1>

            <div>
                {stepper(step, formData, setFormData, handleSubmit, prevButton)}
            </div>
            {/* <CommonForm
                formControls={PersonalLoanFormDetails}
                formData={formData}
                setFormData={setFormData}
                buttonText={"Submit"}
                onSubmit={handleSubmit}
                isBtnDisabled={false}

            /> */}
        </div>
    )
}

export default PersonalLoanForm;
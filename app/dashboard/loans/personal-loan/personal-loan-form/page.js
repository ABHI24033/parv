'use client'
import React, { useState } from "react";
import { PersoanlInfo, PersonalLoanFormDetails } from '@/config/PersoanlLoan';
import CommonForm from "@/components/common/Form";
import Stepper from '@/components/ui/stepper';
import Step2 from '@/components/persoanlLon/step2';
import Step1 from '@/components/persoanlLon/step1';
import Step3 from '@/components/persoanlLon/step3';
import FormPreview from '@/components/common/FormPreview';
import FormPreviewPage from '@/components/common/Previewpage';
import Formstepper from '@/components/common/Formstepper';

const stepper = (step, formData, setFormData, handleSubmit, prevButton, nextButton, showPreview, setShowPreview) => {
    switch (step) {
        case 1: return (
            <Step1
                formControls={PersoanlInfo}
                formData={formData}
                setFormData={setFormData}
                buttonText={"Next"}
                onSubmit={handleSubmit}
                isBtnDisabled={false}
                step={step}
                nextButton={nextButton}
                prevButton={prevButton}
            />
        )
        case 2: return (
            <Step2
                formData={formData}
                setFormData={setFormData}
                buttonText={"Next"}
                onSubmit={handleSubmit}
                isBtnDisabled={false}
                step={step}
                prevButton={prevButton}

            />
        )
        case 3: return (
            <Step3
                formData={formData}
                setFormData={setFormData}
                buttonText={"Next"}
                onSubmit={handleSubmit}
                isBtnDisabled={false}
                step={step}
                prevButton={prevButton}

            />
        )
        case 4: return (
            <FormPreviewPage
                showPreview={showPreview}
                setShowPreview={setShowPreview}
                // formControls={PersonalLoanFormDetails}
                // formData={formData}
                setFormData={setFormData}
                buttonText={"Next"}
                onSubmit={handleSubmit}
                isBtnDisabled={false}
                step={step}
            />
        )
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

    const [formData, setFormData] = useState([]);
    const [showPreview, setShowPreview] = useState(true);

    const saveToLocalStorage = () => {
        localStorage.setItem('formData', JSON.stringify(formData));
    };

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
    const prevButton = () => setStep((prev) => prev - 1)
    const nextButton = () => setStep((prev) => prev + 1)
    return (
        <div className="border p-6 m-4">
            {/* <Stepper /> */}
            <div className="mb-8">
                <Formstepper step={step} />
            </div>


            <div>
                {stepper(step, formData, setFormData, handleSubmit, prevButton, nextButton, showPreview, setShowPreview)}
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
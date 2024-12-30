'use client'
import React, { useState } from "react";
import { PersonalLoanFormDetails } from '@/config/PersoanlLoan';
import CommonForm from "@/components/common/Form";
import Stepper from '@/components/ui/stepper';

const PersonalLoanForm = () => {
    const [formData, setFormData] = useState([]);

    const handleSubmit = () => {
        console.log("form submitted");

    }
    return (
        <div className="border p-6 m-4">
            <Stepper />
            <h1 className="text-2xl font-semibold text-slate-800 my-4">Persoanl Loan Form</h1>
            <CommonForm
                formControls={PersonalLoanFormDetails}
                formData={formData}
                setFormData={setFormData}
                buttonText={"Submit"}
                onSubmit={handleSubmit}
                isBtnDisabled={false}

            />
        </div>
    )
}

export default PersonalLoanForm;
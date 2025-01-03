import { loanPurpose, permanentAddress, PersoanlInformation, presentAddress } from "@/config/PersoanlLoan";
import CommonForm from "../common/Form";


const Step2 = ({ formData, setFormData, onSubmit, step, prevButton }) => {
    return (
        <div>
            <div>
                <CommonForm
                    formControls={loanPurpose}
                    formData={formData}
                    setFormData={setFormData}
                    // buttonText={"Next"}
                    onSubmit={onSubmit}
                    isBtnDisabled={false}
                    step={step}
                    prevButton={prevButton}
                />
            </div>
            <div>
                <p className=" text-sm font-semibold border-b border-slate-700 mb-4 text-slate-800 w-fit">Persoanl Information : </p>
                <CommonForm
                    formControls={PersoanlInformation}
                    formData={formData}
                    setFormData={setFormData}
                    // buttonText={"Next"}
                    onSubmit={onSubmit}
                    isBtnDisabled={false}
                    step={step}
                    prevButton={prevButton}
                />
            </div>
            <div>
                <p className=" text-sm font-semibold border-b border-slate-700 mb-4 text-slate-800 w-fit">Present Address : </p>
                <CommonForm
                    formControls={presentAddress}
                    formData={formData}
                    setFormData={setFormData}
                    // buttonText={"Next"}
                    onSubmit={onSubmit}
                    isBtnDisabled={false}
                    step={step}
                    prevButton={prevButton}
                />
            </div>
            <div>
                <p className=" text-sm font-semibold border-b border-slate-700 mb-4 text-slate-800 w-fit">Permanent Address : </p>
                <CommonForm
                    formControls={permanentAddress}
                    formData={formData}
                    setFormData={setFormData}
                    buttonText={"Next"}
                    onSubmit={onSubmit}
                    isBtnDisabled={false}
                    step={step}
                    prevButton={prevButton}
                />
            </div>
        </div>
    )
}

export default Step2;
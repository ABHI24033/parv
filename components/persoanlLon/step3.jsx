// import { incomeDetail } from "@/config/PersoanlLoan";
import { currentLoan, incomeDetail, radioQuestions } from "@/config/PersoanlLoan";
import CommonForm from "../common/Form";
// import CommonForm from "../common/Form";

const Step3 = ({ formData, setFormData, onSubmit, step, prevButton }) => {
    return (
        <div>
            <div>
                <CommonForm
                    formControls={incomeDetail}
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
                <CommonForm
                    formControls={radioQuestions}
                    formData={formData}
                    setFormData={setFormData}
                    buttonText={formData?.isCurrent_loan === 'no' ? "Next" : null}
                    onSubmit={onSubmit}
                    isBtnDisabled={false}
                    step={step}
                    prevButton={prevButton}
                    fullwidth={true}
                />
            </div>
            {
                formData?.isCurrent_loan === 'yes' ?
                    <div>
                        <CommonForm
                            formControls={currentLoan}
                            formData={formData}
                            setFormData={setFormData}
                            buttonText={"Next"}
                            onSubmit={onSubmit}
                            isBtnDisabled={false}
                            step={step}
                            prevButton={prevButton}
                            fullwidth={false}
                        />
                    </div>
                    : null
            }
        </div>
    )
}

export default Step3;
import { Button } from "../ui/button";


const InstructionData = {
    title: "",
    description: "",
    heading4: "Step-by-Step Instructions:",
    heading5: "Personal Information",
    para: "",


}


const Step1 = ({ buttonText, nextButton }) => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold text-slate-800 my-4 text-center uppercase">Personal loan enquiry form</h1>
            </div>


            <p className="text-sm text-gray-700">
                Welcome to our Personal Loan Application Form! Please take a few moments to complete the form. The application will help us assess your loan needs and determine the best options available for you.

            </p>
            <div>
                <h3 className="font-semibold border-b-2 w-fit my-3 border-slate-900 text-slate-900">Please read carefully these instruction before fill the form</h3>
                <ul>
                    <li className="list-disc ml-6 text-sm my-1">
                        You are fill this form for your loan requirement. Kindly fill this form with patient and correctly, so that we can provide you the best ssrvice. If you provide incomplete and wrong information this may be reason for your loan rejection and for this comapny will no responsible for this.
                    </li>
                    <li className="list-disc ml-6 text-sm my-1">
                        Fill the information which is mention on your AADHAR & PAN Card. There should not be any spelling mistake.
                    </li>
                    <li className="list-disc ml-6 text-sm my-1">
                        Ensure all the fields are filled correctly; incomplete forms may delay the processing of your loan application.
                    </li>
                    <li className="list-disc ml-6 text-sm my-1">
                        Double-check your email and phone number to ensure that we can reach you if necessary.
                    </li>
                    <li className="list-disc ml-6 text-sm my-1">
                        If you have any queries or need assistance while filling out the form, please contact our support team for help.
                    </li>

                </ul>

            </div>

            <Button type="submit" className="mt-5 float-end" onClick={nextButton}>
                {buttonText || "Next"}
            </Button>
        </div>
    )
}

export default Step1;
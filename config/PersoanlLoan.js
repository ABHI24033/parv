export const PersonalLoanFormDetails = [
    {
        name: "refferal_person",
        label: "Name of refferal person",
        placeholder: "Referral persoan's name",
        componentType: "input",
        type: "text",
    },
    {
        label: "Purpose of laon",
        name: "loan_purpose",
        componentType: "select",
        options: [
            { id: "men", label: "To purchase property" },
            { id: "women", label: "For marrage at home" },
            { id: "kids", label: "For Education" },
            { id: "accessories", label: "To pay credit card bill" },
            { id: "footwear", label: "To repay other loan" },
            { id: "footwear", label: "To construct home" },
            { id: "footwear", label: "For other Persoanl reason" },
        ],
    },
]
export const PersoanlInfo = [
    {
        name: "name",
        label: "Name",
        placeholder: "Enter your name",
        componentType: "input",
        type: "text",
    },
    {
        name: "father_name",
        label: "Father's name",
        placeholder: "Enter your father's name",
        componentType: "input",
        type: "text",
    },
    {
        name: "mother_name",
        label: "Mother's name",
        placeholder: "Enter your mother's name",
        componentType: "input",
        type: "text",
    },
    {
        name: "phone",
        label: "Phone number",
        placeholder: "Enter your phone number",
        componentType: "input",
        type: "text",
    },
    {
        name: "alternate_phone",
        label: "Alternamte phone number",
        placeholder: "Enter your another phone number",
        componentType: "input",
        type: "text",
    },
    {
        name: "pan_card",
        label: "PAN Card number",
        placeholder: "Enter your PAN Card number",
        componentType: "input",
        type: "text",
    },
]
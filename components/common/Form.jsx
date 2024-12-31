import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function CommonForm({
    formControls,
    formData,
    setFormData,
    onSubmit,
    buttonText,
    isBtnDisabled,
    step,
    prevButton,
}) {
    function renderInputsByComponentType(getControlItem) {
        let element = null;
        const value = formData[getControlItem?.name] || "";
        switch (getControlItem.componentType) {
            case "input":
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })
                        }
                    />
                );

                break;
            case "select":
                element = (
                    <Select
                        onValueChange={(value) =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: value,
                            })
                        }
                        value={value}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={getControlItem.label} />
                        </SelectTrigger>
                        {/* <SelectContent>
                            {getControlItem.options && getControlItem.options.length > 0
                                ? getControlItem.options.map((optionItem, index) => (
                                    <SelectItem key={index} value={optionItem.id}>
                                        {optionItem.label}
                                    </SelectItem>
                                ))
                                : null}
                        </SelectContent> */}
                    </Select>
                );

                break;
            case "textarea":
                element = (
                    <Textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.id}
                        value={value}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })
                        }
                    />
                );

                break;

            default:
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        // value={value}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })
                        }
                    />
                );
                break;
        }

        return element;
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className={`${formControls?.length <= 5 ? "grid-cols-2 " : "grid-cols-3 "} grid gap-3`}>
                    {formControls?.map((controlItem, index) => (
                        <div className="grid w-full gap-2" key={index}>
                            <Label className="mb-1">{controlItem.label}</Label>
                            {renderInputsByComponentType(controlItem)}
                        </div>
                    ))}
                </div>
                <div className="flex justify-end w-full gap-4 mt-5">
                    {
                        step > 1 ?
                            <Button disabled={isBtnDisabled} variant="outline" type="button" onClick={prevButton} className="mt-5 ">
                                Back
                            </Button>
                            : null
                    }

                    <Button disabled={isBtnDisabled} type="submit" className="mt-5 ">
                        {buttonText || "Submit"}
                    </Button>
                </div>
            </form>
        </>

    );
}

export default CommonForm;
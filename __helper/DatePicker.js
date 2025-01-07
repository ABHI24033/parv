import { useState, useRef, useEffect } from "react";

const CustomDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const datePickerRef = useRef(null);

    // Handle outside clicks to close the date picker
    const handleOutsideClick = (event) => {
        if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
            setShowDatePicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div
            className="date-picker-wrapper"
            ref={datePickerRef}
            style={{ position: "relative", display: "inline-block" }}
        >
            {/* Input field */}
            <input
                type="text"
                className="date-input"
                placeholder="Select a date"
                value={selectedDate}
                onClick={() => setShowDatePicker(true)}
                readOnly
                style={{
                    width: "200px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            />

            {/* Date picker dropdown */}
            {showDatePicker && (
                <div
                    className="date-picker"
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: 10,
                        background: "white",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <input
                        type="date"
                        onChange={(e) => {
                            setSelectedDate(e.target.value);
                            setShowDatePicker(false);
                        }}
                        style={{
                            border: "none",
                            width: "100%",
                            padding: "10px",
                            boxSizing: "border-box",
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default CustomDatePicker;

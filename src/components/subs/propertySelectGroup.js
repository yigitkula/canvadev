import { useEffect, useState } from "react";

function PropertySelectGroup({ label, value, dataKey, dataType, options, onUpdate }) {
    const [tempValue, setTempValue] = useState(value);

    const handleSubmit = (event) => {
        if(event.key === "Enter"){
            submitChange(event.target.value);
        }
    }

    const handleBlur = (event) => {
        submitChange(event.target.value);
    }

    const handleValueChange = (event) => {
        submitChange(event.target.value);
    }

    const submitChange = (newValue) => {
        if(onUpdate && value !== newValue){
            let updateData = {dataKey, value: newValue};
            if(dataType === "number"){
                updateData.value = Number(updateData.value);
            }
            onUpdate(updateData);
        }
    }

    useEffect(() => {
        setTempValue(value);
    }, []);

    useEffect(() => {
        setTempValue(value);
    }, [value]);

    return (
        <>
        
        
        <div className="flex justify-between space-x-2">
            <div className="w-24 pt-0.5">
                <label className="text-sm text-gray-500">{label}</label>
            </div>

            <select 
                className="flex-grow rounded border-gray-300 text-sm p-1"
                value={tempValue}
                onChange={handleValueChange}
                >
                {options.map((option, index) => {
                    return (
                        <option value={option.value} key={index}>{option.label}</option>
                    )
                })}
            </select>
        </div>
        </>
    )
}

export default PropertySelectGroup;
import { useEffect, useState } from "react";

function PropertyInputGroup({ label, value, dataKey, dataType, onUpdate }) {
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
        setTempValue(event.target.value)
    }

    const submitChange = (newValue) => {
        if(onUpdate && value !== newValue){
            let updateData = {dataKey, value: newValue};
            console.log(updateData);
            if(dataType === "number"){
                updateData.value = Number(updateData.value);
            }
            console.log(updateData);
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
            <input
                className="flex-grow rounded border-gray-300 text-sm p-1"
                type="text"
                value={tempValue}
                onChange={handleValueChange}
                onBlur={handleBlur}
                onKeyDown={handleSubmit}
            ></input>
        </div>
        </>
    )
}

export default PropertyInputGroup;
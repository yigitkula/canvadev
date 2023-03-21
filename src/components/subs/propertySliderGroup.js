import Slider from "rc-slider";
import { useEffect, useState } from "react";
import 'rc-slider/assets/index.css';

function PropertySliderGroup({ label, value, dataKey, dataType, onUpdate }) {
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

    const handleSliderChange = (sliderValue) => {
        submitChange(sliderValue);
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
            <div>
                <input
                    className="flex-grow rounded border-gray-300 text-sm p-1 mb-3"
                    type="text"
                    value={tempValue}
                    onChange={handleValueChange}
                    onBlur={handleBlur}
                    onKeyDown={handleSubmit}
                ></input>
                <Slider min={0} max={360} onChange={handleSliderChange} value={tempValue} />
            </div>
            
            
        </div>
        </>
    )
}

export default PropertySliderGroup;
import { useState } from "react";
import { HexColorPicker } from "react-colorful";


function ColorPicker({ color, onChange }){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className='relative'>
            <button className="border rounded w-32 h-8 p-1" onClick={() => setIsOpen(!isOpen)}>
                <div className="w-full h-full rounded-sm" style={{backgroundColor: color}}></div>
            </button>

            { isOpen ? (<div className='absolute top-0 left-32 bg-white p-2 rounded-xl shadow-lg'>
                <HexColorPicker color={color} onChange={(color) => onChange(color)}></HexColorPicker>
                <div className="mt-2 flex justify-between items-center">
                    <p className="text-sm text-gray-500">Hex Code</p>
                    <input className="w-24 rounded border text-sm px-2 py-1" value={color} onChange={(event) => onChange(event.target.value)}></input>
                </div>
            </div>) : null}
        </div>
    )
}

export default ColorPicker;
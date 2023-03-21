import { useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'


function DocumentSettingsForm({ width, height, onClose, onUpdate }) {
    const [tempWidth, setTempWidth] = useState(width);
    const [tempHeight, setTempHeight] = useState(height);

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    }

    const handleSubmit = () => {
        if (onUpdate) {
            onUpdate({ width: Number(tempWidth), height: Number(tempHeight) });
        }
    }

    return (
        <div className="fixed bg-black/[.1] inset-0" style={{zIndex: 900}}>
            <div className="w-full h-full flex items-center justify-center">
                <div className="bg-white p-5 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center border-b pb-2">
                        <p className="font-bold text-lg">Document Settings</p>
                        <button onClick={handleClose}>
                            <XMarkIcon className="w-5"></XMarkIcon>
                        </button>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label className="mb-1 text-sm text-gray-500">Document Width (px)</label>
                        <input type="number" className="border text-lg px-3 py-2 w-96 rounded" placeholder="My new layer" value={tempWidth} onChange={(event) => setTempWidth(event.target.value)}></input>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label className="mb-1 text-sm text-gray-500">Document Height (px)</label>
                        <input type="number" className="border text-lg px-3 py-2 w-96 rounded" placeholder="My new layer" value={tempHeight} onChange={(event) => setTempHeight(event.target.value)}></input>
                    </div>
                    <div className="flex justify-center space-x-1 mt-5">
                        <button className={`w-full py-3 rounded font-bold text-sm bg-blue-600 text-white`} onClick={handleSubmit}>Update Settings</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default DocumentSettingsForm;
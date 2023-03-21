
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from "react";
import LayerType from "../../../data/layerType";

function NewLayerForm({ onClose, onUpdate }) {
    const [tempLayerName, setTempLayerName] = useState("");
    const [tempLayerType, setTempLayerType] = useState(LayerType.Rectangle);

    const layerTypeOptions = [
        { label: "Rectangle", value: LayerType.Rectangle },
        { label: "Circle", value: LayerType.Circle },
        { label: "Text", value: LayerType.Text },
        { label: "Image Rectangle", value: LayerType.ImageRectangle },
        { label: "Image Circle", value: LayerType.ImageCircle },
        { label: "Shape", value: LayerType.Shape },
    ];

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    }

    const handleSubmit = () => {
        if (onUpdate) {
            onUpdate({ name: tempLayerName, type: Number(tempLayerType) });
        }
    }

    return (
        <div className="fixed bg-black/[.1] inset-0"  style={{zIndex: 900}}>
            <div className="w-full h-full flex items-center justify-center">
                <div className="bg-white p-5 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center border-b pb-2">
                        <p className="font-bold text-lg">Add New Layer</p>
                        <button onClick={handleClose}>
                            <XMarkIcon className="w-5"></XMarkIcon>
                        </button>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label className="mb-1 text-sm text-gray-500">Layer Name</label>
                        <input className="border text-lg px-3 py-2 w-96 rounded" placeholder="My new layer" value={tempLayerName} onChange={(event) => setTempLayerName(event.target.value)}></input>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label className="mb-1 text-sm text-gray-500">Layer Type</label>
                        <select className="border text-lg px-3 py-2 w-96 rounded" value={tempLayerType} onChange={(event) => setTempLayerType(event.target.value)}>
                            {layerTypeOptions.map(layer => (
                                <option value={layer.value} key={layer.value}>{layer.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-center space-x-1 mt-5">
                        <button className={` w-full py-3 rounded font-bold text-sm ${tempLayerName === "" && tempLayerType ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white'}`} disabled={tempLayerName === "" && tempLayerType} onClick={handleSubmit}>Add Layer</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewLayerForm;
import LayerType from "../../data/layerType";
import CircleSettings from "./circleSettings";

function Settings({layers, selectedLayerId, onUpdated}){
    const selectedLayer = layers.find(layer => layer.id === selectedLayerId );

    const handleUpdate = (data) => {
        if(onUpdated){
            onUpdated(data);
        }
    }
    
    return (
        <div className="max-h-screen overflow-y-auto">
            {(selectedLayer && selectedLayer.type === LayerType.Circle) ? (<CircleSettings layer={selectedLayer} onUpdate={handleUpdate}></CircleSettings>) : null}
            <pre className="text-xs text-gray-500">{JSON.stringify(selectedLayer, null, 2)}</pre>
        </div>
    )
}

export default Settings;
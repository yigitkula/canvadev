import { useEffect, useState } from "react";
import Canvas from "./module/canvas";
import Sidebar from './module/sidebar/index';
import CircleSettings from './module/settings/circleSettings';
import Settings from "./module/settings";

function Editor(){
    const [canvasSettings, setCanvasSettings] = useState({
        width: 300,
        height: 400,
        backgroundColor: "#ffffff"
    });
    const [selectedLayerId, setSelectedLayerId] = useState(null);

    const [layers, setLayers] = useState([]);
    
    const handleLayerAdd = (layer) => {
        setLayers([layer, ...layers]);
    }

    const handleLayerSelect = (layerId) => {
        let tempLayers = [...layers].map(layer => {
            return {...layer, selected: layerId ? layerId === layer.id : false}
        });

        setSelectedLayerId(layerId);
        setLayers(tempLayers);
    }

    const handleDocumentSettingsUpdate = ({width, height}) => {
        let newCanvasSettings = { 
            ...canvasSettings,
            width,
            height 
        };
        setCanvasSettings(newCanvasSettings);
    }

    const handleSidebarClickOutside = () => {
        return;
        handleLayerSelect(null);
    }

    const handleLayerDrag = ({list, dragIndex, dropIndex}) => {
        setLayers(list);
    }

    const handleLayerDelete = (layerId) => {
        let tempLayers = [...layers].filter( layer => layer.id !== layerId);
        tempLayers = tempLayers.map(layer => {
            return {...layer, selected: layerId ? layerId === layer.id : false}
        });
        setLayers(tempLayers);
        setSelectedLayerId(null);
    }

    const handleSettingsUpdate = (data) => {
        let newLayers = [];
        layers.forEach(layer => {
            let item = {...layer};
            if(item.id === data.id){
                item.props = data.props;
                item.name = data.name;
            }
            newLayers.push(item);
        });

        setLayers(newLayers);
    }
    
    return (
        <div className="w-screen h-screen flex bg-gray-100">
            <Sidebar 
                width={canvasSettings.width}
                height={canvasSettings.height}
                layers={layers}
                selectedLayerId={selectedLayerId}
                onLayerAdd={handleLayerAdd}
                onLayerSelect={handleLayerSelect}
                onDocumentSettingsUpdate={handleDocumentSettingsUpdate}
                onClickOutside={handleSidebarClickOutside}
                onLayerDrag={handleLayerDrag}
                onLayerDelete={handleLayerDelete}
            >

            </Sidebar>
            <div className="flex-grow">
                <div className='w-full h-full flex items-center justify-center bg-gray-200'>
                    <Canvas canvasSettings={canvasSettings} layers={[...layers].reverse()}></Canvas>
                </div>
            </div>
            <div className="w-80 bg-gray-100">
                <Settings 
                    layers={layers} 
                    selectedLayerId={selectedLayerId}
                    onUpdated={handleSettingsUpdate}
                    ></Settings>
            </div>
        </div>
    )
}

export default Editor;
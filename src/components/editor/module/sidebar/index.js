import DocumentSettings from "./document_settings";
import LayerManager from "./layer_manager";
import { useDetectClickOutside } from 'react-detect-click-outside';

function Sidebar({ width, height, layers, selectedLayerId, onDocumentSettingsUpdate, onLayerAdd, onLayerSelect, onLayerDrag, onLayerDelete, onClickOutside}){
    const ref = useDetectClickOutside({onTriggered: onClickOutside});

    const handleDocumentSettingsUpdate = ({width, height}) => {
        if(onDocumentSettingsUpdate){
            onDocumentSettingsUpdate({ width, height});
        }
    }

    return(
        <div className="w-80 p-5 bg-white" ref={ref}>
            <DocumentSettings 
                width={width} 
                height={height} 
                onUpdate={handleDocumentSettingsUpdate}/>

            <LayerManager 
                layers={layers}
                selectedLayerId={selectedLayerId}
                onLayerAdd={onLayerAdd}  
                onLayerSelect={onLayerSelect}
                onLayerDrag={onLayerDrag}
                onLayerDelete={onLayerDelete}
                />
        </div>
    )
}


export default Sidebar;
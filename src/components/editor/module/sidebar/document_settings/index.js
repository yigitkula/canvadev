import { useState } from "react";
import DocumentSettingsForm from "./documentSettingsForm";

function DocumentSettings({ width, height, onUpdate }){

    const [settingsOpen, setSettingsOpen] = useState(false);
    
    const handleUpdate = ({ width, height }) => {
        if(onUpdate){
            onUpdate({width, height});
        }
        setSettingsOpen(false);
    }

    return(
        <>
            <div className="space-y-3 border-b pb-2">
                <div className="flex items-center justify-between text-sm">
                    <p className="text-gray-500">Width: </p>
                    <button 
                        className="text-blue-600 font-semibold"
                        onClick={() => setSettingsOpen(true)}
                        >{`${width}px`}</button>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <p className="text-gray-500">Height: </p>
                    <button 
                        className="text-blue-600 font-semibold"
                        onClick={() => setSettingsOpen(true)}
                        >{`${height}px`}</button>
                </div>
            </div>
            
            { settingsOpen ? (
                <DocumentSettingsForm width={width} height={height} onClose={() => setSettingsOpen(false) } onUpdate={handleUpdate}></DocumentSettingsForm>
            ) : null}
        </>
        
    )
}

export default DocumentSettings;
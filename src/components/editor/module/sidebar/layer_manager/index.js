import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid'
import { Square2StackIcon } from '@heroicons/react/24/outline'
import { useState } from "react";
import NewLayerForm from "./newLayerForm";
import { randomHex } from "../../../util/string.util";
import LayerItem from "./layerItem";
import Draggable from 'react-smooth-draggable';

import createRectangleDefaultProps from '../../items/rectangle/createDefaultProps';
import createCircleDefaultProps from '../../items/circle/createDefaultProps'

import LayerType from '../../../data/layerType';

function LayerManager({ layers, selectedLayerId, onLayerAdd, onLayerSelect, onLayerDrag, onLayerDelete }){
    const [newLayerPanelOpen, setNewLayerPanelOpen] = useState(false);

    const getDefaultPropsForType = (type) => {
        console.log("ltltltltlt", type, LayerType.Circle);
        switch (type) {
            case LayerType.Circle:  
                return createCircleDefaultProps();
        
            default:
                return createRectangleDefaultProps();
        }
    }

    const nlfHandleNewLayer = ({ name, type}) => {
        let id = randomHex(8);
        type = Number(type);

        let layer = {
            id, 
            name, 
            type, 
            selected: false, 
            props: getDefaultPropsForType(type)
        };

        if(onLayerAdd){
            onLayerAdd(layer);
        }
        
        setNewLayerPanelOpen(false);
    }

    const nlfHandleClose = () => {
        setNewLayerPanelOpen(false);
    }

    const handleDragEnd = ({list, dragIndex, dropIndex}) => {
        if(onLayerDrag){
            onLayerDrag({list, dragIndex, dropIndex});
        }
    }

    const handleLayerDelete = () => {
        if(selectedLayerId && onLayerDelete){
            onLayerDelete(selectedLayerId);
        }
    }

    return(
        <>
            <div className="space-y-3 border-b pb-2 mt-5">
                <h3 className="title3">Layers</h3>
                <div className="border">
                    { layers.length ? (
                        <div className="bg-gray-200">
                        <Draggable
                            list={layers}
                            onDragEnd={handleDragEnd}
                            cols={1}
                            height={80}
                        >
                            {item => <LayerItem layer={item} key={item.id} onClick={() => onLayerSelect(item.id)}></LayerItem>}
                        </Draggable>
                        </div>
                    ) : (
                        <div className="bg-gray-100 py-5 text-center space-y-1 text-gray-500">
                            <div><Square2StackIcon className="w-5 h-5 mx-auto"></Square2StackIcon></div>
                            <p className="text-xs">No layers added yet</p>
                            <div className="pt-3">
                                <button 
                                    className="text-xs bg-gray-300 rounded px-2 py-1 text-gray-500"
                                    onClick={() => setNewLayerPanelOpen(true)}
                                    >Add new layer</button>
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="flex justify-end space-x-1">
                    <button className={`${selectedLayerId !== null ? 'text-gray-500' : 'text-gray-200'} bg-gray-100 p-0.5 border`} disabled={selectedLayerId === null} onClick={handleLayerDelete}>
                        <MinusSmallIcon className="w-5"></MinusSmallIcon>
                    </button>
                    <button className="bg-gray-100 p-0.5 border text-gray-500" onClick={() => setNewLayerPanelOpen(true)}>
                        <PlusSmallIcon className="w-5"></PlusSmallIcon>
                    </button>
                </div>
            </div>

            {newLayerPanelOpen ? (
                <NewLayerForm onUpdate={nlfHandleNewLayer} onClose={nlfHandleClose}></NewLayerForm>
            ) : null}
            


        </>
        
    )
}

export default LayerManager;
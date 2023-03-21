import { EyeSlashIcon } from "@heroicons/react/24/outline";
import LayerType from "../../../data/layerType";


function LayerItem({ layer, onClick }){
    const handleClick = (event) => {
        if(onClick){
            onClick(layer.id);
        }
    }

    return(
        <>
            <div 
                className={ `${layer.selected ? 'bg-blue-500 text-white' : 'bg-white text-gray-700' } text-left h-full w-full p-2.5 px-3 text-sm flex justify-between items-center space-x-3` }
                onClick={handleClick}
                >
                    <div className="flex-grow">
                        <p className={ layer.selected ? 'font-bold' : 'font-semibold' }>{layer.name}</p>
                        <p className={`${layer.selected ? 'text-blue-300' : 'text-gray-400' } text-xs`}>{ `${LayerType.toLayerTypeString(layer.type)}` }</p>
                    </div>
                    <div><EyeSlashIcon className={ `${layer.selected ? 'text-blue-300' : 'text-gray-300' } w-4` }></EyeSlashIcon></div>
                
            </div>
        </>        
    )
}

export default LayerItem;
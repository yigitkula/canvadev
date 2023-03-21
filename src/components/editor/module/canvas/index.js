import { useEffect } from "react";
import BorderType from "../../data/borderType";
import FillType from "../../data/fillType";
import LayerType from "../../data/layerType";

function Canvas({canvasSettings, layers}){
  

    return(
        <div style={{ width: `${canvasSettings.width}px`, height: `${canvasSettings.height}px`, backgroundColor: canvasSettings.backgroundColor, position: "relative"}}>
            {layers.map((layer, index) => {
                switch (Number(layer.type)) {
                    case LayerType.Circle:

                        let containerStyles = {
                            position: "absolute",
                            zIndex: index,
                            top: `${layer.props.pos_y}px`,
                            left: `${layer.props.pos_x}px`,
                            width: `${layer.props.width}px`,
                            height: `${layer.props.height}px`,
                        };


                        let childStyles = {};


                        if(layer.props.fill_type === FillType.Solid){
                            childStyles.backgroundColor = layer.props.fill_color_primary;
                        } else if(layer.props.fill_type === FillType.Gradient){
                            childStyles.background = `linear-gradient(${layer.props.fill_gradient_rotation}deg,  ${layer.props.fill_color_primary} 0%,${layer.props.fill_color_secondary} 100%)`
                        } 

                        if(layer.props.border_type === BorderType.Solid){
                            childStyles.border = `solid ${layer.props.border_width}px ${layer.props.border_color}`;
                        } else if(layer.props.border_type === BorderType.Dashed){
                            childStyles.border = `dashed ${layer.props.border_width}px ${layer.props.border_color}`;
                        } else if(layer.props.border_type === BorderType.Dotted){
                            childStyles.border = `dotted ${layer.props.border_width}px ${layer.props.border_color}`;
                        }

                        console.log(childStyles);

                        return(
                            <div 
                                key={index} 
                                className={ `${layer.selected ? 'border border-blue-600' : ''}`}
                                style={containerStyles}>
                                <div className="w-full h-full rounded-full" style={childStyles}></div>
                            </div>
                        )
                        break;
                
                    default:
                        return(
                            <div className={`${layer.selected ? 'border border-blue-500' : ''}`} key={index} style={{ position: "absolute", zIndex: index, top: "0px", left: "0px", backgroundColor: "#ff0066", width: "100px", height: "100px"}}></div>
                        )
                        break;
                }
            })}

        </div>
    )
}

export default Canvas;
import FillType from "../../data/fillType";
import BorderType from "../../data/borderType";
import { useState } from "react";
import PropertyInputGroup from '../../../subs/propertyInputGroup';
import PropertySelectGroup from '../../../subs/propertySelectGroup';
import PropertySliderGroup from '../../../subs/propertySliderGroup';

const _ = require('lodash');

function CircleSettings({ layer, onUpdate }){
    const handleChange = (key, value) => {
        if(onUpdate){
            let newLayer = {...layer};
            _.set(newLayer, key, value);

            if(key === "props.fill_type"){
                switch(value){
                    case FillType.None:
                        _.set(newLayer, 'props.fill_color_primary', null);
                        _.set(newLayer, 'props.fill_color_secondary', null);
                        break;

                    case FillType.Solid:
                        _.set(newLayer, 'props.fill_color_primary', "#2363eb");
                        _.set(newLayer, 'props.fill_color_secondary', null);
                        break;

                    case FillType.Gradient:
                        _.set(newLayer, 'props.fill_color_primary', "#2363eb");
                        _.set(newLayer, 'props.fill_color_secondary', "#194dbc");
                        break;
                }
            }


            onUpdate(newLayer);
        }
    }

    const handlePropertyUpdate = (data) => {
        handleChange(data.dataKey, data.value);
    }

    return (
        <>
            <div className="border-b p-5">
                <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-500 text-sm">LAYER</h3>
                    <p className="text-gray-400 text-xs">{layer.id}</p>
                </div>

                <div className="mt-2">
                    <PropertyInputGroup 
                        label="Name" 
                        dataKey="name" 
                        dataType="string"
                        value={layer.name} 
                        onUpdate={handlePropertyUpdate}/>
                </div>
            </div>
            <div className="border-b p-5">
                <h3 className="font-semibold text-gray-500 text-sm">TRANSFORM</h3>
                <div className="mt-2 space-y-2">
                    <PropertyInputGroup 
                        label="Width" 
                        dataKey="props.width"
                        dataType="number"
                        value={layer.props.width}
                        onUpdate={handlePropertyUpdate}/>
                    <hr className="border-dashed"/>

                    <PropertyInputGroup 
                        label="Height" 
                        dataKey="props.height"
                        dataType="number"
                        value={layer.props.height}
                        onUpdate={handlePropertyUpdate}/>
                    
                    <hr className="border-dashed"/>
                    <PropertyInputGroup 
                        label="X" 
                        dataKey="props.pos_x"
                        dataType="number"
                        value={layer.props.pos_x}
                        onUpdate={handlePropertyUpdate}/>

                    <hr className="border-dashed"/>
                    <PropertyInputGroup 
                        label="Y" 
                        dataKey="props.pos_y"
                        dataType="number"
                        value={layer.props.pos_y}
                        onUpdate={handlePropertyUpdate}/>
                </div>
            </div>
            
            {/* <div className="border-b p-5">
                <h3 className="font-semibold text-gray-500 text-sm">3D TRANSFORM</h3>
                <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between space-x-2">
                        <label className="text-sm text-gray-500">Rotate X</label>
                        <input className="flex-grow rounded border-gray-300 text-sm p-1" type="text" value={layer.props.rotate_x}></input>
                    </div>
                    
                    <div className="flex items-center justify-between space-x-2">
                        <label className="text-sm text-gray-500">Rotate Y</label>
                        <input className="flex-grow rounded border-gray-300 text-sm p-1" type="text" value={layer.props.rotate_y}></input>
                    </div>

                    <div className="flex items-center justify-between space-x-2">
                        <label className="text-sm text-gray-500">Rotate Z</label>
                        <input className="flex-grow rounded border-gray-300 text-sm p-1" type="text" value={layer.props.rotate_z}></input>
                    </div>
                </div>
            </div> */}
            
            <div className="border-b p-5">
                <h3 className="font-semibold text-gray-500 text-sm">APPEREANCE</h3>
                <div className="mt-2 space-y-2">
                    <PropertySelectGroup
                        label="Fill"
                        value={layer.props.fill_type}
                        dataKey="props.fill_type"
                        dataType="number"
                        onUpdate={handlePropertyUpdate}
                        options={
                            [
                                {value: FillType.None, label: FillType.toFillTypeString(FillType.None)},
                                {value: FillType.Solid, label: FillType.toFillTypeString(FillType.Solid)},
                                {value: FillType.Gradient, label: FillType.toFillTypeString(FillType.Gradient)},
                            ]
                        }
                    />

                    { (layer.props.fill_type !== FillType.None) ? (
                        <hr className="border-dashed"/>
                    ) : null}

                    { (layer.props.fill_type !== FillType.None && layer.props.fill_color_primary) ? (
                        <>
                            <PropertyInputGroup 
                                label="Primary Fill" 
                                dataKey="props.fill_color_primary"
                                dataType="string"
                                value={layer.props.fill_color_primary}
                                onUpdate={handlePropertyUpdate}/>
                            { (layer.props.fill_type === FillType.Gradient) ? (
                                <hr className="border-dashed"/>
                            ) : null}
                        </>
                    ) : null}

                    

                    { (layer.props.fill_type === FillType.Gradient && layer.props.fill_color_secondary) ? (
                        <>
                            <PropertyInputGroup 
                                label="Secondary Fill" 
                                dataKey="props.fill_color_secondary"
                                dataType="string"
                                value={layer.props.fill_color_secondary}
                                onUpdate={handlePropertyUpdate}/>
                            <hr className="border-dashed"/>
                        </>
                    ) : null}
                    
                    

                    { (layer.props.fill_type === FillType.Gradient) ? (
                        <PropertySliderGroup 
                            label="Gradient Rotation" 
                            dataKey="props.fill_gradient_rotation"
                            dataType="number"
                            value={layer.props.fill_gradient_rotation}
                            onUpdate={handlePropertyUpdate}/>
                    ) : null}

                    <hr className="border-dashed"/>

                    <PropertySelectGroup
                        label="Border"
                        value={layer.props.border_type}
                        dataKey="props.border_type"
                        dataType="number"
                        onUpdate={handlePropertyUpdate}
                        options={
                            [
                                {value: BorderType.None, label: BorderType.toBorderTypeString(BorderType.None)},
                                {value: BorderType.Solid, label: BorderType.toBorderTypeString(BorderType.Solid)},
                                {value: BorderType.Dashed, label: BorderType.toBorderTypeString(BorderType.Dashed)},
                                {value: BorderType.Dotted, label: BorderType.toBorderTypeString(BorderType.Dotted)},
                            ]
                        }
                    />

                    <hr className="border-dashed"/>

                    { (layer.props.border_type !== BorderType.None) ? (
                        <>
                            <PropertyInputGroup 
                                label="Border Color" 
                                dataKey="props.border_color"
                                dataType="string"
                                value={layer.props.border_color}
                                onUpdate={handlePropertyUpdate}/>
                            <hr className="border-dashed"/>
                        </>
                    ) : null}

                    <hr className="border-dashed"/>

                    { (layer.props.border_type !== BorderType.None) ? (
                        <>
                            <PropertyInputGroup 
                                label="Border Width" 
                                dataKey="props.border_width"
                                dataType="string"
                                value={layer.props.border_width}
                                onUpdate={handlePropertyUpdate}/>
                            <hr className="border-dashed"/>
                        </>
                    ) : null}

                    {/*                     
                    <div className="flex items-center justify-between space-x-2">
                        <label className="text-sm text-gray-500">Border Type</label>
                        <select className="flex-grow rounded border-gray-300 text-sm p-1" type="text">
                            <option value={BorderType.None} selected={layer.props.border_type === BorderType.None}>{BorderType.toBorderTypeString(BorderType.None)}</option>
                            <option value={BorderType.Solid} selected={layer.props.border_type === BorderType.Solid}>{BorderType.toBorderTypeString(BorderType.Solid)}</option>
                            <option value={BorderType.Dashed} selected={layer.props.border_type === BorderType.Dashed}>{BorderType.toBorderTypeString(BorderType.Dashed)}</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-between space-x-2">
                        <label className="text-sm text-gray-500">Border Color</label>
                        <input className="flex-grow rounded border-gray-300 text-sm p-1" type="text" value={layer.props.border_color}></input>
                    </div>
                    
                    <div className="flex items-center justify-between space-x-2">
                        <label className="text-sm text-gray-500">Border Width</label>
                        <input className="flex-grow rounded border-gray-300 text-sm p-1" type="text" value={layer.props.border_width}></input>
                    </div> */}
                </div>
            </div>

            <div className="border-b p-5">
                <h3 className="font-semibold text-gray-500 text-sm">EFFECTS</h3>
                {/* <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between space-x-2">
                        <label className="text-sm text-gray-500">Shadow</label>
                        <select className="flex-grow rounded border-gray-300 text-sm p-1" type="text">
                            <option value={false} selected={!layer.props.shadow_enabled}>Disabled</option>
                            <option value={true} selected={layer.props.shadow_enabled}>Enabled</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <label className="text-sm text-gray-500">Shadow  Color</label>
                        <input className="flex-grow rounded border-gray-300 text-sm p-1" type="text" value={layer.props.shadow_color}></input>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <label className="text-sm text-gray-500">Shadow X</label>
                        <input className="flex-grow rounded border-gray-300 text-sm p-1" type="text" value={layer.props.shadow_x}></input>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <label className="text-sm text-gray-500">Shadow Y</label>
                        <input className="flex-grow rounded border-gray-300 text-sm p-1" type="text" value={layer.props.shadow_y}></input>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <label className="text-sm text-gray-500">Shadow Blur</label>
                        <input className="flex-grow rounded border-gray-300 text-sm p-1" type="text" value={layer.props.shadow_blur}></input>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default CircleSettings;
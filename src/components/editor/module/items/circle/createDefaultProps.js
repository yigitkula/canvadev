import BorderType from "../../../data/borderType";

const { default: FillType } = require("../../../data/fillType");

const getDefaultProps = () => {
    return {
        angle: 0,
        border_type: BorderType.None,
        border_color: "#000",
        border_width: 0,
        fill_type: FillType.Solid,
        fill_color_primary: "#2363eb",
        fill_color_secondary: null,
        fill_gradient_rotation: 0,
        height: 100,
        opacity: 1,
        pos_x: 0, 
        pos_y: 0,
        rotate_x: 0,
        rotate_y: 0,
        rotate_z: 0,
        shadow_blur: 0,
        shadow_color: "#fff",
        shadow_enabled: false,
        shadow_x: 0,
        shadow_y: 0,
        width: 100
    }
}

export default getDefaultProps;
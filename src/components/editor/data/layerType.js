const LayerType = {
    Rectangle: 1,
    Circle: 2,
    Text: 3,
    ImageRectangle: 4,
    ImageCircle: 5,
    Shape: 6,
    toLayerTypeString: (layerType) => {
        switch (Number(layerType)) {
            case 1:     return "Rectangle"
            case 2:     return "Circle"
            case 3:     return "Text"
            case 4:     return "Image Rectangle"
            case 5:     return "Image Circle"
            case 6:     return "Shape"
            default:    return "Rectangle"
        }
    }
}

export default LayerType;
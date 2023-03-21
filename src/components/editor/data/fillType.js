const FillType = {
    None: 1,
    Solid: 2,
    Gradient: 3,
    toFillTypeString: (fillType) => {
        switch (Number(fillType)) {
            case 1:     return "None"
            case 2:     return "Solid"
            case 3:     return "Gradient"
        }
    }
}

export default FillType;
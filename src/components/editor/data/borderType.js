const BorderType = {
    None: 1,
    Solid: 2,
    Dashed: 3,
    Dotted: 4,
    toBorderTypeString: (borderType) => {
        switch (Number(borderType)) {
            case 1:     return "None"
            case 2:     return "Solid"
            case 3:     return "Dashed"
            case 4:     return "Dotted"
        }
    }
}

export default BorderType;
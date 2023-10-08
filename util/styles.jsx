

const text = (color, size, weight, align) => {
    return {
        color: color || "#000",
        fontSize: size || 14,
        fontWeight: weight || "normal",
        textAlign: align || "left"
    }
}
const border = (width, color, radius) => {
    return {
        borderWidth: width || 1,
        borderColor: color || "#000",
        borderRadius: radius || 0
    }
}
const box = (width, height, color, radius) => {
    return {
        width: width || "auto",
        height: height || "auto",
        backgroundColor: color || "transparent",
        borderRadius: radius || 0
    }
}
export  {text, box, border};


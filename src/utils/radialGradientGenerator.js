const radialGradientGenerator = (centerColor, outerColor) => `
    radial-gradient(
        circle, 
        ${centerColor} 0%, 
        ${outerColor} 75%
    )
`;

export default radialGradientGenerator;

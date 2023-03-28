const linearGradientGenerator = (leftColor, rightColor) => `
    linear-gradient(
        90deg, 
        ${leftColor} 50%, 
        ${rightColor} 98%
    )
`;

export default linearGradientGenerator;
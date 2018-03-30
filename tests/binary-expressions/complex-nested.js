function couldGroupArg(arg) {
    return (
        (
        arg.type === "ObjectExpression" &&
        (arg.properties.length > 0 || arg.comments)
        ) ||
        (
        arg.type === "ArrayExpression" &&
        (arg.elements.length > 0 || arg.comments)
        ) ||
        arg.type === "TSTypeAssertionExpression" ||
        arg.type === "TSAsExpression" ||
        arg.type === "FunctionExpression" ||
        (
        arg.type === "ArrowFunctionExpression" &&
        !arg.returnType &&
        (
            arg.body.type === "BlockStatement" ||
            arg.body.type === "ArrowFunctionExpression" ||
            arg.body.type === "ObjectExpression" ||
            arg.body.type === "ArrayExpression" ||
            arg.body.type === "CallExpression" ||
            isJSXNode(arg.body)
        )
        )
    );
}

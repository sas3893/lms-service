export const success = (body) => ({
    statusCode: 200,
    body: JSON.stringify(body),
});
export const failure = (error) => ({
    statusCode: 500,
    body: JSON.stringify({ error: error.message || "Internal Server Error" }),
});
//# sourceMappingURL=response.js.map
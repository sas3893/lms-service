export const success = (body: any) => ({
  statusCode: 200,
  body: JSON.stringify(body),
});

export const failure = (error: any) => ({
  statusCode: 500,
  body: JSON.stringify({ error: error.message || "Internal Server Error" }),
});

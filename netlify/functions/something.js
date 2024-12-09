export default async (req, context) => {
    console.log(`### URL ###`, req.url);
    for (const [key, value] of req.headers) {
        console.log(`####`, {
            key,
            value
        });
    }
    return new Response('Hello, world!');
};

export const config = {
    path: '/123'
};

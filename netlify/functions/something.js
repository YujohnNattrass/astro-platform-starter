export default async (req, context) => {
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

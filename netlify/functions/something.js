export default async (req, context) => {
    console.log(`####`, {
        host: req.header['host']
    });
    return new Response('Hello, world!');
};

export const config = {
    path: '/123'
};

export default async (req, context) => {
    console.log(`####`, {
        host: req.headers.get('host')
    });
    return new Response('Hello, world!');
};

export const config = {
    path: '/123'
};

import type { Context } from '@netlify/functions';

export default async (req, context) => {
    console.log(`####`, {
        host: req.host
    });
    return new Response('Hello, world!');
};

export const config = {
    path: '/'
};

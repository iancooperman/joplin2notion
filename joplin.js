import fetch from 'node-fetch';

async function main() {
    const res = await fetch("https://example.com");
    console.log(res.body);
}

const res = main();
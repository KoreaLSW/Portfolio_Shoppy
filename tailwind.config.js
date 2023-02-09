/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                brand: '#111111',
            },
            backgroundImage: {
                banner: `url('../public/images/banner.jpg')`,
            },
            fontFamily: {
                nanum: ['Nanum Gothic Coding', 'monospace'],
            },
            screens: {
                md: { min: '0px', max: '640px' },
                lg: { min: '641px', max: '1024px' },
                xl: { min: '1025px', max: '1280px' },
                '2xl': { min: '1281px', max: '1836px' },
            },
        },
    },
    plugins: [],
};

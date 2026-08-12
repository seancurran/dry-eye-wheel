/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.vue'],
    theme: {
        extend: {
            screens: {
                tablet: '1000px',
                md: '1450px',
            },
            fontFamily: {
                'euclid-circular-regular': ['EuclidCircularA-Regular', 'sans-serif'],
                'euclid-circular-medium': ['EuclidCircularA-Medium', 'sans-serif'],
                'euclid-circular-bold': ['EuclidCircularA-Bold', 'sans-serif'],
                'euclid-circular-semibold': ['EuclidCircularA-SemiBold', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

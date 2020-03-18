export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};
export const incrementBy = (n) => {
    return {
        type: 'INCREMENTBY',
        payload: n
    };
};
export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};
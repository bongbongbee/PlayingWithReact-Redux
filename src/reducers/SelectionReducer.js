/* if you ever return an undefined, redux will throw error
 * for the initial state, return null. */
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;

        default:
            return state;
    }
};

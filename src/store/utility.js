export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};
// This is pretty much going to be used for the sole purpose of drying out the code for the counter reducer.
// While this is handy, technically we don't have to really do this; however, it'll make your code less cluttered
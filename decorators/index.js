export const customElement = (tagname) => (target) => {
    customElements.define(tagname, target);
}

export const changeMessage = (message) => (target) => {
    target.message = message;
};

export const showAnotherAlert = (message) => (target, property, descriptor) => {
    const original = descriptor.value;
    if (typeof original === 'function') {
        descriptor.value = (...args) => {
            try {
                const result = original.apply(this, args);
                alert(message);
                return result;
            } catch (e) {
                console.log(`Error: ${e}`);
                throw e;
            }
        }
    }
    return descriptor;
}

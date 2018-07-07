const getSvgAttributes = (props) => {
    const allowedAttributes = [
        'aria-hidden',
        'fill',
        'width',
        'height',
        'className',
        'role',
        'viewBox',
        'name'
    ];
    const attributes = {};

    for (let [key, value] of Object.entries(props)) {
        if (allowedAttributes.includes(key)) {
            attributes[key] = value;
        }
        else if (key === 'color') {
            attributes.fill = value;
        }
        else if (key === 'class') {
            attributes.className = value;
        }
    }

    return attributes;
};

export default getSvgAttributes;

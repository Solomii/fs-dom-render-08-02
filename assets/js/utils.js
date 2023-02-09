function handleImageError({target}) {
    target.remove();
}

function handleImageLoad({target}) {
  target.removeAttribute("hidden");
}

function stringToColour(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = "#";
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff;
        colour += ("00" + value.toString(16)).substring(2);
    }
    if (colour.length === 6) {
        colour += "0";
    }
    return colour;
}

function getFirstLettersFromName(str) {
 return  str.trim().split(' ').map( item => item.toUpperCase().substring(0, 1)).join(' ');
//   const firstLetters = str
//   .trim()
//   .split(' ')
//   .map(word => word.charAt(0))
//   .join(' ')

// return firstLetters;
}
// console.log(getFirstLettersFromName("Tom Name"))

/**
 *
 * @param {string} tag
 * @param {object} options
 * @param {[string]} options.classNames[]
 * @param {object} options.attributes {'src':path, 'alt':name}
 * @param {object} options.styles
 * @param {object} options.listeners
 * @returns
 */
function createElement(
    tag = "div",
    { classNames, attributes, styles, listeners } = {},
    ...children
) {
    const elem = document.createElement(tag);
    if (classNames) {
        elem.classList.add(...classNames);
    }
    if (attributes) {
        for (const [nameAttr, valueAttr] of Object.entries(attributes)) {
            elem.setAttribute(nameAttr, valueAttr);
        }
    }
    if (styles) {
        for (const [nameStyle, valueStyle] of Object.entries(styles)) {
            elem.style[nameStyle] = valueStyle;
        }
    }
    if (listeners) {
        for (const [eventType, eventHandler] of Object.entries(listeners)) {
            elem.addEventListener(eventType, eventHandler);
        }
    }
    elem.append(...children);
    return elem;
}

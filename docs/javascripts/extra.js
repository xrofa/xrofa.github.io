/**
 * WEB SCRIPTS
 * Will be used as a way of controlling the interactions with our docs
 */
const SCRIPT_PROPERTIES = {
    'data-tcf-enabled': 'data-tcf-enabled',
    'data-controller-id': 'data-controller-id="CONTROLLER_ID"',
    'data-language': 'data-language="LANGUAGE_ISO"',
    'data-eu-mode': 'data-eu-mode',
    'data-block-data-layer-push': 'data-block-data-layer-push',
    'data-avoid-prefetch-services': 'data-avoid-prefetch-services',
    'data-disable-tracking': 'data-disable-tracking',
    'data-disable-server-consents': 'data-disable-server-consents',
    nonce: 'nonce="nonce-VALUE"',
};

const addElementToCodeBox = (name) => {
    const codeBox = document.querySelector('code');

    const children = codeBox.children;

    const closingElement = Array.from(children).find(
        (element) => element.outerHTML === '<span class="p">&gt;&lt;/</span>',
    );

    const newElement = document.createElement('span');
    newElement.className = 'na';
    newElement.textContent = ` ${SCRIPT_PROPERTIES[name]}`;

    codeBox.insertBefore(newElement, closingElement);
};

const removeElementFromCodeBox = (name) => {
    const codeBox = document.querySelector('code');

    const children = codeBox.children;

    const elementToRemove = Array.from(children).find(
        (element) => element.outerHTML === `<span class="na"> ${SCRIPT_PROPERTIES[name]}</span>`,
    );

    codeBox.removeChild(elementToRemove);
};
/**
 * WEB SCRIPTS
 * Will be used as a way of controlling the interactions with our docs
 */

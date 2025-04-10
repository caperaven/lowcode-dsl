export class Parser {
    #providers = {};

    registerProvider(regex, provider) {
        this.#providers[regex] = provider;
    }

    parse(dslContent) {
        const lines = dslContentToLines(dslContent);
        const result = {};
        let currentIndex = 0;
        let done = false;

        while (!done) {
            const { provider, codeBlock, nextIndex, done } = getCodeBlock(this.#providers, lines.slice(currentIndex), currentIndex);

            if (!done) {
                console.log(provider.name);
                console.log(codeBlock);
                currentIndex = nextIndex;
            }
        }
        
        return result;
    }
}

function dslContentToLines(dslContent) {
    return dslContent.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
}

/**
 * This function is used to get the code block from the lines of code.
 * It takes the lines of code and the start index as parameters.
 * The result must contain the provider to use, the lines of that block of code and the end index tha will be the next index.
 * Look at the providers keys and determine the provider to use.
 * @param {*} lines
 * @param {*} start 
 */
function getCodeBlock(providers, lines, start) {
    const provider = Object.keys(providers).find(regex => regex.test(lines[0]));
    
    if (!provider) {
        throw new Error(`No provider found for lines starting with: ${lines[0]}`);
    }
    
    const codeBlock = lines.slice(1).join('\n');
    const nextIndex = start + lines.length;
    const done = lines.length === 0 || nextIndex >= lines.length;
    
    return {
        provider: providers[provider],
        codeBlock,
        nextIndex,
        done
    };
}
export class Parser {
    #providers = {};

    registerProvider(regex, provider) {
        this.#providers[regex] = provider;
    }
}
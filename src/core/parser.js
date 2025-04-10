export class Parser {
    #providers = {};

    registerProvider(regex, provider) {
        this.#providers[regex] = provider;
    }

    parse(dslContent) {
        // todo
        return {};
    }
}
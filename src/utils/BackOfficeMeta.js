import PageMetaData from "./PageMetaData";

class BackOfficeMeta extends PageMetaData {
    #subTitle;
    constructor(subTitle) {
        super('BackOfffice');
        this.#subTitle = subTitle;
    };

    getPageMetaTitle() {
        return `${this.getPageTitle()} ${this.#subTitle && `| ${this.#subTitle}`}`
    }
};

export default BackOfficeMeta;
class PageMetaData {
    #pagetitle;
    constructor(pagetitle) {
        this.#pagetitle = pagetitle;
    };
    
    getPageTitle () {
        return this.#pagetitle;
    }
};
export default PageMetaData;
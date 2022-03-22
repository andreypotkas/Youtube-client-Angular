import { StatBar } from "../stat-bar/stat-bar.model";

export class SearchCard{
    constructor(
        public imgPath: string,
        public name: string,
        public stat: StatBar
    ) {}
}
import { User } from "./User";

export class Card {

    constructor(
        public user: User,
        public col: number,
        public row: number
    ) {}

}
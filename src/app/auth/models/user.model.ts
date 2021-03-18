

export class User {

    constructor(
        public username: string,
        public email: string,
        public google?: boolean,
        public img?: string,
        public id?: string,
        public role?: string,
        public password?: string
    ){}

}
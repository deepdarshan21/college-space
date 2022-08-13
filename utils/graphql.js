export const FETCH_POSTS_QUERY = `
    {
        getPosts {
            body
            username
            createdAt
            likes {
                username
                createdAt
            }
            comments {
                username
                body
                createdAt
            }
        }
    }
`;

export const FETCH_USER_INFO_FOR_POST = (username) => `
{
    getUserInfo(username: "${username}"){
        name
        surname
        bio
    }
}`;

export const REGISTER_USER = (args) => `
mutation {
    register(registerInput: {
        name: "${args.name}"
        surname: "${args.surname}"
        username: "${args.username}"
        password: "${args.password}"
        email: "${args.email}"
    }){
        username
        email
    }
}`;

export const LOGIN_USER = (args) => `
mutation {
    login(loginInput: {
        username: "${args.username}"
        email: "${args.email}"
        password: "${args.password}"
    }){
        username,
        token
    }
}`;

export const FETCH_POSTS_QUERY = (username) => `
{
    getPosts(username: "${username}"){
        _id,
        body,
        username,
        createdAt,
        likes,
        comments {username, body, createdAt}
        topics
    }
}`;

export const FETCH_USER_INFO_FOR_POST = (username) => `
{
    getUserInfo(username: "${username}"){
        name
        surname
        bio
    }
}`;

export const ADD_POST = (args) => `
mutation {
    addPost(postInput: {
        body: """${args.body}"""
        topics: [${args.topics}]
    })
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
        token,
        name,
    }
}`;

export const FETCH_USER_INFO = (username) => `
{
    getUserInfo(username: "${username}"){
        name
        surname
        createdAt
        updatedAt
        username
        email
        branch
        dateOfBirth
        bio
        about
        role
        year
        interest
        achivement
        clubs
    }
}`;

export const UPDATE_USER_INFO = (args) => `
mutation {
    updateUserInfo(userInfoInput: {
        branch: "${args.branch}"
        dateOfBirth: "${args.dateOfBirth}"
        bio: "${args.bio}"
        about: "${args.about}"
        role: "${args.role}"
        year: "${args.year}"
        interest: "${args.interest}"
        achivement: "${args.achivement}"
        clubs: "${args.clubs}"
    })
}`;

export const FETCH_USER_NAME = (username) => `
{
    getUserInfo(username: "${username}"){
        name
    }
}`;

export const FETCH_POSTS_OF_A_USER = (username) => `
{
    getPostsOfUser(username: "${username}"){
        _id
        body,
        username,
        createdAt,
        likes,
        comments {username, body, createdAt}
    }
}`;

export const LIKE_POST = (args) => `
mutation {
    likePost(likeInput: {
        postId: "${args.postId}",
        username: "${args.username}",
    })
}
`;

export const COMMENT_POST = (args) => `
mutation {
    commentPost(commentInput: {
        postId: "${args.postId}",
        username: "${args.username}",
        body: """${args.body}"""
    })
}`;

export const DELETE_POST = (postId) => `
mutation{
    deletePost(postId: "${postId}")
}`;

export const REPORT_POST = (args) => `
mutation {
    reportPost(reportInput: {
        postId: "${args.postId}",
        username: "${args.username}",
    })
}`;

export const SEARCH_USER = (string) => `
{
    searchUser(string: "${string}"){
        name, username
    }
}`;

export const GET_TOPICS = () => `
{
    getTopics
}`;

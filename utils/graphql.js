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

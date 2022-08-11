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

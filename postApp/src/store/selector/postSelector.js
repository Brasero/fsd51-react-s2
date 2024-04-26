export const selectPosts = state => state.articles.posts
export const selectPost = state => state.articles.post
export const selectPostLoadingState = state => state.articles.loadingState
export const selectPostById = (id) => state => state.articles.posts.find(post => post.id === id)
export const selectComment = state => state.articles.comment
export const selectLoadingComment = state => state.articles.loadingComment
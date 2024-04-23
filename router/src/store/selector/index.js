
//Un selecteur est une fonction qu'on utilise avec le hook `useSelector` de react-redux
//elle prend la forme d'une fonction qui prend le state en paramètre et nous retourne une partie de ce dérnier
export const selectPost = (state) => state.postsReducer.post;

export const selectCount = state => state.countReducer.count
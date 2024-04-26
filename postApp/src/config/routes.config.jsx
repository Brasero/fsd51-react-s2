// Je crée une constante `routes` contenant un objet qui pour chaque propriété contient un objet contenant
// tous les éléments constituant une route.
// J'exporte également une fonction `generatePath()` me facilitant la generation du chemin de la route
// pour les Link et NavLink

import HomePage from "../page/Home/index.page.jsx";
import PostPage from "../page/Post/index.page.jsx";
import AddPostPage from "../page/AddPost/index.page.jsx";

export const routes = {
  home: {
    label: "Home",
    path: '/',
    element: <HomePage />,
    showInBar: true
  },
  addPost: {
    label: 'Post',
    path: '/addPost',
    element: <AddPostPage />,
    showInBar: true
  },
  postDetail: {
    label: 'Show more',
    path: '/post/:id',
    element: <PostPage />,
    showInBar: false
  }
}

export const generatePath = (name, params = null) => {
  if (!params) {
    return routes[name].path
  }
  let path = routes[name].path
  params.forEach(({name, value}) => {
    path = path.replace(`:${name}`, value)
  })
  return path;
}
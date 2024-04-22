import './App.css'
import {NavLink, Routes, Route} from "react-router-dom";
import Home from "./page/Home/index.jsx";
import List from "./page/List/index.jsx";
import Detail from "./page/Detail/index.jsx";
import Form from "./page/Form/index.jsx";
import Main from "./component/Main/index.jsx";
import MoreDetail from "./component/MoreDetail/index.jsx";

function App() {

    const checkIsActive = ({isActive}) => {
        return isActive ? {color: 'orange'} : {}
    }

    return (
        <>
            <nav>
                <ul>
                    <li>
                        {/*
            Les components Link et NavLink peuvent prendre une fonction (ex : `checkIsActive()`) pour leurs propriétés `className` et `style`,
            cette fonction prendra en paramètre (passée par les component Link et NavLink) dotée d'une propriété `isActive`(boolean)
            grâce à cette dernière, il est possible de savoir si le lien est actif et de retourner un objet de style ou une classe en fonction de sa valeur.
            */}
                        <NavLink style={checkIsActive} to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={checkIsActive} to={'/list'}>
                            Liste
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={checkIsActive} to={'/form'}>
                            Formulaire
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                {/*
                    Pour définir notre ensemble de routes, on utilisera le component `Routes` de react-router-dom
                    ce dérnier peut prendre le component `Route` en tant que children (et uniquement ce dernier)
                */}
                <Routes>
                    {/*
                        Le component `Route` s'utilise comme balise orpheline,
                        sauf lorsqu'il possède des sous routes (voir ci-dessous),
                        il prend un props `path` qui reprèsente le pattern de la route et un props `element`
                        qui représente le component à afficher lorsque cet route est matchée
                    */}
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/list'} element={<List/>}/>

                    {/*
                        Il est possible de déclarer des sous routes,
                        la balise Route parent devient alors une balise composée (balise ouvrante et balise fermante),
                        le path des routes enfant devra être passée de manière relative (ne commence pas par `/`).

                        Le component de la route parent devra contenir une balise <Outlet /> afin de préciser
                        l'endroit où devront s'afficher les component des routes enfants. (voir /page/Detail/index.jsx)
                    */}
                    <Route path={'/list'} element={<Detail/>}>
                        <Route path={':postID'} element={<Main/>}/>
                        <Route path={':postID/detail'} element={<MoreDetail/>}/>
                    </Route>


                    <Route path={'/form'} element={<Form/>}/>

                    {/*
                        Le path `*` placé en dérnier dans la liste des routes permettra de "catché" les urls
                        qui n'ont pas matchées les path au dessus
                    */}
                    <Route path={'*'} element={<div>Not found</div>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
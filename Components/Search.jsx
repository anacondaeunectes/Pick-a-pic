import React, { useState } from 'react';
import { createApi } from 'unsplash-js';
import Images_Grid from './Images_Grid';

const serverApi = createApi({
    accessKey: '2S5oJmKlZVsCxmoQ0jHltnFu-clBReppwUatZEiijKI'
});

const Search = () => {
    
    // Hook to control whole search state (including advanced search inputs)
    const [search, setSearch] = useState({
        query: '',
        perPage: undefined,
        userOrientation: undefined,
        orderBy: undefined
    });

    // Hook to control the arrays of objects which are the response from the api
    const [imgsArray, setImgsArray] = useState([]);

    // Hook to control 
    const [advSearch_isShown, setAdvSearch] = useState(false);

    // setInterval( () => console.log(search), 2000)


    // This function makes the request to unsplash api's using the 'serverApi' object created before. Parameters are query preferences selected by user in the advanced search  
    // Orientation property appears as deprecated but seems to work so is needed to take a close look of it's functionality over time 
    function searchImgs(user_Query, user_PerPage = 20, userOrientation = null, user_OrderBy = null) {
       serverApi.search.getPhotos({query: user_Query, perPage: user_PerPage, orientation: userOrientation, orderBy: user_OrderBy})
       .then( imgs => {
           console.log('Api results: ', imgs);
           setImgsArray(imgs.response.results);
       })
    }

    /* Component's structure. Input is linked with it's useState hook so each time the user change input's value, the state is set again.
        Button trigger's searchImgs() function with the user preferences as parameters when clicked.
    */
    return (
    <>
        <div className="Search__Container">
            <input type="search" value={search.query} name="buscador_Input" className="Search__Input" placeholder="Pick a pic" 
                onChange={
                    ({target}) => setSearch(actualStateValue => ({...actualStateValue, query: target.value}))
                }
            />
            <br/>
            <p className="Search__AdvSearch__Toggle" onClick={ () => {setAdvSearch(!advSearch_isShown)}}>
                <small><b>Busqueda Avanzada</b></small>
            </p>
            <br/>

            {/* Only shown if 'advSearch_isShown' is true */}
            { !advSearch_isShown ? null : 
            
                <div className="Search__AdvSearch__Container">

                    {/* <hr/> */}

                    <label className="Search__AdvSearch__Label">
                        Numero de resultados (30     max.): <br/>
                        <input type="number" min="1" max="30" name="Search_UserPerPage" className="Search__AdvSearch__Input" placeholder="Número de fotos..." onChange={({target}) => setSearch(actualStateValue => ({...actualStateValue, perPage: target.value}))}/>
                    </label>

                    <br/>

                    <label className="Search__AdvSearch__Label">
                        Orientacion: <br/>
                        {/* Has been necessary to use a conditional to change state and set to 'undefined' in case 'Todos los tipos' option is selected because it's the only value it's accepts to get any type of orientation */}
                        <select name="Search_UserOrientation" className="Search__AdvSearch__Input" value={search.userOrientation} onChange={({target}) => {if (target.value == "undefined"){ 
                            setSearch(actualStateValue => ({...actualStateValue, userOrientation: undefined}))
                         } else {
                            setSearch(actualStateValue => ({...actualStateValue, userOrientation: target.value}))
                        }}}>
                            <option value="undefined">Todos los tipos</option>
                            <option value="landscape">Apaisado</option>
                            <option value="portrait">Retrato</option>
                            <option value="squarish">Cuadrado</option>
                        </select>
                    </label>

                    <br/>

                    <label className="Search__AdvSearch__Label">
                        Ordenar por: <br/>
                        <select name="Search_UserOrderBy" className="Search__AdvSearch__Input" value={search.orderBy} onChange={({target}) => setSearch(actualStateValue => ({...actualStateValue, orderBy: target.value}))}>
                            <option value="relevant">Más relevantes</option>
                            <option value="latest">Más recientes</option>
                        </select>
                    </label>

                    {/* <hr/> */}

                </div>
            }

            <button className="Search__Button"
                onClick={
                    () => {console.log(search); searchImgs(search.query, search.perPage, search.userOrientation, search.orderBy)}
                }>
            Search</button>
        </div>
        <Images_Grid imgsArray={imgsArray}/> {/* MOVEEEEER AL COMPONENTE PRINCIPAL */}
    </>
    )
};

export default Search;
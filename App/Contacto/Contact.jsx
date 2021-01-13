import React, {useState} from 'react';

const Contact = () => {

    const [search, setSearch] = useState({});

    return (
        <div className="Contacto__Container">
            <form className="Contacto__Form">
                <label className="Contacto__Label">
                    Nombre<br/>
                    <input type="text" id="name"value={search.name} name="Contacto_Nombre" id="" placeholder="Escribe aquí..." onChange={({target}) => setSearch(actualStateValue => ({...actualStateValue, name: target.value}))}/>
                </label>
                <br/>
                <label className="Contacto__Label">
                    Apellidos<br/>
                    <input type="text" name="Contacto_Apellidos" id="" placeholder="Escribe aquí..." onChange={({target}) => setSearch(actualStateValue => ({...actualStateValue, surname: target.value}))}/>
                </label>
                <br/>
                <label className="Contacto__Label">
                    Email <br/>
                    <input type="text" name="Contacto__Email" id="" placeholder="Escribe aquí..." onChange={({target}) => setSearch(actualStateValue => ({...actualStateValue, email: target.value}))}/>
                </label>
                <br/>
                <label className="Contacto__Label">
                    DNI <br/>
                    <input type="text" name="Contacto_DNI" id="" placeholder="Escribe aquí..." onChange={({target}) => setSearch(actualStateValue => ({...actualStateValue, dni: target.value}))}/>    
                </label>
                <br/>
                <label className="Contacto__Label">
                    Mensaje <br/>
                    <textarea name="Contacto_Mensaje" id="dd" placeholder="Escribe aquí..."></textarea>    
                </label>
                <br/>
                <input type="submit"/>
            </form>
            <button onClick={() => console.log(search)}></button>
        </div>
    )
};

export default Contact;
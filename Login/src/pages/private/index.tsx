import { useAuth } from "../../context/Auth/AuthProvider";
import {Div} from "./styles"

export const Private = () => {
    const { handleLogout } = useAuth();
    
    return (
        <Div>
            <h2>Página Privada</h2>
            <br />

            <h4>Lorem</h4>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>Illum odio atque sit reprehenderit similique repudiandae vel nisi reiciendis! </p>
            <p>Possimus quam optio deserunt fuga beatae dolor modi veniam vel autem ipsum?</p>

            <br />
            <div>
                <strong><button onClick={ handleLogout }>Sair</button></strong>
            </div>
        </Div>
    );
}

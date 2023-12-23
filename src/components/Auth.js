
import { auth } from "../config/firebase";
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Auth(){



    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
           
            console.log("Usuario ha iniciado sesión con Google:", result.user);
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error.message);
        }
    }


    const googleButtonStyle = {
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#dd4b39',
        color: 'white',
        cursor: 'pointer',
        marginLeft: 'auto', 
        display: 'block', 
    };

    return(
        <div> 
        
            <button 
                onClick={signInWithGoogle} 
                style={googleButtonStyle}
            >
                Iniciar sesión con Google
            </button>
        </div>
    )
}

export default Auth;



function Login () {

return (
        <div className="container mt-3 mb-5">
            <h1>Login</h1>
            <form >
                <div className="alert alert-danger" role="alert">Debes ingresar tu email</div> 
                <div className="alert alert-danger" role="alert">El formato del email no es válido</div>
                <label htmlFor="correo" className="form-label">Email</label>
                <input type="email" id="correo" name="correo" placeholder="Ingresa tu email" className="form-control mb-2" />
                
               <div className="alert alert-danger" role="alert">Debes ingresar tu contraseña</div> 
                <div className="alert alert-danger" role="alert">Tu contraseña debe tener al menos 6 caracteres</div>
                <label htmlFor="pass" className="form-label">Contraseña</label>
                <input type="password" id="pass" name="pass" placeholder="Ingresa tu contraseña" className="form-control mb-2" />
                
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
        </div>
    );

}
export default Login;
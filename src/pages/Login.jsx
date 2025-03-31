import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        correo: '',
        pass: ''
    });
    
    const [errors, setErrors] = useState({
        correo: false,
        correoFormat: false,
        pass: false,
        passLength: false
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const validateForm = () => {
        const newErrors = {
            correo: formData.correo === '',
            correoFormat: formData.correo !== '' && !formData.correo.includes('@'),
            pass: formData.pass === '',
            passLength: formData.pass !== '' && formData.pass.length < 6
        };
        
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Simulación de login exitoso
            login({ email: formData.correo, id: Date.now() });
            navigate('/');
        }
    };

    return (
        <div className="container mt-3 mb-5">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                {errors.correo && <div className="alert alert-danger" role="alert">Debes ingresar tu email</div>}
                {errors.correoFormat && <div className="alert alert-danger" role="alert">El formato del email no es válido</div>}
                <label htmlFor="correo" className="form-label">Email</label>
                <input 
                    type="email" 
                    id="correo" 
                    name="correo" 
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="Ingresa tu email" 
                    className="form-control mb-2" 
                />
                
                {errors.pass && <div className="alert alert-danger" role="alert">Debes ingresar tu contraseña</div>}
                {errors.passLength && <div className="alert alert-danger" role="alert">Tu contraseña debe tener al menos 6 caracteres</div>}
                <label htmlFor="pass" className="form-label">Contraseña</label>
                <input 
                    type="password" 
                    id="pass" 
                    name="pass" 
                    value={formData.pass}
                    onChange={handleChange}
                    placeholder="Ingresa tu contraseña" 
                    className="form-control mb-2" 
                />
                
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default Login;
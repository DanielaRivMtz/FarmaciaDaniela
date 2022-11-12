import React from 'react'
import Menu from './Menu'


function Login() {
    return (
        <div>
            <Menu />
            <div className='container text-center'>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-6 .offset-md-3 m-5">
                        <div class="card mx-5 py-4 bg-secondary">
                            <div className='logo'>
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="login-icon" className='img-fluid' style={{ height: 185, widht: 185 }} />
                            </div>
                            <div>
                                <h1>Login</h1>
                            </div>
                            <form className='container px-5'>
                                <div className='form-group my-4 px-4 input-group mb-3'>
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-circle"></i></span>
                                    <input type="text" class="form-control" id='user' placeholder="Ingrese su usuario" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="form-group my-4 px-4 input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-key-fill"></i></span>
                                    <input type="password" class="form-control" id='password' placeholder="Ingrese su contraseña" aria-label="Password" aria-describedby="basic-addon1" />
                                </div>
                                <div>
                                    <button type="submit" className='btn btn-outline-primary mt-4'>Ingresar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
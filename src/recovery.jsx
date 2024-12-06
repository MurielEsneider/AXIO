import React from "react"
import { Route, Routes, Link } from "react-router-dom";

function RecoveryPassword() {
    return (
        <>
            <section className="w-full h-full flex justify-center bg-[url('https://img.freepik.com/foto-gratis/fondo-moderno-3d-diseno-abstracto-particulas-que-fluyen_1048-12262.jpg?t=st=1733523795~exp=1733527395~hmac=758e278b5c42a66b1e4311689d1cbeb1c6843582b3d6640b74649fb092efab9f&w=1060')] bg-cover">
                <div className="mt-40 bg-black/40 p-8 rounded-lg shadow-lg max-w-md w-full fixed justify-center items-center">
                    <Link to='/'>
                        <button className="text-left mb-4 focus:outline-none w-full">
                            <svg
                                className="w-6 h-6 text-black"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                        </button>
                    </Link>
                    <h1 className="text-3xl font-bold mb-4 text-center text-white">Recupera contraseña</h1>
                    <p className="text-center text-white mb-4">
                        Introduce el email con el que estás registrado, te enviaremos un código para verificar que eres tú
                    </p>

                    <form>
                        <div className="mt-4 mb-4">
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300  rounded-lg   shadow-sm focus:outline-none sm:text-sm text-center bg-slate-200"
                                placeholder="Email"
                            />

                        </div>
                        <Link to="/RecoveryPassword2">
                            <button
                                type="submit"
                                className=" bg-green-500 text-white py-3 px-4 w-full rounded-lg hover:bg-green-800 text-lg mb-2"
                            >
                                Enviar código
                            </button>
                        </Link>
                    </form>
                </div>
            </section>
            
        </>
    )
}



export default RecoveryPassword;
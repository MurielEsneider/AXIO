import { Route, Routes, Link } from "react-router-dom";
import PrimaryButton from "./components/PrimaryButton";

const LoginExample = () => {
    return (
        <>
            <section className="flex h-screen w-screen fixed z-10 ">
                <section className="w-full h-full flex justify-center bg-[url('https://img.freepik.com/foto-gratis/fondo-moderno-3d-diseno-abstracto-particulas-que-fluyen_1048-12262.jpg?t=st=1733523795~exp=1733527395~hmac=758e278b5c42a66b1e4311689d1cbeb1c6843582b3d6640b74649fb092efab9f&w=1060')] bg-cover">
                    <section className="flex flex-col w-50 p-12">
            
                        <form className=" mt-24 flex bg-black/40 flex-col p-4 rounded-xl items-center justify-center">
                        <h1 className='text-2xl font-bold text-white'>Inicio de sesión</h1>
                            <article className="mt-4 flex flex-col self-center">
                                <label className="self-start text-white" htmlFor="email">Nombre de usuario</label>
                                <input className="w-96 mb-2 mt-2 flex justify-between bg-zinc-200 p-2 rounded-lg" type="email" name="email" id="email" placeholder='Email' />
                            </article>
                            <article className=" flex flex-col self-center">
                                <label className="self-start text-white" htmlFor="password">Contraseña</label>
                                <input className="w-96 mb-1 mt-2 bg-zinc-200 p-2 rounded-lg" type="password" name="password" id="password" placeholder='Contraseña' />
                            </article>
                            <article>
                                <PrimaryButton clases="w-96" text="Iniciar sesión" />
                            </article>
                            <Link className="text-right text-green-500 text-sm self-center mt-4 mb-4" to="/RecoveryPassword">¿Olvidaste tu contraseña?</Link>
                            <section className="flex text-sm justify-center mt-2 mb-4">
                            
                            <p className="text-white mr-36 ">¿No tienes una cuenta?</p>
                            <Link className="text-green-500" to="/SignUpExample">Registrate</Link>
                            </section>
                        </form>
                        
                        
                        
                        
                    </section>
                </section>
            </section>
        </>
    )
}

export default LoginExample;
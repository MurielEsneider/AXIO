import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "./components/PrimaryButton";

const SignUpExample = () => {
    const location = useLocation();

    return (
        <>
            <section className='flex items-center h-screen w-screen fixed z-10'>
                <section className="bg-white w-full h-full flex justify-center bg-[url('https://img.freepik.com/foto-gratis/fondo-moderno-3d-diseno-abstracto-particulas-que-fluyen_1048-12262.jpg?t=st=1733523795~exp=1733527395~hmac=758e278b5c42a66b1e4311689d1cbeb1c6843582b3d6640b74649fb092efab9f&w=1060')] bg-cover">
                    <section className="flex flex-col w-50 p-12">
                        
                        
                        <form className="mt-24  bg-black/40 flex flex-col p-4">
                        <h1 className='text-2xl font-bold text-white'>Registrarse</h1>
                            <div className="mt-4 flex flex-col self-center ">
                                <input className="w-96 bg-zinc-200 p-2 rounded-lg" type="text" name="name" id="name" placeholder='Usuario' />
                            </div>
                            <div className="mt-4 flex flex-col self-center ">
                                <input className="w-96 bg-zinc-200 p-2 rounded-lg" type="email" name="email" id="email" placeholder='Email' />
                            </div>
                            <div className="mt-4 flex flex-col self-center ">
                                <input className="w-96 bg-zinc-200 p-2 rounded-lg" type="password" name="password" id="password" placeholder='Contraseña' />
                            </div>
                            <div className="mt-4 flex flex-col self-center ">
                                <input className="w-96 mb-2 bg-zinc-200 p-2 rounded-lg" type="password" name="check-password" id="check-password" placeholder='Confirmar contraseña' />
                            </div>
                            <div>
                                <PrimaryButton clases="w-96 " text="Registrarse" />
                            </div>

                            <section className="flex text-sm justify-center gap-36 mb-4 text-white">
                            <p className="mt-4">¿Ya tienes una cuenta?</p>
                            <Link className="text-green-500 mt-4" to="/loginExample">Inicia sesión</Link>
                        </section>
                        </form>
                        

                    </section>
                </section>
            </section>
        </>
    )
}

export default SignUpExample;
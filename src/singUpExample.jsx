import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "./components/PrimaryButton";

const SignUpExample = () => {
    const location = useLocation();

    return (
        <>
            <section className='flex items-center h-screen w-screen fixed z-10'>
                <section className="bg-white w-full h-full flex justify-center bg-[url('https://img.freepik.com/free-photo/3d-modern-background-with-abstract-design-flowing-particles_1048-12262.jpg?t=st=1733466097~exp=1733469697~hmac=761d0fef7b9ed454ee8107bbf49dca4b48fced5aac0270579a9539c27f8f5d67&w=996')] bg-cover">
                    <section className="flex flex-col w-2/3 p-12">
                        <Link className="text-1xl self-start text-white" to="/"><i className="fa-solid fa-angle-left"></i></Link>
                        <h1 className='text-3xl font-bold text-white'>Registrarse</h1>
                        <form className="flex flex-col p-4">
                            <div className="mt-4 flex flex-col self-center ">
                                <input className="w-96 bg-zinc-200 p-2 rounded-lg" type="text" name="name" id="name" placeholder='Usuario' />
                            </div>
                            <div className="mt-2 flex flex-col self-center ">
                                <input className="w-96 bg-zinc-200 p-2 rounded-lg" type="email" name="email" id="email" placeholder='Email' />
                            </div>
                            <div className="mt-2 flex flex-col self-center ">
                                <input className="w-96 bg-zinc-200 p-2 rounded-lg" type="password" name="password" id="password" placeholder='Contraseña' />
                            </div>
                            <div className="mt-2 flex flex-col self-center ">
                                <input className="w-96 mb-2 bg-zinc-200 p-2 rounded-lg" type="password" name="check-password" id="check-password" placeholder='Confirmar contraseña' />
                            </div>
                            <div>
                                <PrimaryButton clases="w-96 " text="Registrarse" />
                            </div>
                        </form>
                        <section className="flex text-sm justify-center gap-36 text-white">
                            <p>¿Ya tienes una cuenta?</p>
                            <Link className="text-green-500">Inicia sesión</Link>
                        </section>

                    </section>
                </section>
            </section>
        </>
    )
}

export default SignUpExample;
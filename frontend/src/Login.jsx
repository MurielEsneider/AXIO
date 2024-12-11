import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "./components/PrimaryButton";
import axios from "axios";

const LoginExample = () => {
    const [formData, setFormData] = useState({ correo: "", contraseña: "" });
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate(); // Instancia del enrutador

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/login", formData);
            setMensaje("Inicio de sesión exitoso");
            localStorage.setItem("token", response.data.token);

            // Redirigir al usuario después de un inicio de sesión exitoso
            setTimeout(() => {
                navigate("/Home"); // Redirige a la página principal o la ruta deseada
            }, 2000);
        } catch (error) {
            setMensaje(error.response?.data?.error || "Error al iniciar sesión");
        }
    };

    return (
        <>
            <section className="flex h-screen w-screen fixed z-10">
                <section className="w-full h-full flex justify-center">
                    <section className="flex flex-col w-50 p-12">
                        <form onSubmit={handleSubmit} className="mt-24 flex bg-black/40 flex-col p-4 rounded-xl items-center justify-center">
                            <h1 className="text-2xl font-bold text-white">Inicio de sesión</h1>
                            <article className="mt-4 flex flex-col self-center">
                                <label className="self-start text-white" htmlFor="correo">Correo electrónico</label>
                                <input
                                    className="w-96 mb-2 mt-2 flex justify-between bg-zinc-200 p-2 rounded-lg"
                                    type="email"
                                    name="correo"
                                    id="correo"
                                    placeholder="Email"
                                    value={formData.correo}
                                    onChange={handleChange}
                                    required
                                />
                            </article>
                            <article className="flex flex-col self-center">
                                <label className="self-start text-white" htmlFor="contraseña">Contraseña</label>
                                <input
                                    className="w-96 mb-1 mt-2 bg-zinc-200 p-2 rounded-lg"
                                    type="password"
                                    name="contraseña"
                                    id="contraseña"
                                    placeholder="Contraseña"
                                    value={formData.contraseña}
                                    onChange={handleChange}
                                    required
                                />
                            </article>
                            <article>
                                <PrimaryButton clases="w-96" text="Iniciar sesión"/>
                            </article>
                            <Link className="text-right text-green-500 text-sm self-center mt-4 mb-4" to="/RecoveryPassword">¿Olvidaste tu contraseña?</Link>
                            <section className="flex text-sm justify-center mt-2 mb-4">
                                <p className="text-white mr-36">¿No tienes una cuenta?</p>
                                <Link className="text-green-500" to="/SignUpExample">Regístrate</Link>
                            </section>
                        </form>
                    </section>
                </section>
            </section>
        </>
    );
};

export default LoginExample;

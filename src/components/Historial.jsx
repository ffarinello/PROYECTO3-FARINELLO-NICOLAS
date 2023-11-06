import "../historial.css";

const Historial = () => {
    const peleas = JSON.parse(localStorage.getItem("peleas")) || [];

    function volver() {
        window.location.replace("/");
    }

    function eliminar() {

    }
    
    return (
        <main>
            <button type="button" id="volver" onClick={volver}>
                Volver
            </button>
            <header>
                <h1>Historial de Batallas</h1>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Personaje</th>
                        <th>Rival</th>
                        <th>Ganador</th>
                    </tr>
                </thead>
                <tbody>
                    {peleas.map((pelea, index) => (
                        <tr key={index}>
                            <td>{pelea.personaje.name}</td>
                            <td>{pelea.rival.name}</td>
                            <td>{pelea.victoria}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" id="eliminar" onClick={eliminar}>
                Eliminar historial
            </button>
        </main>
    );
};

export default Historial;

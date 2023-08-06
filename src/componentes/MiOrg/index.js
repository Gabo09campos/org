import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //useState()
    //como usar el useState:
    //const [nombreVariable,funcionActualiza] = useState(valorInicial)

    //const [mostrar, actualizarMostrar] = useState(true)

    //const manejarClick = () => {
    //    console.log("Manejar/ocultar elemento", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="tittle">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg
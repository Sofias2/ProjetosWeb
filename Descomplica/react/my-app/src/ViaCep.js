import { useCep } from "./hooks/useCEP"

export const ViaCep = () => {
   const endereco = useCep('01001000')

    return(
        <table>
            <tbody>
                <tr>
                    <td>Bairro:</td>
                    <td>{endereco.bairro}</td>

                </tr>
                <tr>
                    <td>Complemento:</td>
                    <td>{endereco.complemento}</td>

                </tr>
                <tr>
                    <td>UF:</td>
                    <td>{endereco.uf} </td>

                </tr>
                <tr>
                    <td>Localidade:</td>
                    <td>{endereco.localidade}</td>

                </tr>
            </tbody>
        </table>
    )
}
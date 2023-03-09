import { TableToExcelReact } from 'table-to-excel-react'

export const Tables = ({ totalCentrifugo, totalAbsorcion }) => {
  // CALCULOS TABLA CENTRIFUGA
  const rp = Math.floor(totalCentrifugo * 0.3190995427365)

  // CALCULOS TABLA ABSORCION
  const gas = Math.floor((totalAbsorcion * 511.13199046407) / 1000)

  return (
    <>
      <div className='tables' id='1'>

        <div id='table-to-xls'>
          <h1>Centrifugo</h1>
          <table className='container'>
            <thead>
              <tr>
                <th><h1>Energia</h1></th>
                <th><h1>Emisiones Co2(TCo2 al mes)</h1></th>
                <th><h1>Capex($ Megavatio)</h1></th>
                <th><h1>Opex($ Año)</h1></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Red Publica</td>
                <td>{rp}</td>
                <td>1-2</td>
                <td>1-3</td>
              </tr>
              <tr>
                <td>Microturbina Gas</td>
                <td>2-1</td>
                <td>2-2</td>
                <td>2-3</td>
              </tr>
              <tr>
                <td>Solar Fotovoltaica</td>
                <td>3-1</td>
                <td>3-2</td>
                <td>3-3</td>
              </tr>
              <tr>
                <td>Energia Eolica</td>
                <td>4-1</td>
                <td>4-2</td>
                <td>4-3</td>
              </tr>
              <tr>
                <td>Energia Biomasa</td>
                <td>5-1</td>
                <td>5-2</td>
                <td>5-3</td>
              </tr>
              <tr>
                <td>Toneladas de refrigeracion que sumistran <br /> los chillers
                  de adsorcion seleccionados es:
                </td>
                <td>6-1</td>
                <td>6-2</td>
                <td>6-3</td>
              </tr>
            </tbody>
          </table>

          <h1>Absorción</h1>
          <table className='container' id='absorcion'>
            <thead>
              <tr>
                <th><h1>Energia</h1></th>
                <th><h1>Emisiones Co2(TCo2 al mes)</h1></th>
                <th><h1>Capex($ Megavatio)</h1></th>
                <th><h1>Opex($ Año)</h1></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Microturbina Gas</td>
                <td>{gas}</td>
                <td>1-2</td>
                <td>1-3</td>
              </tr>
              <tr>
                <td>Solar Termica</td>
                <td>2-1</td>
                <td>2-2</td>
                <td>2-3</td>
              </tr>
              <tr>
                <td>Energia Biomasa</td>
                <td>3-1</td>
                <td>3-2</td>
                <td>3-3</td>
              </tr>
              <tr>
                <td>Toneladas de refrigeracion que sumistran <br /> los chillers
                  de adsorcion seleccionados es:
                </td>
                <td>4-1</td>
                <td>4-2</td>
                <td>4-3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <TableToExcelReact table='table-to-xls' fileName='Distritos-termicos' sheet='distritos'>
          <button className='submitBtn'>Exportar Excel</button>
        </TableToExcelReact>
      </div>
    </>
  )
}

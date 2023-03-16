import { TableToExcelReact } from 'table-to-excel-react'

export const Tables = ({ totalCentrifugo: parametro1, totalAbsorcion: parametro2 }) => {
  // CALCULOS TABLA CENTRIFUGA
  // Formulas Centrifugo
  const rp = Math.floor(parametro1 * 0.3190995427365)
  const gas = Math.floor((parametro1 * 511.13199046407) / 1000)
  const gCapex = Math.floor((parametro1 * 0.0035174111853) * (1925000 / 0.88))
  const gOpex = Math.floor(gCapex * 0.03)

  const solarCapex = Math.floor(parametro1 * 0.0035174111853)
  const ft = Math.floor(solarCapex * 1000000)
  const eCapex = Math.floor(solarCapex * 1700000)
  const bCapex = Math.floor(solarCapex * 2000000)

  // CALCULOS TABLA ABSORCION
  const gasAbsorcion = Math.floor((parametro2 * 511.13199046407) / 1000)
  const gasCapexAbsorcion = Math.floor(((parametro2 * 0.0035174111853) * (1925000 / 0.88)))
  const gasOpexAbsorcion = Math.floor(gasCapexAbsorcion * 0.03)

  const solarCapexAbsorcion = Math.floor(parametro2 * 0.0035174111853)
  // const ftAbsorcion = (solarCapexAbsorcion * 1000000) * 1.015
  const bioAbsorcion = Math.floor(solarCapexAbsorcion * 2000000)

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
                <td>{0}</td>
                <td>{0}</td>
              </tr>
              <tr>
                <td>Microturbina Gas</td>
                <td>{gas}</td>
                <td>{gCapex}</td>
                <td>{gOpex}</td>
              </tr>
              <tr>
                <td>Solar Fotovoltaica</td>
                <td>{ft}</td>
                <td>{solarCapex}</td>
                <td>{0}</td>
              </tr>
              <tr>
                <td>Energia Eolica</td>
                <td>{0}</td>
                <td>{eCapex}</td>
                <td>{0}</td>
              </tr>
              <tr>
                <td>Energia Biomasa</td>
                <td>{0}</td>
                <td>{bCapex}</td>
                <td>{0}</td>
              </tr>
              <tr>
                <td>Toneladas de refrigeracion que sumistran <br /> los chillers
                  de adsorcion seleccionados es:
                </td>
                <td>{parametro1}</td>
                <td>{0}</td>
                <td>{0}</td>
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
                <td>{gasAbsorcion}</td>
                <td>{gasCapexAbsorcion}</td>
                <td>{gasOpexAbsorcion}</td>
              </tr>
              <tr>
                <td>Solar Termica</td>
                <td>{0}</td>
                <td>{solarCapexAbsorcion}</td>
                <td>{0}</td>
              </tr>
              <tr>
                <td>Energia Biomasa</td>
                <td>{0}</td>
                <td>{bioAbsorcion}</td>
                <td>{0}</td>
              </tr>
              <tr>
                <td>Toneladas de refrigeracion que sumistran <br /> los chillers
                  de adsorcion seleccionados es:
                </td>
                <td>{parametro2}</td>
                <td>{0}</td>
                <td>{0}</td>
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

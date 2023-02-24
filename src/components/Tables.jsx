export const Tables = () => {
  return (
    <>
      <div className='tables'>
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
              <td>9518</td>
              <td>6369</td>
              <td>01:32:50</td>
            </tr>
            <tr>
              <td>Microturbina Gas</td>
              <td>7326</td>
              <td>10437</td>
              <td>00:51:22</td>
            </tr>
            <tr>
              <td>Solar Fotovoltaica</td>
              <td>4162</td>
              <td>5327</td>
              <td>00:24:34</td>
            </tr>
            <tr>
              <td>Energia Eolica</td>
              <td>3654</td>
              <td>2961</td>
              <td>00:12:10</td>
            </tr>
            <tr>
              <td>Energia Biomasa</td>
              <td>2002</td>
              <td>4135</td>
              <td>00:46:19</td>
            </tr>
            <tr>
              <td>Toneladas de refrigeracion que sumistran <br /> los chillers
                de adsorcion seleccionados es:
              </td>
              <td>4623</td>
              <td>3486</td>
              <td>00:31:52</td>
            </tr>
          </tbody>
        </table>

        <h1>Absorción</h1>
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
              <td>Microturbina Gas</td>
              <td>7326</td>
              <td>10437</td>
              <td>00:51:22</td>
            </tr>
            <tr>
              <td>Solar Termica</td>
              <td>4162</td>
              <td>5327</td>
              <td>00:24:34</td>
            </tr>
            <tr>
              <td>Energia Biomasa</td>
              <td>2002</td>
              <td>4135</td>
              <td>00:46:19</td>
            </tr>
            <tr>
              <td>Toneladas de refrigeracion que sumistran <br /> los chillers
                de adsorcion seleccionados es:
              </td>
              <td>4623</td>
              <td>3486</td>
              <td>00:31:52</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
export const selectStyle = () => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: '1px solid #DADCE0',
      height: '45px',
      width: '90%',
      marginBottom: '17px',
      background: 'none',
      padding: '5px 20px',
      fontSize: '16px',
      borderRadius: '10px',
      '&:hover': {
        borderColor: state.isFocused ? '#4DC3FA' : 'white'
      }
    }),
    menu: base => ({
      ...base,
      background: '#1F2739',
      color: 'white',
      borderRadius: 0,
      marginTop: 0
    }),
    menuList: base => ({
      ...base,
      padding: 0
    })
  }

  return customStyles
}

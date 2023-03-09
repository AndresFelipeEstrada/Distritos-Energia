
export const customStyles = {
  control: (base, state) => ({
    ...base,
    border: '1px solid #DADCE0',
    height: '55px',
    width: '112%',
    background: 'none',
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
  }),
  placeholder: base => ({
    ...base,
    color: 'white'
  })
}

export const selectOptios = [
  { label: '500', value: 500 },
  { label: '750', value: 750 },
  { label: '1000', value: 1000 }
]

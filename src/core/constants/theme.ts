const light =  {
    background: 'white',
    borderColor: 'black',
  }

const dark = {}

export function useAppTheme(mode: 'dark' | 'light') {
  const currentColors = mode === 'light' ? light : dark
  return currentColors
}

export default useAppTheme

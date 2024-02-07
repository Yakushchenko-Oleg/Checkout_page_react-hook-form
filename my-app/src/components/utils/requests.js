export const fetchCountries = async (setCountriesList) => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      if (!response.ok) throw new Error('The list of countries does not come from the server')
      const data = await response.json()
      setCountriesList(data)
    } catch (error) {
      console.log(error)
    }
  }
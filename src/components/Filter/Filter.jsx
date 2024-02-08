import { SearchField } from './Filter.styled'

export const Filter = ({ dataSearch }) => {
  
  const handleSearch = (e) => {
    const searchData = e.currentTarget.value
    dataSearch(searchData)
  }

  return (
      <SearchField type='search'
        onChange={handleSearch}></SearchField>
  )
}

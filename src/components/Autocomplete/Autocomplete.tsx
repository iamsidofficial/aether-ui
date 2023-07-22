import { AutocompleteProps } from "./Autocomplete.types"
import {
  StyledAutocomplete,
  StyledAutocompleteSuggestions,
  StyledAutocompleteOption
} from "./Autocomplete.styles"
import { Input } from ".."
import { useEffect, useState } from "react"

export const Autocomplete = ({ limit = 5, ...props }: AutocompleteProps) => {
  const [value, setValue] = useState("")
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    const debounce = setTimeout(() => {
      setSearchValue(value)
    }, 500)

    return () => clearTimeout(debounce)
  }, [value])

  const options = props.options
    ?.filter((option) => option.toLowerCase().includes(searchValue))
    .slice(0, limit)
    .map((option) => (
      <StyledAutocompleteOption onClick={() => setValue(option)}>
        {option}
      </StyledAutocompleteOption>
    ))

  return (
    <StyledAutocomplete>
      <Input
        placeholder={props.placeholder}
        value={value}
        setValue={setValue}
      />
      <StyledAutocompleteSuggestions>{options}</StyledAutocompleteSuggestions>
    </StyledAutocomplete>
  )
}

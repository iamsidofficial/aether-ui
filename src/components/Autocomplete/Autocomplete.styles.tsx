import styled from "@emotion/styled"
import { AutocompleteProps } from "./Autocomplete.types"
import { ComponentPropsWithRef } from "react"

export const StyledAutocompleteSuggestions = styled.div<
  ComponentPropsWithRef<"div">
>({
  display: "flex",
  flexDirection: "column",
  borderRadius: "0.3rem",
  backgroundColor: "#fff"
})

export const StyledAutocompleteOption = styled.div<
  ComponentPropsWithRef<"div">
>({
  "&:hover": {
    backgroundColor: "#ccc"
  }
})

export const StyledAutocomplete = styled.div<AutocompleteProps>({
  display: "flex",
  flexDirection: "column"
})

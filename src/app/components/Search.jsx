"use client"
import React from 'react'
import Button from './Button'
import SearchIcon from './SearchIcon'

const Search = ({onSearch, onClear}) => {
    const [inputValue, setInputValue] = React.useState('')
    const onClick = () => {
        onSearch(inputValue)
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        if(!e.target.value?.trim()) {
            onClear()
        }
    }
    const handleEnterSearch = (e)=>{
        if(e.key === 'Enter' && inputValue) {
            onSearch(inputValue)
        }
    }
  return (
    <div className="relative text-gray-600 ">
    <input type="search" name="serch"  value={inputValue} onKeyDown={handleEnterSearch} onChange={handleInputChange}  placeholder="Search" className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none"/>
    <Button onClick={onClick} disabled={!inputValue}>
     <SearchIcon/>
      </Button>
  </div>
  )
}

export default Search
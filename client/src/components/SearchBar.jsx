// SearchBar.jsx
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(keyword)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search anime..."
          className="w-full px-4 py-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r font-medium"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
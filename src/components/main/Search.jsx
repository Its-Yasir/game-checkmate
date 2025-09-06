import './Search.css'

export function Search(){
  return (
    <div className="search-box">
      <input type="text" className="search-input" placeholder="Search Game by its Name..." />
      <button className="search-btn">Search</button>
    </div>
  )
}
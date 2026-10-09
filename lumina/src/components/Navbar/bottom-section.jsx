import Left from "./left-section"
import Middle from "./Middle-section"
import Searchbar from "./searchbar"
import Right from "./Right-section"

const Bottom = () => {
  return (
    <div className="h-16 px-28 flex flex-row justify-between items-center border-b border-gray-200">
        < Left />
        <Middle />
        <Searchbar />
        <Right />
    </div>
  )
}

export default Bottom
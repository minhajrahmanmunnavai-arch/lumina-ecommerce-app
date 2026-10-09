const Searchbar = () => {
  return (
    <div className="bg-[#f5f5f4] py-1.5 px-2 rounded-[10px] flex justify-center items-center gap-3 cursor-pointer">
        <img className="h-4 w-4 object-cover" src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" />
        <input className="w-85 outline-0" type="text" placeholder="Search Items In Lumina" />
    </div>
  )
}


export default Searchbar
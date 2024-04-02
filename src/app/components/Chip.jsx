 const Chip = ({text}) => {
  return (
    <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
      <span className="">{text}</span>
    </div>
  )
}

export default Chip
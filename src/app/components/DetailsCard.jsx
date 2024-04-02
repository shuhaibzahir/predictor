
import Chip from "./Chip";
import Skelton from "./Skelton";
import Alert from "./Alert"
const DetailsCard = ({age, countries, gender , loading }) => {
    if (loading) {
      return <div className="my-3">
         <Skelton />
      </div>
    }
    if (!age &&!gender &&!countries.length) {
      return <div className="mt-3">
        <Alert text="Search to obtain gender, country, and age information: Rewrite this statement." />
      </div>
    }
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 mt-6 dark:border-gray-700">
    <div className="flex flex-col items-center p-10">
        <div className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Gender : <span className="text-md">{gender? gender : "Unknown"}</span>
        </div>
    
        <div className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Age : <span className="text-md">{age ? age : "Unknown"}</span>
        </div>
     
      <div className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Possible Countries
      </div>
      <div className="flex items-center  my-2 gap-2">
        {countries.map((i) => (
          <Chip key={i} text={i} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default DetailsCard
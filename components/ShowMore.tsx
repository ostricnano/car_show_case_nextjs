"use client"
import { showMoreProps } from "@types"
import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton"
import { updateSearchParams } from "@utils"

const ShowMore = ({pageNumber, isNext, setLimit }: showMoreProps) => {
  //const router = useRouter()
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    // const newPathName = updateSearchParams("limit", `${newLimit}`);

    // router.push(newPathName)

    setLimit(newLimit)
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {
        !isNext && (
          <CustomButton 
            title="Show More"
            type="button"
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={handleNavigation}
          />
        )
      }
      
    </div>
  )
}

export default ShowMore
import { useState, useEffect } from "react"

const Output = () => {
   const [layout, setLayout] = useState("<div></div>")
   useEffect(() => {
      const getEmailLayout = async () => {
         await fetch("/api/templates/getEmailLayout", {
            method: "GET",
            headers: {
               "Content-Type" : "application/json"
            }
         }).then(res => res.json())
         .then(data => setLayout(data.data))
      }
      getEmailLayout()
   }, [])
  return (
    <div className="col-span-4 flex justify-center items-center px-28 py-4 border-r border-gray-500">
      <div className="bg-white h-full w-full" dangerouslySetInnerHTML={{__html : layout}}></div>
    </div>
  )
}

export default Output
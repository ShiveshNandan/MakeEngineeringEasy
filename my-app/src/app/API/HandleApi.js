import axios from "axios"

const URL = process.env.NEXT_PUBLIC_URL 

const allCourses = async (setCourses) => {
    try {
        const response = await axios.get(URL)
        setCourses(response.data)
    } catch (error) {
        console.error("Error Occured : ",error)
    }
}


export {allCourses}
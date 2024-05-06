import axios from "axios"

const URL = "https://main-project-4ph5.vercel.app/" 

const allCourses = async (setCourses) => {
    try {
        const response = await axios.get(URL)
        setCourses(response.data)
    } catch (error) {
        console.error("Error Occured : ",error)
    }
}


export {allCourses}
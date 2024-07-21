import axios from "axios"

const URL = process.env.NEXT_PUBLIC_URL 

// const allCourses = async (setCourses) => {
//     try {
//         const response = await axios.get(URL)
//         setCourses(response.data)
//     } catch (error) {
//         console.error("Error Occured : ",error)
//     }
// }

const CSECourses = async (setCourses,id) => {
    try {
        const response = await axios.post(`${URL}/cse`,{id})
        setCourses(response.data)
    } catch (error) {
        console.error("Error Occured : ",error)
    }
}
const ITCourses = async (setCourses,id) => {
    try {
        const response = await axios.post(`${URL}/it`,{id})
        setCourses(response.data)
    } catch (error) {
        console.error("Error Occured : ",error)
    }
}
const ECECourses = async (setCourses,id) => {
    try {
        const response = await axios.post(`${URL}/ece`,{id})
        setCourses(response.data)
    } catch (error) {
        console.error("Error Occured : ",error)
    }
}

const AddUser = async (id,email,username) => {
    try {
        const response = await axios
        .post(`${URL}/user`,{id,email,username});
        // console.log(id,email,username);
    } catch (error) {
        console.log(error);
    }
}

export {CSECourses, ITCourses, ECECourses, AddUser}
// export {allCourses, CSECourses, ITCourses, ECECourses}
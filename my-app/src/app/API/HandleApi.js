import axios from "axios"

const URL = process.env.URL

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

const AddMessage = async (message,setmessage,email,setemail,username,setusername,setloading) => {
    try {
        const response = await axios
        .post(`${URL}/message`,{message,email,username});
        setmessage("")
        setemail("")
        setusername("")
        setloading(false)
        return(
            false
        )
        
    } catch (error) {
        console.log(error);
    }
}

export {CSECourses, ITCourses, ECECourses, AddUser, AddMessage}
// export {allCourses, CSECourses, ITCourses, ECECourses}
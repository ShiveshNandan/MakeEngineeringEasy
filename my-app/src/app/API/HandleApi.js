import axios from "axios"

const NURL = process.env.NEXT_PUBLIC_URL
// console.log(NURL)

// const allCourses = async (setCourses) => {
//     try {
//         const response = await axios.get(NURL)
//         setCourses(response.data)
//     } catch (error) {
//         console.error("Error Occured : ",error)
//     }
// }

const CSECourses = async (setCourses,id) => {
    try {
        const response = await axios.get(`${NURL}/cse`,
            {headers : {
                "matched" : id
            }}
        )
        setCourses(response.data)
    } catch (error) {
        console.error("Error Occured : ",error)
    }
}
const ITCourses = async (setCourses,id) => {
    try {
        const response = await axios.get(`${NURL}/it`,
            {headers : {
                "matched" : id
            }}
        )
        setCourses(response.data)
    } catch (error) {
        console.error("Error Occured : ",error)
    }
}
const ECECourses = async (setCourses,id) => {
    try {
        const response = await axios.get(`${NURL}/ece`,
            {headers : {
                "matched" : id
            }}
        )
        setCourses(response.data)
    } catch (error) {
        console.error("Error Occured : ",error)
    }
}

const AddUser = async (id,email,username) => {
    try {
        const response = await axios
        .post(`${NURL}/user`,{id,email,username});
    } catch (error) {
        // console.log(error);
    }
}

const AddMessage = async (message,setmessage,email,setemail,username,setusername,setloading) => {
    try {
        const response = await axios
        .post(`${NURL}/message`,{message,email,username});
        setmessage("")
        setemail("")
        setusername("")
        setloading(false)
        return(
            false
        )
        
    } catch (error) {
        // console.log(error);
    }
}

export {CSECourses, ITCourses, ECECourses, AddUser, AddMessage}
// export {allCourses, CSECourses, ITCourses, ECECourses}
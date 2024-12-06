import axios from "axios"
import Cookies from 'universal-cookie';


const NURL = process.env.NEXT_PUBLIC_URL
const AuthURL = process.env.NEXT_PUBLIC_AuthURL
const cookies = new Cookies();
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
        throw error;
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
        throw error;
    }
}

const tryLogin = async (email,password,setEmail,setPassword,setloadingBtn) => {
    try {
        const response = await axios
        .post(`${AuthURL}/login`,{email,password});
        setEmail("")
        setPassword("")
        setloadingBtn(false)
        if(response){
            cookies.set('myCat', response.data.token);
            // console.log(cookies.get('myCat'))
            return true;
        }
    } catch (error) {
        throw error;
    }
}

const tryRegister = async (email,password,username,setEmail,setPassword,setName,setloadingBtn) => {
    try {
        const response = await axios
        .post(`${AuthURL}/register`,{email,password,username});
        setEmail("")
        setPassword("")
        setName("")
        setloadingBtn(false)
        return true        
    } catch (error) {
        // console.log(error)
        throw error;
    }
}

const verify = async () => {
    try {
        const token = await cookies.get("myCat")
        const response = await axios
        .post(`${AuthURL}/verify`,{token});
        if (response.data.message === null) {
            cookies.remove("myCat");
            throw error;
        }else{
            return response.data.message;        
        }
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const verificationEmail = async (to,userName) => {
    try {
        const response = await axios.post(`${AuthURL}/send-verify-email`,{to,userName})
        if (response) {
            return true;
        }
    } catch (error) {
        throw error;
    }
} 

const verified = async (secret,to) => {
    try{
        const response = await axios.put(`${AuthURL}/verifing`,{secret,to});
        console.log(response);

    }catch(error){
        return error;
    }
}

export {CSECourses, ITCourses, ECECourses, AddUser, AddMessage, tryLogin, tryRegister, verify, verificationEmail, verified}

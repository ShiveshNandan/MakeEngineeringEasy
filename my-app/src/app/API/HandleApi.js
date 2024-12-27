import axios from "axios"
import Cookies from 'universal-cookie';


const NURL = process.env.NEXT_PUBLIC_URL
const AuthURL = process.env.NEXT_PUBLIC_AuthURL
const GAuthURL = process.env.NEXT_PUBLIC_GAuthURL
const cookies = new Cookies();


const CSECourses = async (setCourses,id) => {
    try {
        const response = await axios.get(`${NURL}/cse`,
            {headers : {
                "matched" : id
            }}
        )
        setCourses(response.data)
    } catch (error) {
        throw error;
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
        throw error;
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
        throw error;
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

const tryLogin = async (email,password,isVerified,setEmail,setPassword,setloadingBtn) => {
    try {
        const response = await axios
        .post(`${AuthURL}/login`,{email,password,isVerified});
        setEmail("")
        setPassword("")
        setloadingBtn(false)
        if(response){
            cookies.set('myCat', response.data.token);
            return true;
        }
    } catch (error) {
        throw error;
    }
}

const tryRegister = async (email,password,username,isVerified,setEmail,setPassword,setName,setloadingBtn) => {
    try {
        const response = await axios
        .post(`${AuthURL}/register`,{email,password,username,isVerified});
        setEmail("")
        setPassword("")
        setName("")
        setloadingBtn(false)
        // console.log(response);
        return true        
    } catch (error) {
        throw error;
    }
}

// to check if there is any token if yes is it a valid token 
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
        if(response) return true;
        else throw error;
    }catch(error){
        throw error;
    }
}

const forgetPasswordEmail = async (to) => {
    try {
        const response = await axios.post(`${AuthURL}/send-recovery-email`,{to})
        if (response) {
            return true;
        }
    } catch (error) {
        throw error;
    }
}

const passwordRecovered = async (secret,to,password) => {
    try{
        const response = await axios.put(`${AuthURL}/recovering`,{secret,to,password});
        if(response) return true;
        else throw error;
    }catch(error){
        throw error;
    }
}


const getInfo = async (gtoken) => {
    try{
        const response = await axios.get(`${GAuthURL}`,{
            headers: {
              Authorization: `Bearer ${gtoken}`,
            }
        });
        if(response) return response;
        else throw error;
    }catch(error){
        throw error;
    }
}

const bioChange = () => {

}
export {CSECourses, ITCourses, ECECourses, AddUser, AddMessage, tryLogin, tryRegister, verify, verificationEmail, verified, forgetPasswordEmail,passwordRecovered, getInfo, bioChange}

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase/firebase.config"

export const registerUser = async(email, password)=>{
    const result = await createUserWithEmailAndPassword(auth, email, password)
    return result.user

}

export const loginUser = async(email, password)=>{
    const result = await signInWithEmailAndPassword(auth, email, password)
    return result.user

}

export const logoutUser = async()=>{
    return await signOut(auth)
}
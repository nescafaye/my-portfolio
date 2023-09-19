import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../config/firebase"
 
const handleSubmit = (testdata) => {
    const ref = collection(firestore, "test_data") // Firebase creates this automatically
 
    let data = {
        name: testdata
    }
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit
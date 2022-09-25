import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection) =>{
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState()

  useEffect(()=>{
    let ref = projectFirestore.collection(collection)

    const unsubscribe = ref.onSnapshot((snapshot)=>{
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id:doc.id})
      })
    }, (error)=>{
      console.log(error);
      setError("Could not fetch the data")
    })

    //unsubscribe on unmount
    return () => unsubscribe()
  }, [collection])


  return {documents, error}
}
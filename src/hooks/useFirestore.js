import { logDOM } from '@testing-library/react'
import { useEffect, useReducer, useState } from 'react'
import {projectFirestore, timeStamp} from '../firebase/config'

let initialState = {
  document:null,
  isPending:false,
  error:null,
  success:null
}

const firestoreReducer = (state, action) =>{
  switch(action.type){
    case 'IS_PENDING':
      return {isPending:true, document:null, success: false, error:null}
    case 'ADDED_DOCUMENT':
      return {isPending:false, document:action.payload, success: true, error:null}
    case 'DELETED_DOCUMENT':
      return {isPending:false, document:null, success: true, error:null}
    case 'ERROR':
      return {isPending:false, document:null, success: false, error:action.payload}
    default:
      return state
  }
}

const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  //collection
  const ref = projectFirestore.collection(collection)

  //only dispatch if not cancelled
  const dispatchIfNotCancelled = (action)=>{
    // if(!isCancelled){
      dispatch(action)
    // }
  }

  //add a document 
  const addDocument = async (doc) => {
    dispatch({type: 'IS_PENDING'})

    // console.log('hohk',doc);
    try{
      const createdAt = timeStamp.fromDate(new Date())
      const addedDocument = await ref.add({...doc, createdAt})
      dispatchIfNotCancelled({type:'ADDED_DOCUMENT', payload:addedDocument})
    }
    catch(err){
      // console.log(err);
      dispatchIfNotCancelled({type:'ERROR', payload:err.message})
    }
  }

  //delete document 
  const deleteDocument = async (id) =>{
    dispatch({type: "IS_PENDING"})

    try{
      await ref.doc(id).delete()
      dispatchIfNotCancelled({type:"DELETED_DOCUMENT"})
    }catch(err){
      dispatchIfNotCancelled({type:"ERROR", payload:"Could not delete"})
    }
  }

  useEffect(()=>{
    return () => setIsCancelled(true)
  },[])

  return { addDocument, deleteDocument, response}
}

export {useFirestore}
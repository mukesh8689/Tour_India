import createDataContext from './createDataContext';
import trackerApi from '../Api/tracker';

const taskReducer=(state,action)=>{
 
    switch(action.type){

         case 'get_task':
             return action.payload;  
             
         case 'get_image':
            return action.payload;    
        default:
            return state;
    }



};

const fetchUserImage =(dispatch)=>{

    return async ()=>{
  
        try{
      const response=await trackerApi.get('/tasks/me');
      dispatch({type:"get_task",payload:response.data});
      
        }
        catch(err)
        {
          dispatch({type: 'add_error', payload:"Something went wrong"});
        }
        }

};

const getAllImages=(dispatch)=>{
 
  return async ({imagess})=>{

    try{
   const response=await trackerApi.post('/tasks/muk',{imagess});
   dispatch({type:"get_image",payload:response.data});
 
    }
    catch(err)
{
  dispatch({type: 'add_error', payload:"Something went wrong"})

}

 }
  }




export const {Provider,Context}=createDataContext(
    taskReducer,{fetchUserImage,getAllImages},[]

);
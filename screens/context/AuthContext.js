import createDataContext from './createDataContext';
import trackerApi from '../Api/tracker';
import {AsyncStorage} from 'react-native';
import {navigate} from '../NavigationRef';

const authReducer=(state,action)=>{

switch (action.type){

    case 'add_error':
    return {...state,errorMessage: action.payload};
    
    case 'signup':
        return {errorMessage:'',token: action.payload};

     case 'signin' :
         return {errorMessage:'',token: action.payload};   

      case 'clear_error_message':
          return {...state,errorMessage:''};   
      case 'signout' :
          return {token:null,errorMessage:''}   

     case "add_image" :
       return {errorMessage:''};

       case "get_images":
         return{errorMessage:''};
        
    
 default:
     return state;


}

};



const trylocalSignin=dispatch=>async ()=>{

const token =await AsyncStorage.getItem('token');
if(token)
{
    dispatch({type:'signin',payload: token})
    navigate('TaskList');

}
else{
    navigate('Signup');
}



}

const clearErrorMessage= dispatch=>()=>{


    dispatch({type : 'clear_error_message'});
}

const signup=(dispatch)=>{
  return  async ({email,password})=>{

    try{

        const response =await trackerApi.post('./signup',{email,password});
        await AsyncStorage.setItem('token',response.data.token);
        dispatch({type: 'signup' ,payload:response.data.token});

        navigate('Gallery');

    }
    catch(err){
      console.log(err);
      dispatch({type: 'add_error' ,payload:'something went wrong'});

    }

    // make api request to signup with that email and password

    //if we sign up,modify our state ,and say we are authenticated

    //if signing up fails,we probably need to reflect an errror message somewhere
  }
};


const signin=(dispatch)=>{

return  async ({email,password})=>{

// try to signin
// handle success by updating state
// handle failure by showing error message

try{
      const response=await trackerApi.post('./signin',{email,password});
      await AsyncStorage.setItem('token',response.data.token);
       dispatch({type: 'signin', payload: response.data.token});
       navigate('Gallery');

}
catch(err)
{
  dispatch({
    type:'add_error',
    payload:"Something went wrong"
  });


}
}
};



const uploadimage=(dispatch)=>{
 return async ({data,name})=>{

  try{
    await trackerApi.post('/tasks',{imageUri:data.url,name});
    dispatch({type:'add_image'});
  }
  catch(err)
  {
    dispatch({type: 'add_error', payload:"Something went wrong"})
   
  }
 }

}


const signout=(dispatch)=>{
 
    return  async ()=>{

          await AsyncStorage.removeItem('token');
          dispatch({type:'signout'});
          navigate('Second');
          
    }
};


export const {Provider,Context}=createDataContext(authReducer,
    {signin,signup,signout,clearErrorMessage,trylocalSignin,uploadimage},
    {token:null,errorMessage: ''});
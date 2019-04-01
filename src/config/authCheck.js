



const auth={
    isAuth(){

    if(sessionStorage.getItem('loginstatus')==1)
         return true

        else
            return false


    }



}

export default auth

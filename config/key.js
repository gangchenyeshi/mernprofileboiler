if(process.env.NODE_ENV==="production"){  //if out application is in production mode
    module.exports=require('./pro');      // then export as /pro or production mode module
}else {
    module.exports=require('./dev');      // else export as /dev or developer mode module
}
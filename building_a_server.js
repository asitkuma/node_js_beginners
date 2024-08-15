const http_req_handeler=require('http') // http module is used for handelling req and response.
// createserver function basically takes function as a parameter and takes an arrow function



function fun1(req,resp)
{
    resp.write("<h1> yes i am still here.</h1>")
    resp.end()
}

// http_req_handeler.createServer((req,res)=>
// {
//     //req is to the data which comes from the front end here we have to separate and then through the help of response we nned to sent it.
//     res.write("<h1>this is coming from dummy server.</h1>")
//     res.end() //here u are telling that heiii node js please stop here.
// }).listen(4500);
http_req_handeler.createServer(fun1).listen(4500)
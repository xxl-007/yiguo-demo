import http from "../utils/http";
import API from "../api"

// import 'whatwg-fetch'

//请求首页数据
export function getHomeData(){
    return new Promise((resolve,reject)=>{
        // fetch(API.HOME_API)
        // .then(response => {
        //     return response.json();
        // })
        // .then(result => {
        //     this.setState({homedata: result.data});
        //     console.log(result.data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })

        http({
            url:API.HOME_API,
            method:"POST",
            data:{
                body:{
                    homePageId:"875ec381-1ab5-4a65-8431-e10f2360a5dc",
                    operationType:1,
                    pageIndex:0,
                    previewTime:"2018/11/30 09:47:07",
                    publishTime:"2018/11/30 09:47:07"
                },
                head:{
                    cityCode:"512",
                    cityId:"0540d74e-0ffb-4a3a-ab79-ec590dd49947",
                    districtId:"29f9cd72-a77e-4fe1-b613-3af4298380a9",
                    loginToken:"",
                    version:"h5"      
                 }
            }
        })
        .then(({data})=>{
            resolve(data);
        })
        .catch(()=>{

        })
      
    }) 
}



   
        
        

   
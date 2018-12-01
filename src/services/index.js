import http from "../utils/http";
import API from "../api"

// import 'whatwg-fetch'

//请求首页数据
export function getHomeData() {
    return new Promise((resolve, reject) => {
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
            url: API.HOME_API,
            method: "POST",
            data: {
                body: {
                    homePageId: "875ec381-1ab5-4a65-8431-e10f2360a5dc",
                    operationType: 1,
                    pageIndex: 0,
                    previewTime: "2018/11/30 09:47:07",
                    publishTime: "2018/11/30 09:47:07"
                },
                head: {
                    cityCode: "512",
                    cityId: "0540d74e-0ffb-4a3a-ab79-ec590dd49947",
                    districtId: "29f9cd72-a77e-4fe1-b613-3af4298380a9",
                    loginToken: "",
                    version: "h5"
                }
            }
        })
        .then(({ data }) => {
            resolve(data);
        })
        .catch(() => {

        })

    })
}

// 请求产品列表数据
// city
export function getProductList() {
    return new Promise((resolve, reject) => {
        http({
            url: API.PRODUCTLIST_API,
            method: "POST",
            data: {
                Head: {
                    CityCode:"1",
                    CityId: "312d0556-0671-4f2e-8bac-7b8873b5a03a",
                    DeviceId:"599445fdd9e0616bfcc602718e2b2341",
                    DistrictId: "825dbb3c-015a-4a19-a7be-a6bfe4aa0fe0",
                    //LoginToken:"",
                    //Token:"",
                    //MobileOS:"Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1"
                },
                Body: {
                    //CategoryCode:"",
                    CategoryId:"maierfuyi",
                    Keyword:"",
                    PageIndex:1,
                    //Sort:4
                }
            }
        })
        .then(({ data }) => {
            console.log("产品列表发送");
            resolve(data);
        })
        .catch(() => {

        })
    })
}







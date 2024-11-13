import axios from 'axios';
import BASE_URL from './BaseUrl';
const PostService=axios.create({baseURL:BASE_URL,});
 
PostService.interceptors.request.use(
      (config)=>
          {
              const token = localStorage.getItem('token');
              if(token){
                  config.headers.Authorization=`Bearer ${token}`;
              }
              return config;
          },
          (error)=>{
              return Promise.reject(error)
          }
  ); 
   //---------------------------------Post by Cateeegory------------------------
   const getByCategory = async (category) => {
    try {
    const response = await PostService.get(`/api/v1/post/postByCategory/${category}`);
    console.log(response.data);
    return (response.data);
    }catch (error) {
      throw (error);
    }
    };
   //---------------------------------Each post data------------------------
   const fetchEachPostData = async (postId) => {
    try {
    const response = await PostService.get(`/api/v1/post/eachPost/${postId}`);
    console.log(response.data);
    return (response.data);
    }catch (error) {
      throw (error);
    }
    };
    export default{
        PostService,
        getByCategory,
        fetchEachPostData,
    }
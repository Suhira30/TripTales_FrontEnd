import axios from 'axios';
import BASE_URL from './BaseUrl';
const ReviewService=axios.create({baseURL:BASE_URL,});
 
ReviewService.interceptors.request.use(
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
    //---------------------------------Each Review ------------------------
    const fetchReview = async (postId) => {
        try {
        const response = await ReviewService.get(`/api/v1/review/byPost/${postId}`);
        console.log(response.data);
        return (response.data);
        }catch (error) {
          throw (error);
        }
        };
    //---------------------------------Add Review ------------------------
       const addReview = async (postId,description) => {
        try {
        const response = await ReviewService.post(`/api/v1/review/add`,{
            reviewTo: postId,
            description: description
        });
        console.log(response.data);
        return (response.data);
        }catch (error) {
          throw (error);
        }
        };
        export default{
            ReviewService,
            fetchReview,
            addReview
        } 
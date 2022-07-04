import axios from "axios";

function setInterceptors() {
    axios.interceptors.request.use(request => {
        const jwtToken = window.localStorage.getItem('jwt_token')
        if (jwtToken) {
            request.headers['Authorization'] = jwtToken;
        }
        return request;
    }); 
}

export default setInterceptors;
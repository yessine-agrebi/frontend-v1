import axios from "axios";
import { useSession } from "next-auth/react";

export default axios.create({
    baseURL: "http://localhost:8000/api/v1",
    withCredentials: true
})

// Api.interceptors.request.use(
//     async (config) => {
//       const { data: session } = useSession();
//       if (session?.backendTokens.accessToken) {
//         config.headers["Authorization"] = `Bearer ${session.backendTokens.accessToken}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

// export default Api;
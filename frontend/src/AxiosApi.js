import axios from "axios"
const baseURL = "http://127.0.0.1:8000/api/"
export const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: "JWT " + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
        accept: "application/json"
    }
})
// getting the refresh token when the access token time ends
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const originalRequest = error.config
        if (
            error.response.status === 401 &&
            originalRequest.url === baseURL + "token/refresh/"
        ) {
            window.location.href = "/login/"
            return Promise.reject(error)
        }
        if (
            error.response.data.code === "token_not_valid" &&
            error.response.status === 401 &&
            error.response.status === "Unauthorized"
        ) {
            const refresh_token = localStorage.getItem("refresh_token")
            if (refresh_token) {
                const tokenParts = JSON.parse(atob(refresh_token.split(".")[1]))
                const now = Math.ceil(Date.now() / 1000)
                console.log(tokenParts.exp)
                if (tokenParts.exp > now) {
                    return axiosInstance
                        .post("token/refresh/", { refresh: refresh_token })
                        .then((response) => {
                            localStorage.setItem(
                                "access_token",
                                response.data.access
                            )
                            localStorage.setItem(
                                "refresh_token",
                                response.data.refresh
                            )
                            axiosInstance.defaults.headers["Authorization"] =
                                "JWT " + response.data.access
                            originalRequest.defaults.headers["Authorization"] =
                                "JWT " + response.data.access
                            return axiosInstance(originalRequest)
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                } else {
                    console.log("Refresh Token is expired", tokenParts.exp, now)
                    window.location.href = "/login/"
                }
            } else {
                console.log("Refresh token not available")
                window.location.href = "/login/"
            }
        }
        return Promise.reject(error)
    }
)

import { checkRole } from "./requests"
export const isAdmin = async () => {
    await checkRole() //axios
    .then((r) => {
        if (r.data.role === "ADMIN") {
            return true;
        }
    })
    .catch((e) => {
        console.log(e)
        return false;
    })
}
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

export function hmsToSecondsOnly(str) {
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}

export  function secondsToHMS(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    
    var minutesStr = minutes < 10 ? "0" + minutes : minutes.toString();
    var secondsStr = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds.toString();
    
    return minutesStr + ":" + secondsStr;
  }
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";

export const setlogEvent = (event, properties) => {
    try { 
        logEvent(analytics, event, properties); 
    }
    catch(err){
        console.log("error");
    }
}
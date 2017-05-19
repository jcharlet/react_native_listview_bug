
import moment from "moment";

export const formatDateToDisplay = (dateTime) =>{
    if (moment(dateTime).format("YYYY MM DD") == moment().format("YYYY MM DD")) {
        return "Today"
    }
    return moment(dateTime).format("MMMM Do");
}
export const formatTimeToDisplay = (dateTime) => {
    return moment(dateTime).format("HH:mm");
}

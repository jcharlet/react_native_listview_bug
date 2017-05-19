
import {SHOW_PREVIOUS_HACK, SHOW_NEXT_HACK, REMOVE_HACK} from "../../actions/actionTypes";
import * as storageService from "../../modules/storage/storageService";

export const removeRide = (date: string, distance: number) => {

    return (dispatch) => {
       return storageService.removeRide(date)
            .then((totalDistance) => {
                dispatch({type: REMOVE_HACK, payload: date});
            });
    }
}

export const showPreviousRide = function () {
    return {type: SHOW_PREVIOUS_HACK};
};
export const showNextRide = function () {
    return {type: SHOW_NEXT_HACK};
};

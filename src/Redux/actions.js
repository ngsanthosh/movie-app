export const ADD_MOVIES_FAVORITE = "ADD_MOVIES_FAVORITE";
export const REMOVE_MOVIES_FAVORITE = "REMOVE_MOVIES_FAVORITE";

export function addmovietofav(mov) {
  console.log("addmovietofav is called");
  return {
    type: ADD_MOVIES_FAVORITE,
    mov,
  };
}
export function removemoviefav(mov) {
  console.log("removemoviefav is called");
  return {
    type: REMOVE_MOVIES_FAVORITE,
    mov,
  };
}

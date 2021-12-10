 export const initialState={
      user:null,
      playlists:[],
      playing:false,
      item:null,
      token: 'BQDMenc1XFN_I7lbM9uyoxEym4XlS90EOkFKW2AmLfZcMA3CixgnahdBvZJCesXgU7tr1ouWl1TZBXeUriyFHimoUUPAnU6m5Q8YRj8p9ZClBp3AeIpRr_-W72T5b-Bmw2JZK0Fa6XKJ2qCMERIYMxOLxrbw-Aixya8EBxV25siWPa5T',
 }
 export const reducer=(state,action)=>{
console.log(action);
switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user:action.user
        }
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token,
        }
        default:
            return state;
}
 }

 export default reducer;
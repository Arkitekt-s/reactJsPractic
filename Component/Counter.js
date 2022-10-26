import{createSlice} from "@reduxjs/toolkit";
//creat slice means creat a part of store with state and reducer and action in it
export const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0,
    },
    //creat reducer for change state
    reducers:{
        increment:(state)=>{
            state.count+=1;

        },
        decrement:(state)=>{
            state.count-=1;
        },
        incrementByAmount:(state,action)=>{
            state.count+=action.payload;
    }
}
});
//export action for use in component for each reducer
export const {increment,decrement,incrementByAmount}=counterSlice.actions;
export default counterSlice.reducer;
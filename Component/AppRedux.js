
import React ,{Component} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {decrement, increment, incrementByAmount} from "./Counter";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bootstrap.css';





 function AppRedux (Component) {
    const{count}=useSelector((state)=>state.counter);
    //other version of code
     // const count=useSelector((state)=>state.counter.count);
     const dispatch=useDispatch();
    return(
        <div>
            <h1>Count:{count}</h1>
            <Button onClick={()=>dispatch(increment())}>+ INCREMENT</Button>
            <Button onClick={()=>dispatch(decrement())}>- DECREMENT</Button>
            <Button onClick={()=>dispatch(incrementByAmount(300))}>+300 INCREMENT</Button>
            {/*//incromen animation*/}




        </div>
    )
}
export default AppRedux;
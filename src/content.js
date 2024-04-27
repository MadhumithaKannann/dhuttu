
import React from 'react'
import { useState } from 'react';


const Content = () => {

    function handleNameChange() {
        const names = ["earn", "grow", "give"]
        const int = Math.floor(Math.random() * 3);
        steMoney(names[int]);
    }
    const handleClick = (e) => {
        console.log('Event ->>', e.target.innerText)
    }
    const handleClick2 = (name) => {
        console.log(`Thanks for the support ${name}`)

    }

    function namee(){
        console.log('Hi name state has been executed!');
    }

    const [count, setcount] = useState(100);
    const [name, setName] = useState(()=>namee());

    function incrementFunc() {
        setcount(previousCount => previousCount + 1);

    }
    function decrementFunc() {
        setcount(previousCount => previousCount - 1)
    }

    const [money, steMoney] = useState("earn");
    // function handleMoneyByState(){
    //     steMoney(prevMoney=> handleNameChange())
    
    // }

    return (
        <main>
            {/* <p onDoubleClick={() => handleClick2('Bala')}> Let's {handleNameChange()} money</p> */}
            <p> Let's {money} money</p>
            <button onClick={() => handleNameChange()}>subscribe</button>
            
            <button onClick={decrementFunc}>-</button>
            <span>{count}</span>
            <button onClick={incrementFunc}>+</button>
        </main>

    )
}

export default Content
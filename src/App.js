import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import './App.css';
import { useState } from "react";
import { AddItem } from "./addItem";

function App() {
    // function handleNameChange(){
    //   const names =["earn","grow","give"]
    //   const int = Math.floor(Math.random()*3);
    //   return names[int]
    // }

    // const [items, setItems] = useState(
    //     [
    //         {
    //             id: 1,
    //             checked: false,
    //             name: "practice Coding"
    //         },
    //         {
    //             id: 2,
    //             checked: true,
    //             name: "practice Cricket"
    //         },

    //         {
    //             id: 3,
    //             checked: true,
    //             name: "practice Chess"
    //         }



    //     ]
    // )
   const [items,setItems]= useState(localStorage.getItem("todo_list") ? JSON.parse(localStorage.getItem("todo_list")):[]);

    const [newItem, setNewItem] = useState('')

    const handleCheck = (id) => {
        debugger;
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems);
        localStorage.setItem("todo_list", JSON.stringify(listItems))
        // console.log(`id ${id}`)
    }

    const handleDelete = (id) => {
        debugger;
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems);
        localStorage.setItem("todo_list", JSON.stringify(listItems))
        // console.log(`id ${id}`)
    }
    const handleSubmit = (e) => {
        debugger;
        e.preventDefault()
        if (!newItem) return
        console.log('newItem->>>', newItem)
        setNewItem('')
        addNewItem(newItem)

    }

    const addNewItem = (itemName)=>{
       
        const id = items.length? items[items.length-1].id+1:1
       
        const newItem = {id:id, checked:false, name:itemName};

        const newItems = [...items, newItem];

        setItems(newItems);

        localStorage.setItem("todo_list", JSON.stringify(newItems))

    }

    return (
        // <div >
        //  Subscribe to dhuttu
        //  <p>lets {handleNameChange()} money</p>
        // </div>

        <div className="App">
            <Header title="Madhu's First App" />
            <AddItem newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit} />
            <Content items={items}
                setItems={setItems}
                handleCheck={handleCheck}
                handleDelete={handleDelete} />
            <Footer length={items.length}
            />
        </div>
    );
}

export default App;

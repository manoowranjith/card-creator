import "./CardCreator.css"
// import Card from "../Card/Card";
import React, {useState} from "react";
// var cardArray=[
//     {
//         name:"manoow"
//     },
//     {
//         name:"ranjith"
//     }
// ];
function CardCreator()
{
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [contactno, setContactno] = useState();
    const [image, setImage] = useState();
    const [cardArray, setCardArray] = useState([]);
    const inputList = [
        {
            type : "text",
            label : "Please Enter your name",
            placeholder : "Your Name",
            id : 'name'
        },
        {
            type : "email",
            label : "Please Enter your email",
            placeholder : "Your Email",
            id : 'email',
        },
        {
            type : "text",
            label : "Enter your Contact Number",
            placeholder : "Your Contact Number",
            id : 'contactno'
        },
        {
            type : "text",
            label : "Paste your Profile Picture URL",
            placeholder : "Profile Picture URL",
            id : 'image'
        },
    ]

    function handelChange(stateName,event)
    {
        if(stateName === "name")
            setName(event.target.value)
        else if(stateName === "email")
            setEmail(event.target.value)
        else if(stateName === "contactno")
            setContactno(event.target.value)
        else if(stateName === "image")
            setImage(event.target.value)
    }

    function createCard()
    {
        var inputReset = document.getElementsByClassName("manoow");
        for(var i=0; i< inputReset.length; i++){
            inputReset[i].value = "";
        }
        const template ={
            name:name,
            email:email,
            contactno:contactno,
            image:image
        }
        setCardArray( oldArray => [...oldArray, template]);
        setName("")
        setEmail("")
        setContactno("")
        setImage("")
    }

    function handler(index)
    {
        var newArray =[];
        for(let i=0;i<index;i++)
        {
            newArray.push(cardArray[i])
        }

        for(let i=index+1;i<cardArray.length;i++)
        {
            newArray.push(cardArray[i])
        }
        setCardArray(newArray);
        console.log(cardArray)
    }

    const renderCard = (card, index) => {
        return (
            <div className="card">
            <img className="cardImg" src={card.image} alt="" srcSet="" />
            <p>Name : {card.name}</p>
            <p>Email : {card.email}</p>
            <p>Contact : {card.contactno}</p>
            <button onClick={() => handler(index)} className="cardBtn">Delete</button>          
        </div>
        );
      };

    return (
        <div className="CardCreator">
            <div className="inputFields">
                <h1>Card Creator</h1>
                {
                    inputList.map(attr =>
                        <div>
                            <label>{attr.label}</label>
                            <input className="manoow" onChange={(e)=>handelChange(attr.id,e)} id={attr.id} placeholder={attr.placeholder} type={attr.type}/>
                        </div>
                        )
                }
                <button onClick={createCard} id="create">Create Card</button>
            </div>
            <div className="cardContainer">
                {
                    cardArray.map(renderCard)
                }
            </div>
        </div>
      );
}

export default CardCreator;
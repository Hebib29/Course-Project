import React from 'react'
import '../Styles/Raportlist.css';
import Screen1 from '../assets/Screen1.jpg';
import Gadcet from '../assets/Gadcet.png'
import Screnimage from '../assets/Screnimage.jpg';
import Figma from '../assets/Figma.jpg';
import Bitcoin from '../assets/Bitcoin.jpg';
import Sajib from '../assets/Sajib.jpg';
import Jack from '../assets/Jack.png'
import Instagram from '../assets/Instagram.jpg';
import UHUT from '../assets/UHUT.jpg';
import Bank from '../assets/Bank.png';



const lists = [
    {
        name: 'NAME/CLİENT',
        Date: 'Date',
        Typeorder: 'ORDERS/TYPE',
        Amount: 'AMOUNT',
        Sts: 'STATUS',
        Act: 'ACTION',
        
    },
];
    const lists2 = [
        {
            image: Gadcet,
            Text1: 'Gadcet Gallery LTD',
            Text2: 'İnv: MGL5244874',
            Time: '14 Apr 2022',
            TimeWork: 'at 08:00 PM',
            Order1: 20,
            Amt: "$420.84",
            Button: 'Pending',
            Act1: '-',
          
            
           
        },
    ];
    
    const lists3 = [
        {
            image3: Figma,
            Figma: 'Figma Subscription',
            Textinv: 'İnv: MGL524250',
            Time2: '14 Apr 2022',
            TimeWork2: 'at 08:00 PM',
            Order2: '01',
            Amt2: "$244.80",
            Button2: 'Paid',
            Act2: '...',
           
        },
    ];
    
    const lists4 = [
        {
            image4: Jack,
            Jacks: 'Jack Dawson Eric',
            Textinv3: 'İnv: MGL524874',
            Time4: '14 Apr 2022',
            TimeWork4: 'at 09:00 AM',
            Order4: '02',
            Amt3: "$200.00",
            Button4: 'UnPaid',
            Act3: '...',
            
           
        },
    ];
    
    const lists5 = [
        {
            image5: UHUT,
            UHUT: 'UHUT Subscription',
            Textinv4: 'İnv: MGL524740',
            Time5: '14 Apr 2022',
            TimeWork5: 'at 08:00 AM',
            Order5: '01',
            Amt4: "$84.00",
            Button5: 'Paid',
            Act4: '...',
        
           
        },
    ];
    
        const lists6 = [
            {
                image6: Bank,
                Bank: 'Citi Bank Ltd',
                Textinv5: 'İnv: MGL524240',
                Time6: '14 Apr 2022',
                TimeWork6: 'at 08:00 PM',
                Order6: 'Widthdraw',
                Amt5: "$420.84",
                Button6: 'Pending',
                Act5: '...',
                
               
            },
    ];
    
    const lists7 = [
        {
            image7: Bitcoin,
            Bitcoin: 'Bitcoin Transactions',
            Textinv6: 'İnv: MGL524254',
            Time7: '14 Apr 2022',
            TimeWork7: 'at 08:00 PM',
            Order7: 'Widthdraw',
            Amt6: "$420.84",
            Button7: 'Pending',
            Act6: '...',
            
           
        },
    ];
    
    const lists8 = [
        {
            image8: Screnimage,
            Screnimage: 'Netflix Subscription',
            Textinv7: 'İnv: MGL524487',
            Time8: '14 Apr 2022',
            TimeWork8: 'at 07:00 PM',
            Order8: '01',
            Amt7: "$420.84",
            Button8: 'Paid',
            Act7: '...',
           
        },
    ];
    
    
    
    
    
    const Raporttwo = () => {
        return (
            <div className="Raport-list">
                <div className="List-container">

                {lists.map(item => (
                    <div className="list" key={item.IDN}>
                        <h2>{item.name}</h2>
                        <h2>{item.Date}</h2>
                        <h2>{item.Typeorder}</h2>
                        <h2>{item.Amount}</h2>
                        <h2>{item.Sts}</h2>
                        <h2>{item.Act}</h2>
                       
                    </div>
                ))}
                
                    {lists2.map(item => (
                        <div className="lists" key={item.Gadcet}>
                            <div className="list-content">
                                <div className="list-image">
                                    <img src={item.image} alt={item.Text1} />
                                </div>
                                <div className="text-container">
                                    <div className="text-group">
                                        <h2>{item.Text1}</h2>
                                        <h2>{item.Text2}</h2>
                                    </div>
                                   </div>
                                  
                            </div>
                            
                                    
                                    <div className="text-cont">
                                    <h2>{item.Time}</h2>
                                    <h2>{item.TimeWork}</h2>
                                    
                                    </div>
                                    <h2>{item.Order1}</h2>
                                    <h2>{item.Amt}</h2>
                                    <button><h2>{item.Button}</h2></button>
                                    <h3>{item.Act1}</h3>
                        </div>
                    ))}
    
    {lists3.map(item => (
                        <div className="lists" key={item.Figma}>
                            <div className="list-content">
                                <div className="list-image">
                                    <img src={item.image3} alt={item.Figma} />
                                </div>
                                <div className="text-container">
                                    <div className="text-group">
                                        <h2>{item.Figma}</h2>
                                        <h2>{item.Textinv}</h2>
                                    </div>
                                   </div>
                                  
                            </div>
                            
                                    
                                    <div className="text-cont">
                                    <h2>{item.Time2}</h2>
                                    <h2>{item.TimeWork2}</h2>
                                    
                                    </div>
                                    <h2>{item.Order2}</h2>
                                    <h2>{item.Amt2}</h2>
                                    <button><h2>{item.Button2}</h2></button>
                                    <h2>{item.Act2}</h2>
                        </div>
                    ))}
    
    {lists4.map(item => (
                        <div className="lists" key={item.Jack}>
                            <div className="list-content">
                                <div className="list-image">
                                    <img src={item.image4} alt={item.Jacks} />
                                </div>
                                <div className="text-container">
                                    <div className="text-group">
                                        <h2>{item.Jacks}</h2>
                                        <h2>{item.Textinv3}</h2>
                                    </div>
                                   </div>
                                  
                            </div>
                            
                                    
                                    <div className="text-cont">
                                    <h2>{item.Time4}</h2>
                                    <h2>{item.TimeWork4}</h2>
                                    
                                    </div>
                                    <h2>{item.Order4}</h2>
                                    <h2>{item.Amt3}</h2>
                                    <button><h2>{item.Button4}</h2></button>
                                    <h2>{item.Act3}</h2>
                                   
                        </div>
                    ))}
    
    {lists5.map(item => (
                        <div className="lists" key={item.UHUT}>
                            <div className="list-content">
                                <div className="list-image">
                                    <img src={item.image5} alt={item.Uhiutsubs} />
                                </div>
                                <div className="text-container">
                                    <div className="text-group">
                                        <h2>{item.UHUT}</h2>
                                        <h2>{item.Textinv4}</h2>
                                    </div>
                                   </div>
                                  
                            </div>
                            
                                    
                                    <div className="text-cont">
                                    <h2>{item.Time5}</h2>
                                    <h2>{item.TimeWork5}</h2>
                                    
                                    </div>
                                    <h2>{item.Order5}</h2>
                                    <h2>{item.Amt4}</h2>
                                    <button><h2>{item.Button5}</h2></button>
                                    <h2>{item.Act4}</h2>
                                   
                        </div>
                    ))}
    
    {lists6.map(item => (
                        <div className="lists" key={item.Bank}>
                            <div className="list-content">
                                <div className="list-image">
                                    <img src={item.image6} alt={item.Bank} />
                                </div>
                                <div className="text-container">
                                    <div className="text-group">
                                        <h2>{item.Bank}</h2>
                                        <h2>{item.Textinv5}</h2>
                                    </div>
                                   </div>
                                  
                            </div>
                            
                                    
                                    <div className="text-cont">
                                    <h2>{item.Time6}</h2>
                                    <h2>{item.TimeWork6}</h2>
                                    
                                    </div>
                                    <h2>{item.Order6}</h2>
                                    <h2>{item.Amt5}</h2>
                                    <button><h2>{item.Button6}</h2></button>
                                    <h2>{item.Act5}</h2>
                                   
                        </div>
                    ))}
    
    {lists7.map(item => (
                        <div className="lists" key={item.Bitcoin}>
                            <div className="list-content">
                                <div className="list-image">
                                    <img src={item.image7} alt={item.Bitcoin} />
                                </div>
                                <div className="text-container">
                                    <div className="text-group">
                                        <h2>{item.Bitcoin}</h2>
                                        <h2>{item.Textinv6}</h2>
                                    </div>
                                   </div>
                                  
                            </div>
                            
                                    
                                    <div className="text-cont">
                                    <h2>{item.Time7}</h2>
                                    <h2>{item.TimeWork7}</h2>
                                    
                                    </div>
                                    <h2>{item.Order7}</h2>
                                    <h2>{item.Amt6}</h2>
                                    <button><h2>{item.Button7}</h2></button>
                                    <h2>{item.Act6}</h2>
                                   
                        </div>
                    ))}
    
    {lists8.map(item => (
                        <div className="lists" key={item.Screnimage}>
                            <div className="list-content">
                                <div className="list-image">
                                    <img src={item.image8} alt={item.Screnimage} />
                                </div>
                                <div className="text-container">
                                    <div className="text-group">
                                        <h2>{item.Screnimage}</h2>
                                        <h2>{item.Textinv7}</h2>
                                    </div>
                                   </div>
                                  
                            </div>
                            
                                    
                                    <div className="text-cont">
                                    <h2>{item.Time8}</h2>
                                    <h2>{item.TimeWork8}</h2>
                                    
                                    </div>
                                    <h2>{item.Order8}</h2>
                                    <h2>{item.Amt7}</h2>
                                    <button><h2>{item.Button8}</h2></button>
                                    <h2>{item.Act7}</h2>
                                   
                        </div>
                    ))}
    
    
                </div>
            </div>
        );
    };
export default Raporttwo
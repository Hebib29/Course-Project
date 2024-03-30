import React from 'react';
import '../Styles/Raportlist.css';
import Screen1 from '../assets/Screen1.jpg';
import Screnimage from '../assets/Screnimage.jpg';
import Figma from '../assets/Figma.jpg';
import Bitcoin from '../assets/Bitcoin.jpg';
import Sajib from '../assets/Sajib.jpg';
import Instagram from '../assets/Instagram.jpg';
import UHUT from '../assets/UHUT.jpg'

const lists = [
    {
        name: 'Name',
        Type: 'Type',
        Price: 'Amount',
        Date: 'Date',
        IDN: 'INVOICE',
        Act: 'ACTION',
        
    },
];

const lists2 = [
    {
        image: Screen1,
        Text1: 'Iphone 13 Pro Max',
        Text2: 'Apple Inc',
        Text3: 'Mobile',
        Price: '$420.84',
        Time: '14 Apr 2022',
        TimeWork: 'at 08:00 PM',
        IDLIST: 'MGL0124877',
        Button: 'VIEW'
        
       
    },
];

const lists3 = [
    {
        image2: Screnimage,
        Netflix: 'Netflix Subscription',
        Subscribe: 'Netflix',
        Enter: 'Entertainment',
        Price2: '$100.00',
        Time2: '05 Apr 2022',
        TimeWork2: 'at 07:00 PM',
        IDLIST2: 'MGL0124585',
        Button2: 'VIEW'
        
       
    },
];

const lists4 = [
    {
        image3: Figma,
        Figma: 'Figma Subscription',
        Subscribefigma: 'Figma',
        Soft: 'SOFTWARE',
        Price3: '$100.00',
        Time3: '05 Apr 2022',
        TimeWork3: 'at 07:00 PM',
        IDLIST3: 'MGL0214124',
        Button3: 'VIEW'
        
       
    },
];

const lists5 = [
    {
        image4: Bitcoin,
        Bitcoin: 'Bitcoin Subscription',
       Bitcointr: 'Coinbase',
        Tech: 'Technology',
        Price4: '-$520.84',
        Time4: '02 Apr 2022',
        TimeWork4: 'at 10:00 PM',
        IDLIST4: 'MGL0128544',
        Button4: 'VIEW'
    
       
    },
];

    const lists6 = [
        {
            image5: Sajib,
            Sajib: 'Sajib Rahman',
           Appsu: 'Appsumo',
            draw: 'Widthdraw',
            Price5: '$500.10',
            Time5: '30 Mart 2022',
            TimeWork5: 'at 09:00 PM',
            IDLIST5: 'MGL0122143',
            Button5: 'VIEW'
            
           
        },
];

const lists7 = [
    {
        image6: Instagram,
        Instagram: 'Instagram ads',
       Met: 'Meta',
        Tain: 'Entertainment',
        Price6: '$100.00',
        Time6: '20 Mart 2022',
        TimeWork6: 'at 09:00 PM',
        IDLIST6: 'MGL0124877',
        Button6: 'VIEW'
        
       
    },
];

const lists8 = [
    {
        image7: UHUT,
        Uhiutsubs: 'UIHUT Subscribtion',
       Uhut: 'UIHUT',
        Paym: 'Payment',
        Price7: '-$84.00',
        Time7: '24 Mart 2022',
        TimeWork7: 'at 08:00 PM',
        IDLIST7: 'MGL0124244',
        Button7: 'VIEW'
        
       
    },
];





const Raportlist = () => {
    return (
        <div className="Raport-list">
            <div className="List-container">
                {lists.map(item => (
                    <div className="list" key={item.IDN}>
                        <h2>{item.name}</h2>
                        <h2>{item.Type}</h2>
                        <h2>{item.Price}</h2>
                        <h2>{item.Date}</h2>
                        <h2>{item.IDN}</h2>
                        <h2>{item.Act}</h2>
                    </div>
                ))}
                {lists2.map(item => (
                    <div className="lists" key={item.Names}>
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
                        <h2>{item.Text3}</h2>
                                <h2>{item.Price}</h2>
                                
                                <div className="text-cont">
                                <h2>{item.Time}</h2>
                                <h2>{item.TimeWork}</h2>
                                
                                </div>
                                <h2>{item.IDLIST}</h2>
                                <button><h2>{item.Button}</h2></button>
                               
                    </div>
                ))}

{lists3.map(item => (
                    <div className="lists2" key={item.Screnimage}>
                        <div className="list-content">
                            <div className="list-image">
                                <img src={item.image2} alt={item.Netflix} />
                            </div>
                            
                            <div className="text-container">
                                <div className="text-group">
                                    <h2>{item.Netflix}</h2>
                                    <h2>{item.Subscribe}</h2>
                                </div>
                                
                               </div>
                              
                        </div>
                        <h2>{item.Enter}</h2>
                                <h2>{item.Price2}</h2>
                                
                                <div className="text-cont-2">
                                <h2>{item.Time2}</h2>
                                <h2>{item.TimeWork2}</h2>
                                
                                </div>
                                <h2>{item.IDLIST2}</h2>
                                <button><h2>{item.Button2}</h2></button>
                               
                    </div>
                ))}

{lists4.map(item => (
                    <div className="lists3" key={item.Figma}>
                        <div className="list-content">
                            <div className="list-image">
                                <img src={item.image3} alt={item.Figma} />
                            </div>
                            
                            <div className="text-container">
                                <div className="text-group">
                                    <h2>{item.Figma}</h2>
                                    <h2>{item.Subscribefigma}</h2>
                                </div>
                                
                               </div>
                              
                        </div>
                        <h2>{item.Soft}</h2>
                                <h2>{item.Price3}</h2>
                                
                                <div className="text-cont">
                                <h2>{item.Time3}</h2>
                                <h2>{item.TimeWork3}</h2>
                                
                                </div>
                                <h2>{item.IDLIST3}</h2>
                                <button><h2>{item.Button3}</h2></button>
                               
                    </div>
                ))}

{lists5.map(item => (
                    <div className="lists4" key={item.Bitcoin}>
                        <div className="list-content">
                            <div className="list-image">
                                <img src={item.image4} alt={item.image4} />
                            </div>
                            
                            <div className="text-container">
                                <div className="text-group">
                                    <h2>{item.Bitcoin}</h2>
                                    <h2>{item.Bitcointr}</h2>
                                </div>
                                
                               </div>
                              
                        </div>
                        <h2>{item.Tech}</h2>
                                <h2>{item.Price4}</h2>
                                
                                <div className="text-cont">
                                <h2>{item.Time4}</h2>
                                <h2>{item.TimeWork4}</h2>
                                
                                </div>
                                <h2>{item.IDLIST4}</h2>
                                <button><h2>{item.Button4}</h2></button>
                               
                    </div>
                ))}

{lists6.map(item => (
                    <div className="lists5" key={item.Sajib}>
                        <div className="list-content">
                            <div className="list-image">
                                <img src={item.image5} alt={item.image5} />
                            </div>
                            
                            <div className="text-container">
                                <div className="text-group">
                                    <h2>{item.Sajib}</h2>
                                    <h2>{item.Appsu}</h2>
                                </div>
                                
                               </div>
                              
                        </div>
                        <h2>{item.draw}</h2>
                                <h2>{item.Price5}</h2>
                                
                                <div className="text-cont">
                                <h2>{item.Time5}</h2>
                                <h2>{item.TimeWork5}</h2>
                                
                                </div>
                                <h2>{item.IDLIST5}</h2>
                                <button><h2>{item.Button5}</h2></button>
                               
                    </div>
                ))}

{lists7.map(item => (
                    <div className="lists6" key={item.Instagram}>
                        <div className="list-content">
                            <div className="list-image">
                                <img src={item.image6} alt={item.image6} />
                            </div>
                            
                            <div className="text-container">
                                <div className="text-group">
                                    <h2>{item.Instagram}</h2>
                                    <h2>{item.Met}</h2>
                                </div>
                                
                               </div>
                              
                        </div>
                        <h2>{item.Tain}</h2>
                                <h2>{item.Price6}</h2>
                                
                                <div className="text-cont">
                                <h2>{item.Time6}</h2>
                                <h2>{item.TimeWork6}</h2>
                                
                                </div>
                                <h2>{item.IDLIST6}</h2>
                                <button><h2>{item.Button6}</h2></button>
                               
                    </div>
                ))}

{lists8.map(item => (
                    <div className="lists7" key={item.Uihut}>
                        <div className="list-content">
                            <div className="list-image">
                                <img src={item.image7} alt={item.image7} />
                            </div>
                            
                            <div className="text-container">
                                <div className="text-group">
                                    <h2>{item.Uhiutsubs}</h2>
                                    <h2>{item.Uhut}</h2>
                                </div>
                                
                               </div>
                              
                        </div>
                        <h2>{item.Paym}</h2>
                                <h2>{item.Price6}</h2>
                                
                                <div className="text-cont">
                                <h2>{item.Time7}</h2>
                                <h2>{item.TimeWork7}</h2>
                                
                                </div>
                                <h2>{item.IDLIST7}</h2>
                                <button><h2>{item.Button7}</h2></button>
                               
                    </div>
                ))}


            </div>
        </div>
    );
};

export default Raportlist;

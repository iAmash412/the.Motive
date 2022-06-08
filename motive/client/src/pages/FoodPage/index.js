import React from 'react';
import '../../pages/MotivePage/motive.css';
import { NavBar } from '../../components';
import { fetchFoodVenues } from '../../actions';

import TypeWriterEffect from 'react-typewriter-effect';
import { Dropdown, DropdownButton } from 'react-bootstrap';


const FoodPage = () => {


    function handleFood(e) {
        dispatch(fetchFoodVenues(e.currentTarget.value));
        navigate('/venues');
    }

  
    return (
        <div className='main-container'>
       
                <NavBar />
                <div className='typewriter'>
                    <TypeWriterEffect 
                        textStyle={{
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            fontSize: '3.7em',
                            textAlign: 'center',
                            lineHeight: '1.3',
                            textShadow: '7px 7px 7px  #FF5900',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '100px',
        
                    
                        }}
                        cursorColor='#da3422'
                        text='WHAT\S THE VIBE?'
                        typeSpeed={70}
                        startDelay={0.1}
                        loop={true}
                    
                    />
                </div>

                <br></br>

                <div className='category-container'>
                    
                    <DropdownButton 
                                onClick={handleFood}
                                id="category-button" 
                                title="CATEGORY" 
                                size="lg" 
                                className='d-grid gap-2'>


                            <Dropdown.Item as="button" value={17} >Science & Nature</Dropdown.Item>
                           



                     </DropdownButton >
                    
                </div>
            
            
        </div>
    )

}


export default FoodPage;
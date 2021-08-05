import React, { Component } from 'react';
import '../App.css';

export default class InputField extends Component {
    render() {
        const { value ,search , handleSearch , handleSubmit ,handleSave , handleChange , handleClick , showModal} = this.props;
        return (
            <div>
                <div className='inputWrapper'>
                    <form className="" onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-md-2'>
                            <input type='text'  autoComplete = "off" required placeholder='Name' value={value.name} className='form-control' onChange={ event => handleChange("name" ,event.target.value)} />
                            </div> 
                            <div className='col-md-2'>
                            <input type='text'  autoComplete = "off" required placeholder='Details' value={value.detail} className='form-control' onChange={ event => handleChange("detail" ,event.target.value)} />
                            </div> 
                            <div className='col-md-2'>
                            <input type='text'  autoComplete = "off" required placeholder='Time' value={value.time} className='form-control' onChange={ event => handleChange("time" ,event.target.value)}/>
                            </div> 
                            <div className='col-md-2'>
                            <input type='text'  autoComplete = "off" required placeholder='Total' value={value.total} className='form-control' onChange={ event => handleChange("total" ,event.target.value)}/>
                            </div>
                            <div className='col-md-2'>
                            <input type='text'  autoComplete = "off" required placeholder='Advance' value={value.advance} className='form-control' onChange={ event => handleChange("advance" ,event.target.value)}/>
                            </div>
                            <div className='col-md-2'>
                            <input type='text'  autoComplete = "off" required placeholder='Balance' value={value.balance} className='form-control' onChange={ event => handleChange("balance" ,event.target.value)}/>
                            </div>  
                        </div>
                        <div className='row'>
                            <div className='col-md-8'>
                                <button type='submit' className="addBtn btn btn-primary" onClick={handleSave}>ADD</button>
                            </div>
                            <div className='col-md-4'>
                                <button className="histBtn btn btn-danger" onClick={showModal}>History</button>
                            </div> 
                        </div>
                        <div className='search'>
                            <input type = 'text' className='searchField' autoComplete = "off" placeholder ='Search' value ={search} onChange = {event => handleSearch(event , "search" )} />
                            <button className='searchBtn' onClick={handleClick}><i className="fa fa-search"></i></button>
                        </div>  
                    </form>
                </div>
            </div>
        )
    }
}

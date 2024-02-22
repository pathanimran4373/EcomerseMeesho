import React, { useState } from 'react'
import { FaSistrix, FaTimes } from "react-icons/fa";
import "./SearchBox.css"

function SearchBox() {


 

  
  return (
    <>
      <div className='searchBox'>
        
          <input type='text'  className='searchInput' placeholder="Try Saree, kurti or search by product code"/>
          <div className='searchIconContainer'>
            <FaSistrix className='searchIcon'/>
            <FaTimes className='disableSearchIcon'/>
          </div>
        
    
      </div>
    </>
  )
}

export default SearchBox

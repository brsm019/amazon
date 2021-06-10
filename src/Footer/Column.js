import React from 'react'

const Footer = ({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  text11,
}) => {
  return (
    <div className='footer'>
      <h4 className='footer__title'>{title}</h4>
      <p className='footer__text'>{text1}</p>
      <p className='footer__text'>{text2}</p>
      <p className='footer__text'>{text3}</p>
      <p className='footer__text'>{text4}</p>
      <p className='footer__text'>{text5}</p>
      <p className='footer__text'>{text6}</p>
      <p className='footer__text'>{text7}</p>
      <p className='footer__text'>{text8}</p>
      <p className='footer__text'>{text9}</p>
      <p className='footer__text'>{text10}</p>
      <p className='footer__text'>{text11}</p>
    </div>
  )
}

export default Footer

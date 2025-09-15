import React from 'react'
import JoinPerfumeAndCologne from './JoinPerfumeAndCologne'
import FooterBranding from './FooterBranding'
import FooterCopyright from './FooterCopyright'

const Footer = () => {
  return (
    <footer className='site-footer mg-top'>
        <JoinPerfumeAndCologne></JoinPerfumeAndCologne>
        <FooterBranding></FooterBranding>
        <FooterCopyright></FooterCopyright>
    </footer>

  )
}

export default Footer
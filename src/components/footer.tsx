'use client'

import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Logo from '../../public/logo.png'
import footer from '../utils/footer'

function Footer() {
  return (
    <FooterStyled>
      <nav>
        <div className="logo-container">
          <div className="logo">
            <Image src={Logo} alt='logo' width={36} />
            <h2>Logo</h2>
          </div>
        </div>
      </nav>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer``

export default Footer
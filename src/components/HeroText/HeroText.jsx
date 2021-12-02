import React, { Fragment } from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

const HeroText = () => {
  return (
    <Fragment>
      <TopSectionContainer>
        <Logo>Global Warming </Logo>
        <Slogan>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Keep it cool for the safe living!')
                .pauseFor(2000)
                .deleteAll()
                .typeString('A warming Earth is an early warning to us.')
                .start()
            }}
          />
        </Slogan>
        <Slogan></Slogan>
        <Paragraph>
          {' '}
          You can help us cool off our world and have it go back to it's best
          statue every by donating a little amount for our beloved earth.{' '}
        </Paragraph>
      </TopSectionContainer>
    </Fragment>
  )
}

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: '#0b3b5281';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 22;
`

const Logo = styled.h1`
  font-weight: bold;
  font-size: 65px;
  color: #fff;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
`

const Slogan = styled.h4`
  font-weight: bold;
  font-size: 40px;
  color: #fff;
  margin: 0;
  margin-top: 20px;
  width: 700px;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
`

const Paragraph = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4em;
  width: 40ch;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
`

export default HeroText

import React from "react";
import styled from "styled-components";

export const Button = styled.button`
border: 0;
	left: 0;
	padding: 10px 1em;
	color: #fff;
	font-size: 20px;
	font-weight: 600;
	border-radius: 5px;
	background-color: royalblue;
	border: 2px solid royalblue;
	transition: all 240ms ease-in-out;
	cursor: pointer;
	box-shadow: 2px 2px 15px #6797e7;
	&:hover {
		color: #fff;
		background-color: royalblue;
	}
    @media screen and (max-width: 580px){
        font-size: 15px;
    }
`;


const HeroSec = styled.div`
  color: #fff;
  padding: 0px 0;
  background: #fff;
`;

const HeroRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

const HeroColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;


const Img = styled.img`
  vertical-align: middle;
  display: inline-block;
  padding-right:30px;
  padding-left:30px;
  @media screen and (max-width: 768px){
	  width:100%;
  }
  @media screen and (max-width: 992px){
	width:100%;
}
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #1c2237;
`;

const Subtitle = styled.p`
  font-size: 20px;
  line-height: 2;
  color: grey;


`;

const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin-top:50px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

function Hero() {
  return (
    <>
      <HeroSec>
        <Container>
          <HeroRow>
            <HeroColumn>
              <TextWrapper>
                <Heading>Be a HERO. Let's save eachother</Heading>
                <Subtitle>We aim to make Covidcare a onestop solution for all covid queries.
                        The devastating pandemic has left all of us crippled. We want your help.
                        Data is feed by the people,for the people.
                        So, if you think you know someone who has lead feed the data.
							<br /></Subtitle>
							<a href="/" target="_blank">
                  <Button>
                    Feed Information
                  </Button>
                  </a>
              </TextWrapper>
            </HeroColumn>
            <HeroColumn>
              <ImgWrapper>
			<Img src={require("../../assets/doctors.png").default}/>
              </ImgWrapper>
            </HeroColumn>
          </HeroRow>
        </Container>
      </HeroSec>
    </>
  );
}

export default Hero;
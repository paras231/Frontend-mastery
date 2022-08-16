import React from "react";
import styled from "styled-components";
import apple from "../assets/apple.png";
import daal from "../assets/daal.png";
import bread from "../assets/bread.png";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Heading = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  color: #000000;
  margin-left: 20vw;
`;

const ProductContainer = styled.div`
  display: grid;
  margin-top: 20vh;
`;
const MainDiv = styled.div`
  display: flex;
  margin-left: 20vw;
  gap:20px;
  @media (min-width: 320px) and (max-width: 375px) {
    display: grid;
    
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: grid;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display: grid;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    display: grid;
  }
`;

const Card = styled.div`
  width: 20vw;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 40vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 40vw;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 40vw;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 40vw;
  }
`;
const CardBottom = styled.div`
  background-color: #1d2f50;
  height: 18vh;
  width: 15vw;
  
  border-radius: 10px;

  @media (min-width: 320px) and (max-width: 375px) {
    width: 40vw;
    height: 25vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 40vw;
    height: 15vh;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 40vw;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 40vw;
  }

`;

const Name = styled.p`
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  padding-top: 10px;

  color: #ffffff;
`;

const PriceContainer = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
`;
const Price = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;

  color: #ffffff;
`;

const Button = styled.button`
  background-color: #aaba59;
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 7px;
  height: 4vh;
  width: 9vw;
  margin-top: 10px;
  margin-left: 39px;
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 375px) {
    width: 30vw;
    margin-left: 15px;
    margin-top: 20px;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 30vw;
    margin-left: 22px;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 30vw;
    margin-left: 24px;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 30vw;
    margin-left: 26px;
  }

`;

const Image = styled.img`
  width: 15vw;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 40vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 40vw;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 40vw;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 40vw;
  }
`;
const LeftName = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;

  color: #ffffff;
`;
const Products = () => {
  return (
    <>
      <ProductContainer>
        <Heading>Our Products</Heading>
        <MainDiv>
          <Card>
            <Image src={apple} />
            <CardBottom>
              <Name>Fruits</Name>
              <PriceContainer>
                <LeftName>Apple</LeftName>
                <Price>$1.00</Price>
              </PriceContainer>
              <Button>
                Add to cart <RiShoppingCart2Fill style={{ color: "white" }} />
              </Button>
            </CardBottom>
          </Card>
          <Card>
            <Image src={daal} />
            <CardBottom>
              <Name>Fruits</Name>
              <PriceContainer>
                <LeftName>Apple</LeftName>
                <Price>$1.00</Price>
              </PriceContainer>
              <Button>
                Add to cart <RiShoppingCart2Fill style={{ color: "white" }} />
              </Button>
            </CardBottom>
          </Card>
          <Card>
            <Image src={apple} />
            <CardBottom>
              <Name>Fruits</Name>
              <PriceContainer>
                <LeftName>Apple</LeftName>
                <Price>$1.00</Price>
              </PriceContainer>
              <Button>
                Add to cart <RiShoppingCart2Fill style={{ color: "white" }} />
              </Button>
            </CardBottom>
          </Card>
        </MainDiv>
      </ProductContainer>
    </>
  );
};

export default Products;

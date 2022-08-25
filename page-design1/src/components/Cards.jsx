import React from "react";
import styled from "styled-components";
import hotel from "../assets/hotel.png";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vmax;
  gap: 5vmax;
  flex-wrap: wrap;
  @media (min-width: 320px) and (max-width: 375px) {
    display: grid;
    gap: 24vmax;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: grid;
    gap: 24vmax;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display: grid;
    gap: 24vmax;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    display: grid;
    gap: 24vmax;
  }
`;

const CardDiv = styled.div`
  width: 20vmax;
  height: 25vmax;
`;

const CardUpper = styled.div``;

const CardLower = styled.div``;

const TextDiv = styled.div`
  display: grid;
  gap: 1vmax;
  width: 19.5vmax;
`;

const Text1 = styled.p`
  font-size: 1.2rem;
  color: #145843;
  font-weight: 500;
`;
const Text2 = styled.p`
  font-size: 0.8rem;
  color: #000000;
  font-weight: 400;
`;
const Button = styled.button`
  background: transparent;
  width: 8vmax;
  height: 2vmax;
  border: 0.5px solid black;
  cursor: pointer;
  margin-left: 5.5vmax;
  margin-top:2vmax;

  @media (min-width: 320px) and (max-width: 375px) {
    height: 6vmax;
    width: 10vmax;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height: 6vmax;
    width: 15vmax;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    height: 6vmax;
    width: 15vmax;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    height: 6vmax;
    width: 15vmax;
    margin-left: 0;
  }
`;

const Image = styled.img`
  width: 20vmax;
  height: 12vmax;
`;
const Cards = () => {
  return (
    <>
      <MainDiv>
        <CardDiv>
          <CardUpper>
            <Image src={hotel} />
          </CardUpper>
          <CardLower>
            <TextDiv>
              <Text1>Package Name</Text1>
              <Text2>
                Commodi distinctio aut repellendus quos. Et et alias occaecati
                commodi reprehenderit qui aperiam beatae ratione. Qui expedita
                voluptatum nulla voluptatem
              </Text2>
            </TextDiv>
            <Button>Book Now</Button>
          </CardLower>
        </CardDiv>
        <CardDiv>
          <CardUpper>
            <Image src={hotel} />
          </CardUpper>
          <CardLower>
            <TextDiv>
              <Text1>Package Name</Text1>
              <Text2>
                Commodi distinctio aut repellendus quos. Et et alias occaecati
                commodi reprehenderit qui aperiam beatae ratione. Qui expedita
                voluptatum nulla voluptatem
              </Text2>
            </TextDiv>
            <Button>Book Now</Button>
          </CardLower>
        </CardDiv>
        <CardDiv>
          <CardUpper>
            <Image src={hotel} />
          </CardUpper>
          <CardLower>
            <TextDiv>
              <Text1>Package Name</Text1>
              <Text2>
                Commodi distinctio aut repellendus quos. Et et alias occaecati
                commodi reprehenderit qui aperiam beatae ratione. Qui expedita
                voluptatum nulla voluptatem
              </Text2>
            </TextDiv>
            <Button>Book Now</Button>
          </CardLower>
        </CardDiv>
        <CardDiv>
          <CardUpper>
            <Image src={hotel} />
          </CardUpper>
          <CardLower>
            <TextDiv>
              <Text1>Package Name</Text1>
              <Text2>
                Commodi distinctio aut repellendus quos. Et et alias occaecati
                commodi reprehenderit qui aperiam beatae ratione. Qui expedita
                voluptatum nulla voluptatem
              </Text2>
            </TextDiv>
            <Button>Book Now</Button>
          </CardLower>
        </CardDiv>
        <CardDiv>
          <CardUpper>
            <Image src={hotel} />
          </CardUpper>
          <CardLower>
            <TextDiv>
              <Text1>Package Name</Text1>
              <Text2>
                Commodi distinctio aut repellendus quos. Et et alias occaecati
                commodi reprehenderit qui aperiam beatae ratione. Qui expedita
                voluptatum nulla voluptatem
              </Text2>
            </TextDiv>
            <Button>Book Now</Button>
          </CardLower>
        </CardDiv>
        <CardDiv>
          <CardUpper>
            <Image src={hotel} />
          </CardUpper>
          <CardLower>
            <TextDiv>
              <Text1>Package Name</Text1>
              <Text2>
                Commodi distinctio aut repellendus quos. Et et alias occaecati
                commodi reprehenderit qui aperiam beatae ratione. Qui expedita
                voluptatum nulla voluptatem
              </Text2>
            </TextDiv>
            <Button>Book Now</Button>
          </CardLower>
        </CardDiv>
        <CardDiv>
          <CardUpper>
            <Image src={hotel} />
          </CardUpper>
          <CardLower>
            <TextDiv>
              <Text1>Package Name</Text1>
              <Text2>
                Commodi distinctio aut repellendus quos. Et et alias occaecati
                commodi reprehenderit qui aperiam beatae ratione. Qui expedita
                voluptatum nulla voluptatem
              </Text2>
            </TextDiv>
            <Button>Book Now</Button>
          </CardLower>
        </CardDiv>
      </MainDiv>
    </>
  );
};

export default Cards;

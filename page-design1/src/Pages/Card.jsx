import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  margin-top: -10vmax;
`;
const MainDiv = styled.div`
  display: flex;
  gap:2vmax;
`;

const Container = styled.div`
  width: 25vmax;
  height: 30vmax;

  background-color: white;
  display: grid;
  /* margin-left: 10vmax; */
`;
const UpperDiv = styled.div`
  display: flex;
  gap: 1vmax;
  margin-left: 2vmax;
  margin-top: 3vmax;
`;

const LowerDiv = styled.div`
  display: flex;
  gap: 1vmax;
  margin-left: 2vmax;
`;

const Image = styled.img`
  width: 10vmax;
  height: 10vmax;
  cursor: pointer;
`;

const img1 =
  "https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVkc2hlZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

const img2 =
  "https://media.istockphoto.com/photos/beautiful-old-tiles-picture-id668233506?b=1&k=20&m=668233506&s=170667a&w=0&h=Xbd_6YY2hENlsLwAC1zEYmMi5hWIKm7vkWQ1y9mZIvw=";

const img3 =
  "https://media.istockphoto.com/photos/decoracin-picture-id1414659303?b=1&k=20&m=1414659303&s=170667a&w=0&h=ExMIJp_R4MdgZX1OwnxYQnKqNwk384ee-4kXJAjOYbA=";

const img4 =
  "https://media.istockphoto.com/photos/dark-texture-abstract-colorful-background-concept-background-picture-id1277192490?b=1&k=20&m=1277192490&s=170667a&w=0&h=PTaWEvWwfyJwCdAbMeI6IIoz0ioDQMbrHZrzJc1lql0=";

const Card = () => {
  return (
    <>
      <Wrapper>
        <MainDiv>
          <Container>
            <UpperDiv>
              <Image src={img1} />
              <Image src={img2} />
            </UpperDiv>
            <LowerDiv>
              <Image src={img1} />
              <Image src={img2} />
            </LowerDiv>
          </Container>
          <Container>
            <UpperDiv>
              <Image src={img1} />
              <Image src={img2} />
            </UpperDiv>
            <LowerDiv>
              <Image src={img1} />
              <Image src={img2} />
            </LowerDiv>
          </Container>
        </MainDiv>
      </Wrapper>
    </>
  );
};

export default Card;

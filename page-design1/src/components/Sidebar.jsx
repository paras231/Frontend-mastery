import React from "react";
import styled from "styled-components";
import Courses from "./Courses";

const Container = styled.div`
  height: 100vh;
  width: 20vw;
  top: 0;
  position: sticky;
  ul {
    padding: 30px;
    display: grid;
    list-style-type: none;
    gap: 30px;
  }
  background-color: yellow;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListDiv = styled.div`
  width: 15vw;
  height: 20vh;
  background-color: pink;
`;
const Sidebar = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <ul>
            <ListDiv>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia tenetur, soluta magnam dignissimos nisi est quae
                perferendis dolorem ratione suscipit!
              </p>
            </ListDiv>
            <ListDiv>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia tenetur, soluta magnam dignissimos nisi est quae
                perferendis dolorem ratione suscipit!
              </p>
            </ListDiv>
            <ListDiv>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia tenetur, soluta magnam dignissimos nisi est quae
                perferendis dolorem ratione suscipit!
              </p>
            </ListDiv>
            <ListDiv>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia tenetur, soluta magnam dignissimos nisi est quae
                perferendis dolorem ratione suscipit!
              </p>
            </ListDiv>
            <ListDiv>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia tenetur, soluta magnam dignissimos nisi est quae
                perferendis dolorem ratione suscipit!
              </p>
            </ListDiv>
            <ListDiv>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia tenetur, soluta magnam dignissimos nisi est quae
                perferendis dolorem ratione suscipit!
              </p>
            </ListDiv>
            <ListDiv>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia tenetur, soluta magnam dignissimos nisi est quae
                perferendis dolorem ratione suscipit!
              </p>
            </ListDiv>
            <ListDiv>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia tenetur, soluta magnam dignissimos nisi est quae
                perferendis dolorem ratione suscipit!
              </p>
            </ListDiv>
            <ListDiv>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia tenetur, soluta magnam dignissimos nisi est quae
                perferendis dolorem ratione suscipit!
              </p>
            </ListDiv>
          </ul>
        </Container>

        <Courses />
      </Wrapper>
    </>
  );
};

export default Sidebar;

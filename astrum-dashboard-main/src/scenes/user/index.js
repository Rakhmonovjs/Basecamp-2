import React  from 'react'
import styled from "styled-components";
import { HiOutlineLocationMarker } from "react-icons/hi";
// import { cardStyles } from "./ReusableStyles";
import image  from '../../img/ava.jpg'

export default function User (){
    return (
        <Section>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="title">
                <h2>ism familiya</h2>
                    <h5>
                        <HiOutlineLocationMarker /> New York  USA
                    </h5>
            </div>
            <div className='info'>
                <div className='container'>
                    <h5>sffsfsfsf</h5>
                    <h3>sfe3453</h3>
                </div>
                <div className='container'>
                    <h4>Rides</h4>
                    <h3>3424</h3>
                </div>
                <div className='container'>
                    <h5>soat</h5>
                    <h3>333</h3>
                </div>
            </div>
        </Section>
    );
}

const Section = styled.section`

display: flex;
flex-direction: column;
align-items: center;

.image {
  max-height: 10rem;
  overflow: hidden;
  border-radius: 20rem;
  img {
    height: 4rem;
    width: 4rem;
    object-fit: cover;
    border-radius: 20rem;
    transition: 0.5s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}
.title {
  text-align: center;
  h2,
  h5 {
    color: #ffc107;
    font-family: "Permanent Marker", cursive;
    letter-spacing: 0.3rem;
  }
  h5 {
    letter-spacing: 0.2rem;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
  }
}
.info {
  display: flex;
  gap: 1rem;
  .container {
    text-align: center;
  }
}
`;
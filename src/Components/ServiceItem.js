import React from 'react'
import styled from 'styled-components'

function ServiceItem({ icon, name, para }) {
    return (
        <ServiceItemStyled >
            <div className="image">
                <img src={icon} alt="" />
            </div>
            <h4>{name}</h4>
            <p>{para}</p>
        </ServiceItemStyled>
    )
}


const ServiceItemStyled = styled.div`
    &:hover{
        .image{
            border: 4px dashed var(--color-primary);
        }
    }
    text-align: center;
    .image{
        border-radius: 17px;
        border: 2px dashed #F8F6F7;
        display: flex;
        align-items: center;
        justify-content: center;
        display: inline-block;
        transition: all .4s ease-in-out;
        img{
            width: 130px;
            padding: 2rem;
            background-color: #F4F7F7;
            margin: 1rem;
            border-radius: 7px;
        }
    }

    h4{
        color: var(--color-dark);
        padding: 1rem 0;
    }
    p{
        font-size: 1rem;
        line-height: 1.7rem;
    }
`;


export default ServiceItem

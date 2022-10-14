import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts';
import ServiceItem from './ServiceItem';
import Title from './Title';
import Search from '../img/search2.png';
import apply from '../img/apply2.svg';
import account from '../img/create_account.png';
import add from '../img/add.png';

function SectionService () {
    return (
        <SectionServiceStyled>
            <InnerLayout>
                <div className='title-con'>
                    <Title name="Services" para={'Lorem ipsum'} />
                </div>
                <div className="services-con">
                    <ServiceItem icon={account} name={'Create An Account'} para={'Lorem ipsum'} />
                    <ServiceItem icon={Search} name={'Create An Account'} para={'Lorem ipsum'} />
                    <ServiceItem icon={add} name={'Create An Account'} para={'Lorem ipsum'} />
                </div>
            </InnerLayout>
        </SectionServiceStyled >
    )
}

const SectionServiceStyled = styled.section`
    .services-con{
        padding-top: 3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        @media screen and (max-width: 972px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 673px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
export default SectionService;

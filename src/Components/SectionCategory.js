import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts';
import CatBtn from './CatBtn';
import Title from './Title';

function SectionCategory() {
    return (
        <SectionCategoryStyled>
            <InnerLayout>
                <div className="title-con">
                    <Title name={'All Categories'} para={'Lorem, ipsum dolor  sit amet consectetur'} />
                </div>
                <div className='category-con'>
                    <CatBtn name={'Game Development (600)'} />
                    <CatBtn name={'Game Design (1000+)'} />
                    <CatBtn name={'Digital Artist (3,400)'} />
                    <CatBtn name={'Product Manager (900)'} />
                    <CatBtn name={'Product Designer (108)'} />
                    <CatBtn name={'Researchers (26)'} />
                    <CatBtn name={'Web Designer (300)'} />
                    <CatBtn name={'Web Developer (1400+)'} />
                    <CatBtn name={'Ui / UX (2,300)'} />
                </div>
            </InnerLayout>
        </SectionCategoryStyled>
    )
}

const SectionCategoryStyled = styled.section`
    .category-con{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        padding-top: 3rem;
        @media screen and (max-width: 822) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

export default SectionCategory



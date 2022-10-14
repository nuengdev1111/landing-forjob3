import React from "react"
import styled from 'styled-components';
import logo from '../img/logo1.svg';
import hero from '../img/hero.jpg';
import search from '../img/search.svg';
import car from '../img/car.png';
/*eslint-disable*/
function Header() {
    return (
        <HeaderStyled>
            <nav className="navigation">
                <div className="nav-wrapper">
                    <div className="logo">
                        <img src={car} alt="" />
                    </div>
                    <ul className='nav-items'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Near Jobs</a>
                        </li>
                        <li>
                            <a href="#">Find Jobs</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <a href="#" className="cta-btn">+ Create Account</a>
                </div>
            </nav>

            <div className="header-content">
                <h1>
                    Over <span>10,000</span> jobs available <br />
                    You can choose your dream job
                </h1>
                <p className='main-para'>
                    Find Great job for build your bright
                </p>
                <div className="input-control">
                    <input type="text" placeholder='job Title or Keywords' />
                    <select name="location" id="location">
                        <option value="">London</option>
                        <option value="">Manchester</option>
                        <option value="">Liverpool</option>
                        <option value="">Swansea</option>
                    </select>
                    <select name="jobs" id="jobs">
                        <option value="dev">Game Development</option>
                        <option value="dev">Game Designing</option>
                        <option value="dev">Web Design</option>
                        <option value="dev">Web Development</option>
                        <option value="dev">UI / UX</option>
                    </select>
                    <button className='search-btn'>
                        <img src={search} alt="" />
                    </button>
                </div>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    min-height: 90vh;
    position: relative;
    background: linear-gradient(to top, rgba(0,0,0, 0.2), rgba(0,0,0, 0.5)), url(${hero}) no-repeat;
    .navigation{
        border-bottom: 0px solid #f4f7f777;
        .nav-wrapper{
            margin: 0 20rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 10vh;
            @media screen and (max-width: 1187px) {
                margin: 0 10rem;
            }
            @media screen and (max-width: 1187px) {
                margin: 0 5rem;
            }
        }
        .logo{
            img{
                width: 120px;
                padding-top: 1.3rem;
            }
        }
        ul{
            display: flex;
            align-items: center;
            li{
                margin: 0 1rem;
            }
        }
        .cta-btn{
            display: inline-block;
            background-color: var(--color-primary);
            padding: 1rem 1rem;
            border-radius: 7px;
            text-align: center;
        }
    }

    .header-content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: left;
        width: 60%;
        @media screen and (max-width: 1187px) {
            width: 80%;
        }
        h1{
            font-size: 3rem;
                span{
                    font-size: 5rem;
                    color: var(--color-primary);
                }
                @media screen and (max-width: 780px) {
                    font-size: 2rem;
                    span{
                        font-size: 3rem;
                    }
                }
            }

            .main-pata{
                padding: 2rem;
                color: var(--color-white);
            }

            .input-control{
                display: flex;
                justify-content: center;
                width: 100%;
                input, select{
                    background-color: var(--color-white);
                    padding: 0.8rem;
                    outline: none;
                    border: none;
                    margin-right: 50px;
                    border-radius: 17px;
                    font-size: inherit;
                    width: 40%;
                    color: #a1a1a1;
                    font-weight: 700;
                }
                input[type='text']::placeholder{
                    color: #a1a1a1;
                }
            }

            .search-btn{
                background-color: var(--color-primary);
                outline: none;
                border: none;
                padding: .5rem 2rem ;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 20px;
                cursor: pointer;
            }
        }


    @media screen and (max-width: 1018px) {
        .nav-items {
            display: none !important;
        }
    }
    @media screen and (min-width: 1025px) {
        .nav-items{
            display: flex !important;
        }
    }
`;

export default Header;

import React from 'react';
import styled from 'styled-components';

function JobCard({ bg, logo, name, loc, tit, type, stack, salary }) {
    return (
        <JobCardStyled>
            <div className="card-con">
                <div className="card-top">
                <img src={logo} alt="" />
                <div className="c-top-text">
                        <h5>{name}</h5>
                        <p>{loc}</p>
                    </div>
                </div>
                <h4 className="c-title">{tit}</h4>
                <p className="type" style={{color: bg}}>{type}</p>
                <p className="stack">{stack}</p>
                <div className="job-info">
                    <p>{salary} <span>/ Yearly</span></p>
                    <div className="btn">Apply Now</div>
                </div>
            </div>
        </JobCardStyled>
    )
}

const JobCardStyled = styled.div`
    background-color: var(--color-white);
    border-radius: 20px;
    transition: all .4s ease-in-out;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.01);
    &:hover{
        box-shadow: 3px 4px 30px rgba(2, 2, 2, 1.1);
        transform: translateY(-20px);
    }

    .card-con{
        padding: 2.3rem;
        .card-top{
            display: flex;
            align-items: center;
            padding-bottom: 1.2rem;
            .c-top-text{
                padding-left: 10rem;
                h5{
                    color: var(--color-dark);
                    transition: all .4s ease-in-out;
                    cursor: pointer;
                    font-size: 1.2rem;
                    &:hover{
                        color: var(--color-primary);
                    }
                }
                p{
                    font-size: 1rem;
                    padding-top: 0.3rem;
                }
            }

            img{
                padding: 1rem;
                background-color: var(--color-neutral-3);
                border-radius: 7px;
                width: 80px;
                height: 80px;
            }
        }
        .c-title{
            font-size: 1.6rem;
            color: var(--color-dark);
            cursor: pointer;
            transition: all .4s ease-in-out;
            padding-bottom: 1rem;
            &:hover{
                color: var(--color-primary);
            }
        }

        .type{
            padding-bottom: 1rem;
            font-weight: 600;
        }
        .stack{
            padding-bottom: 1.2rem;
            line-height: 2.2rem;
            font-size: 1rem;
        }

        .job-info{
            display: flex;
            align-items: center;
            justify-content: space-between;
            p{
                color: var(--color-primary);
                font-size: .9rem;
                span{
                    color: #656565;
                    font-size: 1rem;
                }
            }

            .btn{
                background-color: var(--color-primary);
                font-weight: 500;
                padding: .6rem .9rem;
                cursor: pointer;
                border-radius: 7px;
                text-align: center;
            }
        }
    }
`;

export default JobCard;

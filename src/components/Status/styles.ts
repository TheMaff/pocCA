import styled from 'styled-components'

export const Container = styled.div`
    padding: 1rem;
    display: block;
    background: #F5F5F5;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1), 0px 0px 5px 3px rgba(0, 0, 0, 0.07);
    border-radius: 12px;
    margin: .5rem 0;

    h3 {
        font-family: 'BentonSans';
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 14px;
        margin:0;
    }

    div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        ul {
            padding:0;
            margin: 0;
            li {
                font-family: 'BentonSans';
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                list-style: none;
                padding: 0;
                margin: .5rem 0;
                display: flex;
                align-items: center;
                span {
                    margin-right: .5rem;
                    &.square {
                        width: 16px;
                        height: 16px;
                        background: #ddd;
                        display: inline-block;
                    }
                }
            }
        }
    }
`
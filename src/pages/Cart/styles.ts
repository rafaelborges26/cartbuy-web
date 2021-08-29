import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    max-width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 100%;
    height: 70%;


    a{
        text-decoration: none;
    }

`;

export const TitleCart = styled.h2`
    font-size: 36px;
    font-family: 'Roboto';

    margin: 50px 0;

`;

export const SubtitleCart = styled.p`
    color: #E5383B;
    cursor: pointer;
    
    transition: 0.2s;
    
    &:hover {
        color: ${shade(0.2, '#E5383B')} 
    }

`;

export const ContainerCarts = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
`;

export const CartItem = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    align-items: inherit;

    width: 100%;
    height: 150px;
    justify-content: center;
    gap: 2px;

    img {
        width: 100px;
        height: 100px;
    }
`;

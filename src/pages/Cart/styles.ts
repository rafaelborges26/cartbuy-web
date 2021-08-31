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
    flex-direction: row;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    align-items: center;
    justify-content: space-between;


    width: 100%;
    height: 125px;

    @media (max-width: 660px) {
        height: 100px;

    }

`;

export const DescriptionCart = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    text-align: left;
    
    align-items: flex-start;
    justify-content: flex-start;

    img {
        width: 100px;
        height: 100px;
    }

    @media (max-width: 660px) {
        img {
            width: 80px;
            height: 80px;
        }
    }
    

    
`;

export const TextsCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
    padding: 10px 0;

    align-items: flex-start;
    justify-content: flex-start;
    

    h5 {
        font-size: 18px;
        font-weight: 300;
    }

    span {
        font-size: 16px;
        font-weight: bold;
    }

    @media (max-width: 660px) {
        h5 {
        font-size: 14px;
    }

    span {
        font-size: 12px;
    }
    }
`;

export const EditItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;

    svg {
        align-items: center;
        color: black;
        cursor: pointer;
        
    }

`;

export const QuantityCart = styled.div`
    display: flex;
    flex-direction: row;

    

    gap: 5px;

    svg {
        color: #E5383B;
        cursor: pointer;
    }
`;

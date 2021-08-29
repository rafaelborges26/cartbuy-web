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
    width: 100%;

`;

export const ContainerCart = styled.div`
    display: flex;    
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    gap: 10px;
    margin: 50px 60px 20px 50px;

    @media (max-width: 660px) {
        margin: 30px 20px 20px 20px;
        }

    h5 {
        font-size: 12px;
        font-family: '';
        font-weight: bold;
        height: 30px;
        align-items: center;
    }
    

`;

export const Cart = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;


    width: 300px;
    height: 370px;
    align-items: center;
    
    justify-content: center;
    gap: 2px;

    img {
        width: 270px;
        height: 300px;
    }


    @media (max-width: 660px) {
        width: 150px;
        height: 200px;
        
        img {
        width: 120px;
        height: 170px;
        }

    }
`;

export const Title = styled.span`
    font-size: 18px;
    font-family: 'Oxygen', sans-serif;
    color: #1C1C1C;
    
    @media (max-width: 660px) {
        font-size: 12px;
    }
`;

export const Price = styled.h6`
    font-size: 16px;
    font-family: 'Oxygen', sans-serif;
    color: #1C1C1C;    


    @media (max-width: 660px) {
        font-size: 14px;
    }
`;

export const AddCart = styled.button`
    font-size: 16px;
    font-family: 'Oxygen', sans-serif;
    color: #E5383B;
    background: transparent;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;

    cursor: pointer;
    
    @media (max-width: 660px) {
        font-size: 12px;
    }
`;

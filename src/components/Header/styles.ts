import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 20%;
    background: #A4161A;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;

    h4 {
        font-size: 24px;
    }

    a {
            text-decoration: none;
    }

    .CartButton {
        display: flex;
        cursor: pointer;
        
        align-items: center;
        justify-content: center;
        align-content: center;
        color: #22223b;


        button {
            margin-right: 5px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            background: transparent;
            transition: color 1s;            
            color: #22223b;;
            

            font-size: 18px;
 
        }
        svg {
            width: 25px;
            height: 25px;
            color: #22223b;
        }

    }   
`;

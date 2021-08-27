import styled from 'styled-components';

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

    .CartButton {
        cursor: pointer;

        button {
            margin-right: 5px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            background: transparent;

            font-size: 18px;
        }
        svg {
            width: 25px;
            height: 25px;
        }
    }   
`;

import styled from "styled-components";

export const Page = styled.div`
  background: #f1f3f6;
  min-height: 100vh;
`;

export const Navbar = styled.div`
  background: #2874f0;
  color: white;
  padding: 15px 30px;
  font-size: 20px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

export const Sidebar = styled.div`
  width: 250px;
  background: white;
  padding: 20px;
  border-radius: 5px;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #fb641b;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #e55b17;
  }
`;

export const Card = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

export const ProductName = styled.h4`
  margin: 0;
`;

export const Price = styled.span`
  color: green;
  font-weight: bold;
`;

export const Supplier = styled.p`
  margin: 5px 0 0 0;
  color: #777;
`;

export const Message = styled.p`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  color: #555;
`;

export const ErrorText = styled.p`
  background: #ffe6e6;
  color: red;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`;
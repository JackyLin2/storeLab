import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import {Badge} from '@material-ui/core'
import {ShoppingCartOutlined} from '@material-ui/icons'

export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
               <Left> <Language> EN </Language> 
               <SearchContainer>
                   <Input/>
                   <SearchIcon style={{color: "gray", fontSize:"16px"}}/>
               </SearchContainer>
               </Left> 
               <Center> 
                    <Logo>
                        StoreLab
                    </Logo>
                </Center>
               <Right>

                <MenuItem>  Register </MenuItem>
                <MenuItem>  Sign In </MenuItem>
                <MenuItem>  
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>

               
               </Right>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-item: center;
`

const Left = styled.div`
   flex: 1;
   display: flex;
   align-item: center;
`

const Center = styled.div`
 flex: 1;
 text-align: center;
`
const Right = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-item: center;
  justify-content: flex-end;
`

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-item: center;
    margin-left: 25px;
    padding: 5px
`
const Input = styled.input`
    border: none;
`
const Logo = styled.h1`
    font-weight: bold;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px
`
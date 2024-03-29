import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  position: relative;
  padding: 40px;
  width: 100vw;
  height: 100vh;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled(Row)`
  padding: 20px;
  background-color: #eee;
`
export const Container = styled(Row)`
  flex-grow: 2;
  padding: 20px;
  width: 1170px;
`
export const Footer = styled(Row)`
  padding: 20px;
  a {
    text-decoration: none;
  }
`

export const FormField = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  label {
    flex-grow: 1;
  }

  input {
    padding: 4px;
    background-color: #eee;
    border-radius: 4px;
    border: 1px solid #777;
    margin-left: 4px;
    flex-grow: 2;

    :invalid {
      border-color: crimson !important;
      background-color: crimson;
      color: white;
    }
  }

  button {
    padding: 4px;
    border-radius: 4px;
    background-color: green;
    color: white;
    padding-left: 12px;
    padding-right: 12px;
    flex-grow: 2;
  }
`

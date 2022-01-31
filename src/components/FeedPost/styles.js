import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #18191a;
  width: 900px;
  height: 100%;
`
export const Content = styled.p`
  width: 500px;
  padding: 10px;
  font-size: 14px;
  text-align: left;
  color: white;
  display: flex;
  align-items: left;
`

export const Card = styled.div`
  background: #2a2a2a;
  width: 600px;
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    padding: 10px;
  }
`

export const Footer = styled.div`
  border-top: 1px #ffffff solid;
  color: white;
  height: 50px;
  width: 450px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Timeout = styled.p`
  font-size: 16px;
  color: white;
`

export const LikeCounter = styled.p`
  font-size: 16px;
`

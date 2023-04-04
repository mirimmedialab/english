import {Box, Button, Container, Typography} from "@mui/material";
import styled from '@emotion/styled';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {useState} from "react";
import { useRouter } from 'next/navigation';
import {IoIosArrowBack} from 'react-icons/io'

export default function Page02() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleTest = () => {
    router.push('/test');
  };
  const handleLearning = () => {
    router.push('/learning');
  };
  const handleBack = () => {
    router.replace('/')
  }

  return (
    <>
      <EmergencyBox>

        <LearningListHeader>
          <IoIosArrowBack  style={{fontSize:'24px' , display:'flex' , alignItems:'center', cursor:'pointer'}} onClick={handleBack}  />
          {/*<FiChevronLeft style={{marginTop: '12px', fontSize: '1.7rem', lineHeight: '50px', fontWeight: '800'}}/>*/}
          {/*<Typography sx={{fontWeight: '800', fontSize: '1.5rem', lineHeight: '50px', marginLeft: '15px'}}>*/}
          {/*  오늘의 영단어*/}
          {/*</Typography>*/}
          <LearningListHeaderTypo>
            영어 단어 리스트
          </LearningListHeaderTypo>
        </LearningListHeader>
        <Page02Container>



          {/*<ListSection onClick={() => setShowModal(true)}>*/}
          {/*  <ListStatusBox>*/}
          {/*    <Typography sx={{fontSize: '15px', lineHeight: '25px', ml: '5px'}}>학습완료</Typography>*/}
          {/*  </ListStatusBox>*/}
          {/*  <ListTitleBox>*/}
          {/*    <Typography sx={{fontSize: '25px', lineHeight: '40px', ml: '5px', width: '91%'}}>Part 1</Typography>*/}
          {/*    <FiChevronRight style={{marginTop: '6px', fontSize: '1.7rem', fontWeight: '800', justifyContent:'flex-end'}}/>*/}
          {/*  </ListTitleBox>*/}
          {/*  <ListProgressWrap sx={{mt: '-5px'}}>*/}
          {/*    <ListProgressBox>*/}
          {/*      <ListProgressSuccessBar/>*/}
          {/*    </ListProgressBox>*/}
          {/*    <ListProgressString>*/}
          {/*      <Typography sx={{fontSize: '11px', lineHeight: '20px', ml: '5px'}}>학습률: 121 / 121</Typography>*/}
          {/*    </ListProgressString>*/}
          {/*  </ListProgressWrap>*/}
          {/*</ListSection>*/}

          {/*{[...Array(0)].map((value, index) => (*/}
          {/*  <ListSection key={index}>*/}
          {/*    <ListStatusBox>*/}
          {/*      <Typography sx={{fontSize: '15px', lineHeight: '25px', ml: '5px'}}>미학습</Typography>*/}
          {/*    </ListStatusBox>*/}
          {/*    <ListTitleBox>*/}
          {/*      <Typography sx={{fontSize: '25px', lineHeight: '40px', ml: '5px', width: '91%'}}>Part {index + 1 + 1}</Typography>*/}
          {/*      <FiChevronRight style={{marginTop: '6px', fontSize: '1.7rem', fontWeight: '800', justifyContent:'flex-end'}}/>*/}
          {/*    </ListTitleBox>*/}
          {/*    <ListProgressWrap sx={{mt: '-5px'}}>*/}
          {/*      <ListProgressBox>*/}
          {/*        <ListProgressBar/>*/}
          {/*      </ListProgressBox>*/}
          {/*      <ListProgressString>*/}
          {/*        <Typography sx={{fontSize: '11px', lineHeight: '20px', ml: '5px'}}>학습률: 0 / 121</Typography>*/}
          {/*      </ListProgressString>*/}
          {/*    </ListProgressWrap>*/}
          {/*  </ListSection>*/}
          {/*))}*/}

          <ListSection onClick={() => setShowModal(true)}>
            <ListStatusBox>
              {/*<Typography sx={{fontSize: '15px', lineHeight: '25px', ml: '5px'}}>학습완료</Typography>*/}
              {/*<img className={'imgimgimg'} src={'https://cdn.discordapp.com/attachments/1092315426643529748/1092693124549193758/1000_F_85589730_Lc3DaDkOfFtkmmXnewggPkWd3ZMKoXUz.png'}/>*/}
              <img className={'imgimgimg'} src={'https://cdn.discordapp.com/attachments/1092315426643529748/1092704626685517824/1000_F_574288383_MIsTAjC100kIGIJxPbWfqvcSxzqhLgaS.png'}/>
            </ListStatusBox>
            <ListTitleBox>
              <Typography className={'ListTitleBoxTypo'} sx={{fontSize: '25px'}}>Part 1</Typography>
              {/*<FiChevronRight className={'BackIcon'} style={{fontSize: '1.7rem', fontWeight: '800'}}/>*/}
            </ListTitleBox>
            <ListProgressWrap sx={{mt: '-5px'}}>
              <ListProgressBox>
              </ListProgressBox>
              <ListProgressString>
                <Typography sx={{fontSize: '11px', lineHeight: '20px', ml: '5px'}}>학습률: 121 / 121</Typography>
              </ListProgressString>
            </ListProgressWrap>
          </ListSection>

        </Page02Container>
      </EmergencyBox>

      {showModal &&
        <Modalchang>
          <Box className="modal-content" >
            
            <Typography>선택해주세요</Typography>
            <HiButton variant="contained" color="warning" onClick={() => handleLearning()}>단어장</HiButton>
            <HiButton variant="contained" color="primary" onClick={() => handleTest()}>테스트</HiButton>
            <HiButton variant="contained" color="error" onClick={() => setShowModal(false)}>닫기</HiButton>
              
          </Box>
        </Modalchang>
      }
    </>
  )
}
const EmergencyBox = styled(Box)`
  width: 100%;
  background-color: white;
  max-width: 1024px;
  margin: 0 auto;
`

const Page02Container = styled(Box)`
  max-width: 1024px;
  min-width: 360px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top:8px;
`;


const TitleSection = styled(Box)`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-bottom: 2px solid #bebebe;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`

const LearningListHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 12px 4px;
  border-bottom: 1px solid #cccccc;
`

const ListSection = styled(Box)`
  width: 83%;
  height: 350px;
  box-sizing: border-box;
  //border: 1px solid #d6d6d6;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px #d6d6d6;
  //padding: 3px;
  cursor: pointer;
`
const ListStatusBox = styled(Box)`
  width: 100%;
  height: 40%;
  color: hotpink;
  //object-fit: contain;
  border: 1px solid red;
  
  .imgimgimg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`
const ListTitleBox = styled(Box)`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: center;
  
  .ListTitleBoxTypo {
    margin-right: auto;
    margin-left: 10px;
  }
  
  .BackIcon {
    color: blue;
    margin-left: auto;
    margin-right: 5px;
  }
`

const ListProgressWrap = styled(Box)`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`

const ListProgressBox = styled(Box)`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: center;
  vertical-align: center;
`

const ListProgressSuccessBar = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  border: 2px solid pink;
  border-radius: 5px;
  background-color: pink;
`

const ListProgressBar = styled(Box)`
  width: 98%;
  height: 90%;
  box-sizing: border-box;
  border: 2px solid pink;
  border-radius: 5px;
`

const ListProgressString = styled(Box)`
  height: 100%;
  margin-left: auto;
  margin-right: 20px;
`
////////////////////////////////////////////////////////////////////////////////////
const Modalchang = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    width: 250px;
    height: 200px;
    border-radius: 10px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`

const HiButton = styled(Button)`
  width: 100%;
  
  &:first-of-type {
    margin-top: 30px;
    margin-bottom: 5px;
  }
  &:last-of-type {
    margin-top: 30px;
  }
`


const LearningListHeaderTypo = styled.div`
  font-size: 20px;
  height: 24px;
  margin-left: 4px;
  display: flex;
  align-items: center;
`


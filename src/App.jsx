import React, { useEffect, useRef, useState } from 'react';
import { Provider, Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction,
  // ScrollDownIndicator,
  Flex, Phone, Laptop, SignUp,
  Contributor
} from 'react-landing-page'
import styledComponents from 'styled-components';
import Android from './icons/android';
import { AppleIcon } from './icons';
import styled from "styled-components";
import Windows from './icons/Windows';
import Macos from './icons/Macos';
import Linux from './icons/Linux';
import Faq from "react-faq-component";
// import UAParser from "ua-parser-js";
// import videojs from 'video.js';
// import Videojs from './components/videojs';
// import 'video.js/dist/video-js.css';
import CLOSEbtn from "./icons/Close"
import Intel from './icons/intel';
import M1Mac from './icons/M1Mac';

const Faqstyles = {
  bgColor: '#ffffff00',
  titleTextColor: "black",
  rowTitleColor: "white",
  rowContentColor: 'black'
};
const Faqdata = {
  title: "FAQ",
  rows: [
    {
      title: "Comment installer l'application sur windows?",
      content: `téléchargez l'application depuis le site Web vighette.kmoz.dev. 
      save the exe file and click on it two time to start installing.
      continuez à cliquer sur suivant. 
      félicitations, vous l'avez installé avec succès. la prochaine étape consiste à faire une demande de licence de démonstration.`,
    },
    {
      title: "Comment obtenir une licence et comment l'utiliser?",
      content:
        `Demandez votre licence de démonstration par e-mail à: kimo@oldi.dev et nous vous enverrons une toute nouvelle licence qui vous réservera une place dans le groupe de test.
        après avoir installé l'application, il vous sera demandé une licence . assurez-vous d'entrer la licence que vous avez reçue de notre part dans le champ sans espaces.
        après cela, vous obtiendrez un code QR qui sera scanné avec google authenticator et cliquez sur Retour pour vous connecter.
        demo license is valid for 1 master machine (first machine to use the licence) that will have access to all vignettes entered by others live machines (machines that used license after it's been used first time by master machine.
        la licence de démonstration peut avoir jusqu'à 20 machines pendant un mois.`,
    }
  ],
};
const Faqconfig = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
// var $ =  window.$;
function App() {
  // let device = new UAParser();
  // console.log(device.getDevice());

  const [isVideo0Open, setVideo0Open] = useState(false)
  // useEffect(() => {
  //   var $hidden = document.querySelector(".video0");
  //   // let el = document.querySelector(".video-0");
  //   let Video0Open = document.querySelector(".video0 video");
  //   let ev =
  //     el?.addEventListener("click", () => {
  //       // ModalVideo
  //       if ($hidden.classList.contains('showvideo')) {
  //         console.log($hidden.classList.contains('showvideo'));
  //         // $hidden.classList.remove('showvideo');
  //         Video0Open.pause();
  //       } else {
  //         $hidden.classList.add('showvideo');
  //         Video0Open.play();
  //       }
  //       // if ($hidden.classList.contains('showvideo')) {
  //       //   $hidden.classList.remove('showvideo');
  //       //   if (Video0Open) {
  //       //     Video0Open.pause();
  //       //   }
  //       // } else {

  //       //   if (Video0Open) {
  //       //   }
  //       // }
  //     })
  //   return () => {
  //     // el.removeEventListener("click", ()=>null, { passive: true });
  //     // setVideo0Open(false)
  //   }
  // }, [isVideo0Open])

  // useEffect(() => {

  // }, [isVideo0Open])

  return (
    <>
      <Provider>
        <HeroStyled
          className={"hero0"}
          color='white'
          bg='#06a846'
          backgroundImage='https://res.cloudinary.com/dupagadir/image/upload/v1651393997/alina-grubnyak-ZiQkhI7417A-unsplash_2_dvfby8.jpg'
        >
          <Flex flexWrap={"wrap"} flexDirection="column" mt={50} justifyContent="space-around" alignItems={"center"}>
            <Flex
              className={"hero1"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"space-around"}
              id={"desktop"}
            >
              <HeadingStyled pt={100} >Application de bureau</HeadingStyled>
              <Subhead fontSize={[2, 3]}>Capture d'écran & lien de téléchargement</Subhead>
              <Flex mt={2} flexWrap='wrap' justifyContent='center'>
                <CallToActionStyled
                  onClick={() => document.location.assign("https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/vpnworld.Setup.4.5.0.exe")}
                  mt={3} bg='black'><Windows style={{
                    marginRight: 10
                  }} size={20} /> Windows</CallToActionStyled>

                <CustomPicker  >
                  <Macos style={{
                    marginRight: 10
                  }} size={20} />
                  <p>Mac OS</p>
                  <div className='insider'>
                    <CallToActionStyled onClick={() => document.location.assign("https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/vpnworld-4.5.0.pkg")} mt={3} bg='black'>
                      <Intel style={{
                        marginRight: 10
                      }} />
                      Intel CPU</CallToActionStyled>
                    <CallToActionStyled onClick={() => document.location.assign("https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/vpnworld-4.5.0-arm64.pkg")} mt={3} bg='black'>
                      <M1Mac
                        style={{
                          marginRight: 10
                        }}
                      />
                      M1 CPU</CallToActionStyled>
                  </div>
                </CustomPicker>
                <CallToActionStyled onClick={() => document.location.assign("https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/vpnworld_4.5.0_amd64.deb ")} mt={3} bg='black'><Linux style={{
                  marginRight: 10
                }} size={20} /> Linux (arm64/i32)</CallToActionStyled>
              </Flex>
              {/* https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/vpnworld_4.5.0_amd64.deb */}
              <Laptop mt={3} src={"https://res.cloudinary.com/dup-sarl/video/upload/v1658103394/Screen_Recording_2022-07-18_at_1.02.44_AM_fpbw5u.gif"} />
            </Flex>
            <Flex justifyContent={"space-around"} flexDirection={"column"}>
            <Heading textAlign="center">Made with ❤ by</Heading>
            <Flex justifyContent="space-around">
              <Contributor
                fullName="Ouazmir Abdelkarim"
                title="developer"
                avatar="https://kmoz.dev/_next/image?url=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4D03AQFMjxSy2_Z9zw%2Fprofile-displayphoto-shrink_800_800%2F0%2F1649639681159%3Fe%3D1660176000%26v%3Dbeta%26t%3DEN_dlPZFziFauM3GZ4g076HOAwen0APScREA63iOdOo&w=3840&q=75"
              >
                <Flex>
                  <NavLink href='https://github.com/KM8Oz'>GitHub</NavLink>
                  <NavLink href='https://www.linkedin.com/in/km8oz/'>LinkedIn</NavLink>
                </Flex>
              </Contributor>
            </Flex>
            </Flex>
          </Flex>
          <Flex mt={10} ml={10} mr={10} mb={20} style={{
            maxWidth: 800
          }} flexWrap='wrap' justifyContent='center'>
            <Faq
              data={Faqdata}
              styles={Faqstyles}
              config={Faqconfig}
            />
          </Flex>
          <Flex width={[1]} mb={100} flexDirection={"column"} mt={10} flexWrap='wrap' alignItems={"center"} justifyContent='center'>
            <HeadingStyled >Obtenez votre licence de démonstration maintenant (valide pour 1 mois et 20 machine )</HeadingStyled>
            <SignUp color={"#000"} label="электронная почта" onSubmit={(email) => window.location.assign("mailto:cloud0@markate.ru?Bcc=" + email + "&Subject=" + encodeURIComponent("vpnworld releases subscription") + "&body=" + encodeURIComponent("i would like to subscribe for you news latter related to vpnworld."))} mt={3} />
          </Flex>
          <Flex width={[1]} is="footer" alignItems="center" justifyContent={"space-between"} p={3}>
            <Flex is='left-footer' alignItems={"center"} justifyContent={"flex-start"} >
              <NavLink children="desktop" href="#desktop" />
            </Flex>
            <Small color="#fff" ml="auto">© kmoz.dev, 2022-2025</Small>
          </Flex>
        </HeroStyled>
      </Provider>
    </>
  );
}
const HeadingStyled = styledComponents(Heading)`
    text-align: center;
`;
const NavLink = styledComponents.a`
  font-size:14px;
  margin-left:10px;
`;
const Small = styledComponents.span`
  font-size:14px;
`;
// const ScrollDownIndicatorStyled = styledComponents(ScrollDownIndicator)`
//   cursor: pointer;
// `;
const HeroStyled = styledComponents(Hero)`
      overflow:hidden;
`;
const CallToActionStyled = styledComponents(CallToAction)`
    margin: 10px;
    max-height:45px;
    min-width:230px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const AndroidStyled = styledComponents(Android)`
    margin: 0px 3px;
`;

const Name = styled.span`
    color: #222;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;
const CustomPicker = styled.div`
margin: 10px;
max-height: 45px;
cursor: pointer;
border-radius: 4px;
p {
  text-transform: uppercase;
-webkit-letter-spacing: 0.1em;
-moz-letter-spacing: 0.1em;
-ms-letter-spacing: 0.1em;
letter-spacing: 0.1em;
appearance: none;
font-size: 14px;
font-weight: 700;
line-height: 1.1428571428571428;
}
position: relative;
overflow: visible;
.insider{
  transition: all ease-in-out 100ms;
  /* box-shadow: 0px 2px 0px 1px #000; */
  position: absolute;
  
  transform: scale(0);
  opacity: 0;
}
.insider:hover{
  transform: scale(1);
  bottom: 50px;
  opacity: 1;
}
:hover{
  .insider{
    bottom: 50px;
    opacity: 1;
  transform: scale(1);
  }
}
min-width: 230px;
display: -webkit-box;
display: -webkit-flex;
background-color: #000;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`;
const VideoWarpper = styled.div`
  display: ${({ isopen }) => isopen ? "block" : "none"};
`;
export default App;

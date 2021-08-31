import {Button} from '../../Globalstyles';

import {
    FooterSection,
    FooterContainer,
    FooterNewsletter,
    FooterNewsletterTitle,
    FooterNewsletterText,
    FooterNewsletterForm,
    FooterLinkContainer,
    FooterLinksWrapper,
    FooterLinks,
    FooterLinkTitle,
    FooterLink,
    FooterCopyRight,
    FooterNewsletterSubTitle,
    DropDownContent,
    SubA,
    DropDownLi,
    WalletIcon
} from './Footer.styles';
function Footer(props) {
    return (
        <div>
            <FooterSection>
                <FooterContainer>
                    <FooterNewsletter>
                        <FooterNewsletterTitle>Start in seconds</FooterNewsletterTitle>
                        <FooterNewsletterText>Connect your celo wallet to start order food in seconds</FooterNewsletterText>
                        <FooterNewsletterSubTitle>No registration needed.</FooterNewsletterSubTitle>
                        <FooterNewsletterForm>
                            {props.address == undefined
                            ?
                            <Button primary bigFont onClick={props.connectCeloWallet}>Connect Wallet</Button>
                            :<DropDownLi>
                                <Button primary bigFont><WalletIcon/>0x...{props.address.substr(-12)}</Button>
                                <DropDownContent>
                                    <SubA>USD Balance: ${props.cUSDBalance}CUSD</SubA>
                                    <SubA>Celo Balance: ${props.celoBalance}</SubA>
                                </DropDownContent>
                            </DropDownLi>
                            }
                        </FooterNewsletterForm>
                    </FooterNewsletter>
                    <FooterLinkContainer>
                        <FooterLinksWrapper>
                            <FooterLinks>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/'>Our partner</FooterLink>
                                <FooterLink to='/'>Testimonials</FooterLink>
                                <FooterLink to='/'>Terms of service</FooterLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>Services</FooterLinkTitle>
                                <FooterLink to='/about'>How it works</FooterLink>
                                <FooterLink to='/'>Booking a table</FooterLink>
                                <FooterLink to='/'>Delivery food</FooterLink>
                            </FooterLinks>

                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinks>
                                <FooterLinkTitle>Resources</FooterLinkTitle>
                                <FooterLink to='/'>Recipes</FooterLink>
                                <FooterLink to='/'>FAQ &amp; Support</FooterLink>
                                <FooterLink to='/'>Affiliate Program</FooterLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                            </FooterLinks>
                            
                        </FooterLinksWrapper>
                    </FooterLinkContainer>
                    <FooterCopyRight to='https://github.com/anhnt4288'> &copy; Copyright 2021, Designed and coded with 💛 by anhnt4288</FooterCopyRight>
                </FooterContainer>
            </FooterSection>
            
        </div>
    )
}

export default Footer;

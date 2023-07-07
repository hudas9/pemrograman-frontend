import StyledHero from './Hero.styled'
import MedicalCare from '../../assets/images/MedicalCare.svg'
import {
  Heading,
  SubHeading,
  Image,
  Button,
  Text,
} from '../styled/ui-components'

export default function Hero() {
  return (
    <StyledHero>
      <section>
        <div>
          <Heading align="left" sm="center">
            Covid App
          </Heading>
          <SubHeading align="left" sm="center">
            Covid-19 Monitoring
          </SubHeading>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </Text>
          <Button w="150px">Vaccine</Button>
        </div>
        <div>
          <Image
            src={MedicalCare}
            alt={MedicalCare}
            maxWidth="50%"
            align="center"
            mb="2rem"
          />
        </div>
      </section>
    </StyledHero>
  )
}

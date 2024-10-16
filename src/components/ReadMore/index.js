import {useState} from 'react'

import {
  AppContainer,
  MainHeading,
  SubHeading,
  ImgParaContainer,
  ImgComponent,
  ParaComponent,
  ButtonComponent,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)

  const onClickedButton = () => {
    setIsReadMore(prevState => !prevState)
  }

  const buttonText = isReadMore ? 'Read Less' : 'Read More'
  const paraText = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  return (
    <AppContainer>
      <MainHeading>React Hooks</MainHeading>
      <SubHeading>Hooks are a new addition to React</SubHeading>
      <ImgParaContainer>
        <ImgComponent
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <ParaComponent>{paraText}</ParaComponent>
      </ImgParaContainer>
      <ButtonComponent onClick={onClickedButton}>{buttonText}</ButtonComponent>
    </AppContainer>
  )
}
export default ReadMore

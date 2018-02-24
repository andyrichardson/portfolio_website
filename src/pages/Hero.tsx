import { Button, Col, Icon, Layout, Row, Tag } from 'antd';
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer, FlexItem } from '../components/Flex';
import { HeaderContainer, HeaderText } from '../components/Header';

type Props = any;
type State = any;

const tagColors: string[] = [
  'green',
  'magenta',
  'blue',
  'volcano',
  'cyan',
  'purple',
  'gold',
  'geekblue',
  'lime',
  'orange',
];

const tags: string[] = [
  'full stack developer',
  'team leader',
  'software architect',
  'blockchain enthusiast',
  'react developer',
];

const tagDuration = 4000;
const animationDuration = 900;

//
// .ant-tag {
//   margin-top: 20px;
//   opacity: 0;
//   transition: opacity 900ms ease-in-out;
//
//   &.fadeIn {
//     opacity: 1;
//   }
// }


const ButtonContainer = FlexItem.extend`
  text-align: center;
  font-size: 24px;
  transition: transform 300ms ease-out;
  transform: translateX(100vw);

  a {
    color: #444;
  }

  &.animate-in {
    transform: translateX(0vw);
  }
`;

const SubheaderText = styled.h2`
  transition: transform 300ms ease-out;
  transform: translateX(100vw);

  &.animate-in {
    transform: translateX(0vw);
  }
`;

export default class Hero extends Component<Props, State> {
  public state: State = {
    buttonIn: false,
    headerIn: false,
    subheaderIn: false,
  };

  public componentDidMount() {
    setTimeout(() => this.setState({headerIn: true}), 200);
    setTimeout(() => this.setState({subheaderIn: true}), 300);
    setTimeout(() => this.setState({buttonIn: true}), 400);
    this.animateTags();
  }

  public render() {
    return (
      <FlexContainer className="flexContainer">
        <HeaderContainer>
          <HeaderText className={(this.state.headerIn) ? 'animate-in' : ''}>
            Hi there.
          </HeaderText>
          <SubheaderText className={(this.state.subheaderIn) ? 'animate-in' : ''}>
            My name is Andy. I am a...
            <div>
              <Tag color={this.state.tagColor} className={this.state.tagClass}>
                {this.state.tagText}
              </Tag>
            </div>
          </SubheaderText>
        </HeaderContainer>

        <ButtonContainer className={(this.state.buttonIn) ? 'animate-in' : ''}>
          <Link to="/about">
            <Icon type="arrow-right" />
          </Link>
        </ButtonContainer>
      </FlexContainer>
    );
  }

  private animateTags() {
    let i = 0;
    this.showTag(i++);
    setInterval(() => this.showTag(i++), tagDuration);
  }

  private showTag(index: number) {
    this.setState({
      tagText: tags[index % tags.length],
      tagColor: tagColors[index % tagColors.length],
    });
    setTimeout(() => this.setState({ tagClass: 'fadeIn' }), 40);
    setTimeout(() => this.setState({tagClass: ''}), tagDuration - animationDuration + 40);
  }
}
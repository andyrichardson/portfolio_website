import { Col, Icon, Row } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer, FlexItem } from '../components/Flex';
import { HeaderContainer, HeaderText } from '../components/Header';
import ProjectItem from '../components/ProjectItem';

type Props = any;
type State = any;

const projects: any[] = [
  {
    description: 'Be notified of updates to Atom and install without leaving the editor.',
    downloads: 1000,
    link: 'https://atom.io/packages/atom-updater-linux',
    repo: 'https://github.com/andyrichardson/atom-updater-linux',
    tags: ['Atom', 'Open Source'],
    title: 'Atom Updater Linux',
  },
  {
    description: 'Npm package for retrieving a users contributions made in the last year',
    repo: 'https://github.com/andy-richardson/github-yearly-contributions',
    tags: ['npm', 'Open Source'],
    title: 'Github Yearly Contributions',
  },
  {
    description: 'Personal website',
    repo: 'https://github.com/andy-richardson/portfolio-website',
    tags: ['React', 'Open Source'],
    title: 'Portfolio Website',
  },
];

const ProjectsContainer = FlexItem.extend`
  display: flex;
  flex-direction: column;

  & > div {
    min-width: 100%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1023px) {
    display: block;
    padding: 0;
  }
`;

const ProjectItemContainer = styled.div`
  transition: transform 500ms ease-out;
  transform: translateX(100vw);

  &.animate-in {
    transform: translateX(0);
  }
`;

const ButtonContainer = FlexItem.extend`
  text-align: center;
  font-size: 24px;
  position: absolute;
  right: 5%;
  transition: transform 300ms ease-out;
  transform: translateY(100vh);

  a {
    color: #444;
  }

  &.animate-in {
    transform: translateY(0vh);
  }

  @media screen and (max-width: 1023px) {
    display: block;
    position: inherit;
    max-height: min-content;
  }
`;

export default class Projects extends Component<Props, State> {
  public state: State = {
    buttonIn: false,
    headerIn: false,
    project1: false,
    project2: false,
    project3: false,
  };

  public componentDidMount() {
    setTimeout(() => this.setState({headerIn: true}), 200);
    setTimeout(() => this.setState({project1: true}), 600);
    setTimeout(() => this.setState({project2: true}), 1200);
    setTimeout(() => this.setState({project3: true}), 1800);
    setTimeout(() => this.setState({buttonIn: true}), 2600);
  }

  public render() {
    const projectItems = projects.map((item: any, i: number) => {
      return (
        <ProjectItemContainer
          key={i}
          className={(this.state[`project${i + 1}`]) ? 'animate-in' : ''}
        >
          <ProjectItem
            title={item.title}
            description={item.description}
            tags={item.tags}
            repo={item.repo}
            link={item.link}
            downloads={item.downloads}
          />
        </ProjectItemContainer>
      );
    });

    return (
      <FlexContainer>
        <HeaderContainer>
          <HeaderText className={(this.state.headerIn) ? 'animate-in' : ''}>
            Here are my recent projects
          </HeaderText>
        </HeaderContainer>

        <ProjectsContainer>
          {projectItems}
        </ProjectsContainer>

        <ButtonContainer className={(this.state.buttonIn) ? 'animate-in' : ''}>
          <Link to="/projects">
            <Icon type="arrow-right" />
          </Link>
        </ButtonContainer>
      </FlexContainer>
    );
  }
}
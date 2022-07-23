import * as React from 'react';

import styled from 'styled-components';
import { TransitionStatus } from 'react-transition-group/Transition';

import * as SharedTypes from '../../../types/css';

// ==========================
// types
// ==========================
export type Props = {
  duration?: SharedTypes.CSSProperties['animationDuration'];
  color?: SharedTypes.CSSProperties['color'];
  size?: SharedTypes.CSSProperties['fontSize'];
};

// ==========================
// component
// ==========================
export const Component: React.FC<Props> = (props) => (
  <Overlay>
    <Element duration={props.duration} color={props.color} size={props.size} />
  </Overlay>
);

// ==========================
// styles
// ==========================

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.5s;
`;

type ElementProps = Pick<Props, 'color' | 'duration' | 'size'>;

const Element = styled.div<ElementProps>`
  color: ${({ color }) => color || 'red'};
  font-size: ${({ size }) => size || '90px'};
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  transform: translateZ(0);
  animation: spinner ${({ duration }) => duration || '1.7s'} infinite ease,
    round ${({ duration }) => duration || '1.7s'} infinite ease;

  @keyframes spinner {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @keyframes round {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

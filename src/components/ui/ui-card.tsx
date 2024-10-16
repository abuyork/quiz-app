import React, { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  type: 'instructions' | 'criteria';
}

const Card: React.FC<CardProps> = ({ title, children, icon, type }) => {
  return (
    <StyledWrapper type={type}>
      <div className="card">
        <div className="bg">
          <div className="content">
            <h3 className="title">
              {icon && <span className="icon">{icon}</span>}
              {title}
            </h3>
            <div className="body">{children}</div>
          </div>
        </div>
        <div className="blob" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ type: 'instructions' | 'criteria' }>`
  .card {
    position: relative;
    width: 280px;
    height: 220px;
    border-radius: 18px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }

  .bg {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 268px;
    height: 208px;
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 14px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .content {
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${props => props.type === 'instructions' ? '#3366cc' : '#33cc66'};
    margin-bottom: 12px;
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 8px;
    display: flex;
    align-items: center;
  }

  .body {
    font-size: 0.9rem;
    color: #444;
    flex-grow: 1;
    overflow-y: auto;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: ${props => props.type === 'instructions' ? '#3366cc' : '#33cc66'};
    opacity: 0.8;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default Card;

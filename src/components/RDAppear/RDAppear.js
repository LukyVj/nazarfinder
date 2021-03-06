/** @jsx jsx */
import React, { Component } from "react";
import { css, jsx } from "@emotion/core";
import sheet from "../../images/sheet.png";

class RDAppear extends Component {
  render() {
    const styles = {
      root: css`
        animation: blur 5s forwards;
        position: relative;
        overflow: hidden;
        height: ${this.props.height - 8}px;
        width: ${this.props.width - 8}px;
        display: flex;
        align-items: center;
        border: 2px solid var(--Armadillo);
        position: relative;

        @media (max-width: 960px) {
          height: 300px;
          width: 300px;
          margin: 0 auto 1em;
        }

        &:before {
          content: "Click to expand";
          position: absolute;
          bottom: 0;
          right: 0;
          margin: 1em;
          z-index: 10;
          background: url(${require("../../images/announcement_background.png")})
            no-repeat center center / contain;
          color: var(--EcruWhite);
          font-size: 16px;
          padding: 12px 10px;
        }

        & > div {
          height: ${this.props.height - 8}px;
          position: absolute;
        }

        .normal,
        .invert {
          background-image: url(${this.props.image});
        }

        .normal {
          background-size: cover;
          background-position: center;
        }

        .invert {
          animation: mask 5s steps(69) forwards;
          background-size: cover;
          background-position: center;
          filter: invert(1) grayscale(1);
          -webkit-mask: url(${sheet});
          -webkit-mask-size: 7000% 100%;
          mask: url(${sheet});
          mask-size: 7000% 100%;
        }

        @keyframes blur {
          from {
            filter: blur(3px);
            opacity: 0;
          }
          to {
            filter: blur(0px);
            opacity: 1;
          }
        }

        @keyframes mask {
          from {
            -webkit-mask-position: 0% 0;
            mask-position: 0% 0;
          }
          to {
            -webkit-mask-position: 100% 0;
            mask-position: 100% 0;
          }
        }
      `
    };
    return (
      <div css={styles.root} onClick={this.props.onClick}>
        <div className="normal w-100p" css={this.props.childrenStyle}></div>
        <div className="invert w-100p" css={this.props.childrenStyle}></div>
      </div>
    );
  }
}

export default RDAppear;

import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 1200px;
`;

export default function Image({ src, alt }) {
  return <Img src={src} alt={alt} />;
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

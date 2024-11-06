import styled from "styled-components";
import PropTypes from "prop-types";

const Contact = styled.div`
  width: 20%;
  display: flex;
  gap: 10px;
  justify-content: end;
  cursor: pointer;
  /* border: 1px solid green; */
`;

export default function SocialMedia({ children }) {
  return (
    <Contact>
      {children}
      {/* <FaGithub style={{ color: "var(--color-gray-20)" }} />
      <FaTwitter style={{ color: "var(--color-gray-20)" }} />
      <FaLinkedinIn style={{ color: "var(--color-gray-20)" }} /> */}
    </Contact>
  );
}

SocialMedia.propTypes = {
  children: PropTypes.node,
};

const SocialButton = ({ iconClass, text, styles }) => {
  return (
    <span style={styles}>
      <i className={iconClass}></i>
      {text}
    </span>
  );
};
export default SocialButton;

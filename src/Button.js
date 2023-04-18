import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button() {
  return (
    <button className={styles.btn}>
      <Link to={`https://huibinkim.github.io/my-react-project/`}>Go home</Link>
    </button>
  );
}
Button.prototype = {
  text: PropTypes.string.isRequired,
};

export default Button; //내보내기? 같이 생각하는 중
//create-react-app 배우는 멋진 점은 분할하는 거?

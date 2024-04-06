import { Row, Col, Typography, Button } from "antd";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/config";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function Login() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const handleGGLogin = () => {
    signInWithPopup(auth, provider);
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      navigate("/");
    }
  });
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun Chat
          </Title>
          <Button
            onClick={handleGGLogin}
            style={{ width: "100%", marginBottom: 5 }}
          >
            Đăng nhập bằng Google
          </Button>
        </Col>
      </Row>
    </div>
  );
}

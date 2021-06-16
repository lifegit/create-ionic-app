import {useHistory} from "react-router";
import styles from './index.module.scss';
import {
  unstable_Button as Button,
} from '@ant-design/mobile'

const Index: React.FC = () => {

  const history = useHistory();

  return (
    <div className={styles.page}>
      <div className={styles.col}>account</div>
      <Button type="primary" onPress={()=>history.push('/account/detailed')}>
        查看更多
      </Button>
    </div>
  );
};

export default Index;

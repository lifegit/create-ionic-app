import {useRequest} from 'ahooks';
import {Help, queryHelpList} from "./service";
// import {useAppContext} from "../../../models/AppContext";

import styles from './index.module.scss';
import {useAppContext} from "../../../models/AppContext";

const Index: React.FC = () => {
  const { initialState } = useAppContext()
  const { account } = initialState

  const id = "bale"
  const { data, error, loading } = useRequest<Help>(()=>queryHelpList(id))
  console.log("useRequest", data, error, loading)

  return (
    <div className={styles.page}>
      <div className={styles.col}>个人资料</div>
      姓名：${account?.username}
    </div>
  );
};

export default Index;

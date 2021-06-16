export interface Account{
  id: string;
  /** 手机号 */
  phone: string;
  /** 昵称 */
  username: string
  /** 头像 */
  avatar: string
  /** 性别 */
  gender: 'male' | 'female'
  /** 省份，如：`Yunnan` */
  province: string
  /** 城市，如：`Dalian` */
  city: string
  /** 国家，如：`China` */
  country: string
  /** 名片码（小程序太阳码） */
  code_image: string
  /** 全民经纪人等级 */
  broker?: Broker
}
export interface Broker{
  id: string;
  name: string;
  url: string;
}

export async function getInitialState(): Promise<{
  account?: Account
}> {

  return {
    account: { username: '张三' } as Account
  };
}
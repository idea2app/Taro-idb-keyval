import {
  setStorage,
  getStorage,
  removeStorage,
  clearStorage
} from '@tarojs/taro';

export async function set(key: IDBValidKey, data: any) {
  await setStorage({ key: key + '', data });
}

export async function get<T = any>(key: IDBValidKey): Promise<T | number> {
  try {
    const { data } = await getStorage<T>({ key: key + '' });

    return data;
  } catch (error) {
    console.debug(error);
  }
}

export async function del(key: IDBValidKey) {
  try {
    await removeStorage({ key: key + '' });
  } catch (error) {
    console.debug(error);
  }
}

export async function clear() {
  await clearStorage();
}

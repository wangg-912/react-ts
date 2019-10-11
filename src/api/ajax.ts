import request from "../utils/request"

interface TestAjax {
    name: string,
    age: number
}
export async function Login(params: TestAjax) {
    return request('/getTableInfos', {
        method: 'POST',
        data: params,
    });
}

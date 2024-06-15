// localhost:3000/detail/1
// localhost:3000/detail/2
// localhost:3000/detail/3
// slug : 내가 이동한 URL의 값

import {connectDB} from '@/util/db'
import { ObjectId } from 'mongodb'
// [폴더] : 동적 router(URL)
export default  async function Detail({params})
{
    const db = (await connectDB).db('mydb');
    let result = await db.collection("post").findOne({_id: ObjectId.createFromHexString(params.slug)})
    console.log(params);
    console.log(result);

    return(
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}
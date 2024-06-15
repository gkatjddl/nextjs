import { connectDB } from "@/util/db"
import Link from "next/link";

export default async function ListPage()
    {
        const db = (await connectDB).db('mydb');       // 데이터 베이스 이름
        let result = await db.collection('post').find().toArray();
        console.log(result)

        return(
            <div className="list-bg">
                {
                    result && result.length > 0 ? result.map((item, index)=>{
                        return(
                            <div key={index} className="list-item">
                                <Link href={'/detail/' + item._id}>
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                                </Link>
                            </div>
                        )
                    }) : <div> dkdkdkdk</div>
                }
            </div>
        );
    }
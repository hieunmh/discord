"use client";
import ClientOnly from "@/app/components/ClientOnly";
import Comments from "@/app/components/post/Comments";
import CommentsHeader from "@/app/components/post/CommentsHeader";
import { PostTypes } from "@/app/type";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function Post({ params } : PostTypes) {

    const router = useRouter();

    const postByID = {
        id: '123',
        user_id: '123',
        video_url: '/vn.mp4',
        text: 'this is a text',
        created_at: 'date here',
        profile: {
            user_id: '123',
            name: 'Hieu',
            image: 'https://placehold.co/100'
        }
    }

    const loopThroughPostUp = () => {
        console.log('loopThroughPostUp'); 
    }

    const loopThroughPostDown = () => {
        console.log('loopThroughPostDown');
    }

    return (
        <div id="PostPage" className="lg:flex justify-between w-full h-screen bg-black overflow-auto">
            <div className="lg:w-[calc(100%-540px)] h-full relative">
                <Link href={`/profile/${params?.userID}`}
                    className="absolute text-white z-20 m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
                >   
                    <AiOutlineClose size="27" />
                </Link>

                <div>
                    <button onClick={() => loopThroughPostUp()}
                        className="absolute z-20 right-4 top-4 flex items-center justify-center 
                        rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
                    >
                        <BiChevronUp size="30" color="#ffffff" />
                    </button>

                    <button onClick={() => loopThroughPostDown()}
                        className="absolute z-20 right-4 top-20 flex items-center justify-center 
                        rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
                    >
                        <BiChevronDown size="30" color="#ffffff" />
                    </button>
                </div>

                <img className="absolute z-20 top-[18px] left-[70px] rounded-full lg:mx-0 mx-auto" 
                    width={45} src="/images/tiktok-logo-small.png"
                />

                <ClientOnly>
                    {postByID?.video_url ? (
                        <video className="fixed object-cover w-full my-auto z-[0] h-screen" 
                            src="/vn.mp4" 
                        />
                    ) : null}

                    <div className="bg-black bg-opacity-70 lg:min-w-[480px] z-10 relative">
                        {true ? (
                            <video autoPlay controls loop muted 
                                className="h-screen mx-auto" src="/vn.mp4"
                             />
                        ): null}
                    </div>
                </ClientOnly>
            </div>

            <div id="InfoSection" className="lg:max-w-[550px] relative w-full h-full bg-white">
                <div className="py-7" />
                
                <ClientOnly>
                    {postByID?.video_url ? (
                        <CommentsHeader post={postByID} params={params} />
                    ) : null}
                </ClientOnly>

                <Comments params={params} />
            </div>
        </div>
    )
}